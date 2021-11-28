import { FC, useEffect, useMemo, useState } from "react";
import ccxt from 'ccxt'
import { Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import Pagination from "./Pagination";

const useBinanceClinet = () => {
  const [binanceClient] = useState(() => new ccxt.binance());

  return binanceClient;
}
interface Currency {
  symbol: string;
  status: string;
}
const CurrenciesTable: FC<{ query?: string }> = ({ query }) => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([])
  const binanceClient = useBinanceClinet();

  const onChangeLimit = (val: number) => {
    setLimit(val)
  }

  useEffect(() => {
    setFilteredCurrencies(query ? currencies.filter(({ symbol }) => symbol.indexOf(query.toUpperCase()) > -1) : currencies)
  }, [currencies, query])

  useEffect(() => {
    binanceClient.loadMarkets().then((data) => {
      setCurrencies(Object.values(data).map((market) => ({ symbol: market.symbol, status: market.info?.status })))
    })
  }, [binanceClient])

  const currencyRows = useMemo(() => {
    return filteredCurrencies.slice(page * limit, page * limit + limit).map((curr) => {
      return <Tr key={curr.symbol}>
        <Td><Text fontWeight='500'>{curr.symbol}</Text></Td>
        <Td><Text fontWeight='500'>{curr.status}</Text></Td>
      </Tr>
    })
  }, [page, limit, filteredCurrencies])

  return <>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>symbol</Th>
          <Th>status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {currencyRows}
      </Tbody>
    </Table>
    <Pagination rowsPerPage={limit}
      count={filteredCurrencies.length}
      onChangeRowsPerPage={onChangeLimit}
      onChangePage={setPage}
      page={page}
      rowsPerPageOptions={[10, 20, 30]} />
  </>
}

export default CurrenciesTable