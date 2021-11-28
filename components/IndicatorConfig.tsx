import { Box, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { FC } from "react";


const GqlSnippetRow: FC<{ label: string, closing?: string }> = (props) => {
  const { label, closing } = props;
  return <Box pl='1rem'>
    <Text textStyle='body'>{label}</Text>
    {props.children}
    {!!props.children && <Text textStyle='body'>{closing ?? '}'}</Text>}
  </Box>
}

const RestSnippetRow: FC<{ uri: string }> = (props) => {
  return <Stack direction='row' spacing={4} p='2' pt='1rem' >
    <Box>
      <Tag size={'sm'} variant="solid" colorScheme="green">
        <Text fontSize='12px' fontWeight='600' color='#fff'>GET</Text>
      </Tag>
    </Box>
    <Text textStyle='body' wordBreak='break-all'>{props.uri}</Text>
  </Stack>
}

export const config = {
  indicators: [{
    name: "Relative Strength Index (RSI)",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '14' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the RSI for current candle. Last element is the current RSI value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/rsi?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query rsi(){'>
          <GqlSnippetRow label="rsi(market: 'BTC/USDT'){">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "Stochastic Relative Strength Index",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'rsiPeriod', type: 'number', default: '14' },
      { name: 'stochasticPeriod', type: 'number', default: '14' },
      { name: 'kPeriod', type: 'number', default: '3' },
      { name: 'dPeriod', type: 'number', default: '3' },
    ],
    models: [
      { name: 'k', type: 'number' },
      { name: 'd', type: 'number' },
      { name: 'stochRSI', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/stochasticrsi?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query stochasticrsi() {'>
          <GqlSnippetRow label="stochasticrsi(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='k' />
              <GqlSnippetRow label='d' />
              <GqlSnippetRow label='stochRSI' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='k: 13.531506425143204,' />
            <GqlSnippetRow label='d: 21.865476769282967,' />
            <GqlSnippetRow label='stochRSI: 9.800278680910354' />
          </GqlSnippetRow>
          <GqlSnippetRow label={`results: [`} closing={']'}>
            <GqlSnippetRow label='{' closing='},'>
              <GqlSnippetRow label='k: 16.720854621458404,' />
              <GqlSnippetRow label='d: 17.75707180079699,' />
              <GqlSnippetRow label='stochRSI: 20.80817464003711' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  {
    name: "MACD",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'fastPeriod', type: 'number', default: '12' },
      { name: 'slowPeriod', type: 'number', default: '26' },
      { name: 'signalPeriod', type: 'number', default: '9' },
      { name: 'SimpleMAOscillator', type: 'boolean', default: 'false' },
      { name: 'SimpleMASignal', type: 'boolean', default: 'false' },
    ],
    models: [
      { name: 'MACD', type: 'number' },
      { name: 'signal', type: 'number' },
      { name: 'histogram', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/macd?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query macd() {'>
          <GqlSnippetRow label="macd(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='MACD' />
              <GqlSnippetRow label='signal' />
              <GqlSnippetRow label='histogram' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='MACD: 13.531506425143204,' />
            <GqlSnippetRow label='signal: 21.865476769282967,' />
            <GqlSnippetRow label='histogram: 9.800278680910354' />
          </GqlSnippetRow>
          <GqlSnippetRow label='{' closing='}'>
            <GqlSnippetRow label='MACD: 16.720854621458404,' />
            <GqlSnippetRow label='signal: 17.75707180079699,' />
            <GqlSnippetRow label='histogram: 20.80817464003711' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  {
    name: "ADX",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '14' },
    ],
    models: [
      { name: 'adx', type: 'number' },
      { name: 'mdi', type: 'number' },
      { name: 'pdi', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/adx?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query adx() {'>
          <GqlSnippetRow label="adx(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='adx' />
              <GqlSnippetRow label='mdi' />
              <GqlSnippetRow label='pdi' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='adx: 13.531506425143204,' />
            <GqlSnippetRow label='mdi: 21.865476769282967,' />
            <GqlSnippetRow label='pdi: 9.800278680910354' />
          </GqlSnippetRow>
          <GqlSnippetRow label='{' closing='}'>
            <GqlSnippetRow label='adx: 16.720854621458404,' />
            <GqlSnippetRow label='mdi: 17.75707180079699,' />
            <GqlSnippetRow label='pdi: 20.80817464003711' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  {
    name: "ATR",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '14' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the ATR for current candle. Last element is the current ATR value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/atr?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query atr() {'>
          <GqlSnippetRow label="atr(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "Awesome Oscillator",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'fastPeriod', type: 'number', default: '5' },
      { name: 'slowPeriod', type: 'number', default: '34' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the AO for current candle. Last element is the current AO value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/awesomeOscillator?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query awesomeOscillator() {'>
          <GqlSnippetRow label="awesomeOscillator(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "BollingerBands",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '14' },
    ],
    models: [
      { name: 'middle', type: 'number' },
      { name: 'upper', type: 'number' },
      { name: 'lower', type: 'number' },
      { name: 'pb', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/bollingerBands?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query bollingerBands() {'>
          <GqlSnippetRow label="bollingerBands(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='middle' />
              <GqlSnippetRow label='upper' />
              <GqlSnippetRow label='lower' />
              <GqlSnippetRow label='pb' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='middle: 13.531506425143204,' />
            <GqlSnippetRow label='upper: 21.865476769282967,' />
            <GqlSnippetRow label='lower: 24.253773169282967,' />
            <GqlSnippetRow label='pb: 9.800278680910354' />
          </GqlSnippetRow>
          <GqlSnippetRow label='{' closing='}'>
            <GqlSnippetRow label='middle: 16.720854621458404,' />
            <GqlSnippetRow label='upper: 17.75707180079699,' />
            <GqlSnippetRow label='lower: 14.25377310079699,' />
            <GqlSnippetRow label='pb: 20.80817464003711' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  {
    name: "CCI",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '20' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the CCI for current candle. Last element is the current CCI value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/cci?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query cci() {'>
          <GqlSnippetRow label="cci(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "Force Index",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '1' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the FI for current candle. Last element is the current FI value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/forceIndex?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query forceIndex() {'>
          <GqlSnippetRow label="forceIndex(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "KST",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'ROCPer1', type: 'number', default: '10' },
      { name: 'ROCPer2', type: 'number', default: '15' },
      { name: 'ROCPer3', type: 'number', default: '20' },
      { name: 'ROCPer4', type: 'number', default: '30' },
      { name: 'SMAROCPer1', type: 'number', default: '10' },
      { name: 'SMAROCPer2', type: 'number', default: '10' },
      { name: 'SMAROCPer3', type: 'number', default: '10' },
      { name: 'SMAROCPer4', type: 'number', default: '15' },
      { name: 'signalPeriod', type: 'number', default: '9' },
    ],
    models: [
      { name: 'kst', type: 'number' },
      { name: 'signal', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/kst?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query kst() {'>
          <GqlSnippetRow label="kst(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='kst' />
              <GqlSnippetRow label='signal' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='kst: 13.531506425143204,' />
            <GqlSnippetRow label='signal: 0,' />
          </GqlSnippetRow>
          <GqlSnippetRow label='{' closing='}'>
            <GqlSnippetRow label='kst: 16.720854621458404,' />
            <GqlSnippetRow label='signal: 0,' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  {
    name: "Money Flow Index",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '14' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the MF for current candle. Last element is the current MF value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/moneyFlowIndex?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query moneyFlowIndex() {'>
          <GqlSnippetRow label="moneyFlowIndex(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "On Balanace Volume",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the OBV for current candle. Last element is the current OBV value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/onBalanceVolume?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query onBalanceVolume() {'>
          <GqlSnippetRow label="onBalanceVolume(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "Parabolic Stop And Reverse",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'step', type: 'number', default: '0.2' },
      { name: 'max', type: 'number', default: '0.2' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the PSAR for current candle. Last element is the current PSAR value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/psar?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query psar() {'>
          <GqlSnippetRow label="psar(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [2.5784, 2.7269, 2.7269, 2.723796, 2.71725216, 2.7006590304, 2.6850614885760002, 2.6703997992614403, 2.651175815320525, 2.633489750094883, 2.6172185700872923, 2.4301, 2.433732, 2.44168272, ...]' />
    }
  },
  {
    name: "Simple Moving Average",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '9' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the SMA for current candle. Last element is the current SMA value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/sma?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query sma() {'>
          <GqlSnippetRow label="sma(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [2.5784, 2.7269, 2.7269, 2.723796, 2.71725216, 2.7006590304, 2.6850614885760002, 2.6703997992614403, 2.651175815320525, 2.633489750094883, 2.6172185700872923, 2.4301, 2.433732, 2.44168272, ...]' />
    }
  },
  {
    name: "Stochastic Oscilator",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '14' },
      { name: 'signalPeriod', type: 'number', default: '3' },
    ],
    models: [
      { name: 'k', type: 'number' },
      { name: 'd', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/stochasticOscilator?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query stochasticOscilator() {'>
          <GqlSnippetRow label="stochasticOscilator(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='k' />
              <GqlSnippetRow label='d' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='k: 13.531506425143204,' />
            <GqlSnippetRow label='d: 21.865476769282967,' />
          </GqlSnippetRow>
          <GqlSnippetRow label={`results: [`} closing={']'}>
            <GqlSnippetRow label='{' closing='},'>
              <GqlSnippetRow label='k: 16.720854621458404,' />
              <GqlSnippetRow label='d: 17.75707180079699,' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  {
    name: "TRIX",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '18' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the TRIX for current candle. Last element is the current TRIX value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/trix?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query trix() {'>
          <GqlSnippetRow label="trix(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "Volume Profile",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'noOfBars', type: 'number', default: '14' },
    ],
    models: [
      { name: 'bearishVolume', type: 'number' },
      { name: 'bullishVolume', type: 'number' },
      { name: 'rangeStart', type: 'number' },
      { name: 'rangeEnd', type: 'number' },
      { name: 'totalVolume', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/volumeProfile?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query volumeProfile() {'>
          <GqlSnippetRow label="volumeProfile(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='bearishVolume' />
              <GqlSnippetRow label='bullishVolume' />
              <GqlSnippetRow label='rangeStart' />
              <GqlSnippetRow label='rangeEnd' />
              <GqlSnippetRow label='totalVolume' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='bearishVolume: 13.531506425143204,' />
            <GqlSnippetRow label='bullishVolume: 21.865476769282967,' />
            <GqlSnippetRow label='rangeStart: 2.91808572967,' />
            <GqlSnippetRow label='rangeEnd: 2.865476769282967,' />
            <GqlSnippetRow label='totalVolume: 2186547676,' />
          </GqlSnippetRow>
          <GqlSnippetRow label={`results: [`} closing={']'}>
            <GqlSnippetRow label='{' closing='},'>
              <GqlSnippetRow label='bearishVolume: 16.720854621458404,' />
              <GqlSnippetRow label='bullishVolume: 17.75707180079699,' />
              <GqlSnippetRow label='rangeStart: 2.91808579699,' />
              <GqlSnippetRow label='rangeEnd: 1.75707180079699,' />
              <GqlSnippetRow label='totalVolume: 17757071,' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  {
    name: "EMA",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '9' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the EMA for current candle. Last element is the current EMA value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/ema?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query ema() {'>
          <GqlSnippetRow label="ema(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "WMA",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '9' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the WMA for current candle. Last element is the current WMA value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/wma?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query wma() {'>
          <GqlSnippetRow label="wma(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "WEMA",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '7' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the WEMA for current candle. Last element is the current WEMA value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/wema?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query wema() {'>
          <GqlSnippetRow label="wema(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [69.72, 64.85, 70.38, 76.13, 88.02, 83.01, 84.5, 84.46, 86.17, 88.79, 67.26, 68.91, 68.22, 73.86, 74.01, 69.68, 71.47, 69.37, 71.74, ...]' />
    }
  },
  {
    name: "Williams R.",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'period', type: 'number', default: '14' },
    ],
    models: [{ name: 'results', type: 'number[]', description: 'Each item in "results" array represent the WilliamsR for current candle. Last element is the current WilliamsR value' }],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/williamsR?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query williamsR() {'>
          <GqlSnippetRow label="williamsR(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results' />
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <GqlSnippetRow label='results: [-23.416442048517546,, -14.125820146661502, -36.395214203010426, -5.112734201333826, -24.09152086137284, -15.754393051908677, -13.204062788550305, -17.254847259031937, -14.70588235294113, -7.911764705882334, ...]' />
    }
  },
  {
    name: "Ichimoku Cloud",
    dto: [
      { name: 'market', type: 'string', default: 'BTC/USDT' },
      { name: 'timeframe', type: 'string', default: '1d' },
      { name: 'conversionPeriod', type: 'number', default: '9' },
      { name: 'basePeriod', type: 'number', default: '26' },
      { name: 'spanPeriod', type: 'number', default: '52' },
      { name: 'displacement', type: 'number', default: '26' },
    ],
    models: [
      { name: 'conversion', type: 'number' },
      { name: 'base', type: 'number' },
      { name: 'spanA', type: 'number' },
      { name: 'spanB', type: 'number' },
    ],
    example: {
      input: {
        rest: <RestSnippetRow uri={'/ichimokuCloud?market=BTC/USDT&timeframe=1d'} />,
        gql: <GqlSnippetRow label='query ichimokuCloud() {'>
          <GqlSnippetRow label="ichimokuCloud(market: 'BTC/USDT') {">
            <GqlSnippetRow label='results {' >
              <GqlSnippetRow label='conversion' />
              <GqlSnippetRow label='base' />
              <GqlSnippetRow label='spanA' />
              <GqlSnippetRow label='spanB' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      },
      output: <>
        <GqlSnippetRow label={`results: [`} closing={']'}>
          <GqlSnippetRow label='{' closing='},'>
            <GqlSnippetRow label='conversion: 13.531506425143204,' />
            <GqlSnippetRow label='base: 21.865476769282967,' />
            <GqlSnippetRow label='spanA: 2.91808572967,' />
            <GqlSnippetRow label='spanB: 2.865476769282967,' />
          </GqlSnippetRow>
          <GqlSnippetRow label={`results: [`} closing={']'}>
            <GqlSnippetRow label='{' closing='},'>
              <GqlSnippetRow label='conversion: 16.720854621458404,' />
              <GqlSnippetRow label='base: 17.75707180079699,' />
              <GqlSnippetRow label='spanA: 2.91808579699,' />
              <GqlSnippetRow label='spanB: 1.75707180079699,' />
            </GqlSnippetRow>
          </GqlSnippetRow>
        </GqlSnippetRow>
      </>
    }
  },
  ]
}