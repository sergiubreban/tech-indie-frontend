import React from 'react';
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'

import {
  Button,
  HStack,
  IconButton,
  List,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Progress,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface PaginationProps {
  page: number;
  hideRowsPerPage?: boolean;
  rowsPerPageOptions?: number[];
  rowsPerPage: number;
  count: number;
  loading?: boolean;
  onChangePage: (value: number) => void;
  onChangeRowsPerPage: (value: number) => void;
}
const Pagination = (props: PaginationProps) => {
  const { page, rowsPerPage, rowsPerPageOptions, onChangeRowsPerPage, count, onChangePage, hideRowsPerPage, loading } =
    props;
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
  const open = () => setIsOpenDropdown(true);
  const close = () => setIsOpenDropdown(false);

  return (
    <HStack w="100%" justifyContent="flex-end" alignItems="center" spacing="12px">
      {!hideRowsPerPage && (
        <>
          <Text textStyle="pagination">Rows per page</Text>
          <Popover placement="bottom" arrowPadding={0} isOpen={isOpenDropdown} onClose={close}>
            <PopoverTrigger>
              <Button
                variant="simple"
                onClick={open}
                px={2}
                py={0}
                maxH="28px"
                bg={isOpenDropdown ? '#F6F6F6' : 'transparent'}
                border="1px solid #E1E2E6"
                borderRadius="2px"
              >
                <Text textStyle="pagination">
                  {rowsPerPage} <ChevronDownIcon />
                </Text>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent p="0" w="40px" top="-9px">
                <PopoverBody p="0">
                  <List spacing={3} flexDirection="column" display="flex" alignItems="center">
                    {(rowsPerPageOptions ?? [3, 5, 10]).map((value: number) => (
                      <Button
                        justifyContent="flex-start"
                        size="xs"
                        variant="simple"
                        _hover={{ color: 'green.600' }}
                        onClick={() => {
                          onChangeRowsPerPage(value);
                          close();
                        }}
                        key={value}
                      >
                        {value}
                      </Button>
                    ))}
                  </List>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}
              </PopoverContent>
            </Portal>
          </Popover>
        </>
      )}

      {loading ? (
        <Progress size="xs" isIndeterminate w="42px" colorScheme="teal" />
      ) : (
        <Text textStyle="pagination">
          {page * rowsPerPage} - {Math.min(page * rowsPerPage + rowsPerPage, count)} of {count}
        </Text>
      )}

      <IconButton
        disabled={page === 0}
        fontSize="12px"
        _hover={{ bg: 'gradient.iconbutton', borderRadius: '20' }}
        onClick={() => onChangePage(0)}
        aria-label="first page"
        variant="simple"
        icon={<BiChevronsLeft style={{ fontSize: '1rem' }} />}
      />
      <IconButton
        fontSize="6px"
        disabled={page === 0}
        _hover={{ bg: 'gradient.iconbutton', borderRadius: '20' }}
        onClick={() => onChangePage(page - 1)}
        aria-label="previous page"
        variant="simple"
        icon={<BiChevronLeft style={{ fontSize: '1rem' }} />}
      />
      <IconButton
        disabled={page + 1 === Math.ceil(count / rowsPerPage)}
        _hover={{ bg: 'gradient.iconbutton', borderRadius: '20' }}
        onClick={() => onChangePage(page + 1)}
        aria-label="next page"
        variant="simple"
        icon={<BiChevronRight style={{ fontSize: '1rem' }} />}
      />
      <IconButton
        disabled={page + 1 === Math.ceil(count / rowsPerPage)}
        _hover={{ bg: 'gradient.iconbutton', borderRadius: '20' }}
        onClick={() => onChangePage(Math.floor(count / rowsPerPage))}
        aria-label="last page"
        variant="simple"
        icon={<BiChevronsRight style={{ fontSize: '1rem' }} />}
      />
    </HStack>
  );
};

export default Pagination;
