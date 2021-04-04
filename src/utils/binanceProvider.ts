import Binance, { ExchangeInfo, AssetBalance } from "binance-api-node";

export const validateBinanceAccount = async (apiKey: string, apiSecret: string): Promise<boolean> => {
  try {
    const binance = Binance({
      apiKey,
      apiSecret,
    });
    await binance.accountInfo();
    return true;
  } catch (e) {
    console.error(e.message);
    return false;
  }
};

export const getAllTreadingPairs = async (apiKey: string, apiSecret: string): Promise<ExchangeInfo> => {
  try {
    const binance = Binance({
      apiKey,
      apiSecret,
    });
    return binance.exchangeInfo();
  } catch (e) {
    console.error(e.message);
  }
};

export const getUserBalance = async (apiKey: string, apiSecret: string): Promise<AssetBalance[]> => {
  try {
    const binance = Binance({
      apiKey,
      apiSecret,
    });
    const { balances } = await binance.accountInfo();
    return balances;
  } catch (e) {
    console.error(e.message);
  }
};
