import { Request } from "express";
import { AssetBalance } from "binance-api-node";
import { CreateAlertRequest } from "../requests";
import { getUserDataModel } from "../models";
import { generateToken, JWT_SECRET, decodeToken, validateBinanceAccount, getAllTradingPairs, getUserBalance } from "../utils";

export const createTokenForAlertSystem = async (request: Request): Promise<string> => {
  try {
    const userDataModel = getUserDataModel();
    const { key, secret } = request.query;

    const existingUserData = await userDataModel.findOneAndUpdate({ key: key as string }, { enabled: true });

    if (existingUserData) {
      return existingUserData.token;
    }

    const valid = await validateBinanceAccount(key as string, secret as string);

    if (valid) {
      const token = generateToken({ key: key as string, secret: secret as string }, JWT_SECRET);
      await userDataModel.create({ key, token, enabled: true });
      return token;
    }
  } catch (e) {
    console.error(`functionName: createTokenForAlertSystem - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processDestroyRequest = async (request: Request): Promise<any> => {
  try {
    console.log({ request });

    const userDataModel = getUserDataModel();

    const { token } = request.query;
    return userDataModel.updateOne({ token: token as string }, { enabled: false });
  } catch (e) {
    console.error(`functionName: destroyAlertSystem - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetAllTradingPairsRequest = async (request: Request): Promise<string[]> => {
  try {
    const { token } = request.query;
    const { key, secret } = decodeToken(token as string, JWT_SECRET);
    const exchangeInfo = await getAllTradingPairs(key, secret);
    const pairs: any = exchangeInfo.symbols.map((symbol) => {
      return symbol.symbol;
    });
    return pairs;
  } catch (e) {
    console.error(`functionName: processGetAllTreadingPairs - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetUserBalanceRequest = async (request: Request): Promise<string[]> => {
  try {
    const { token } = request.query;
    const { key, secret } = decodeToken(token as string, JWT_SECRET);
    const userBalances = await getUserBalance(key, secret);

    const freeBalances = userBalances.map(({ free }) => {
      return free;
    });
    return freeBalances;
  } catch (e) {
    console.error(`functionName: processGetUserBalanceRequest - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetAlertPullRequest = async (request: Request): Promise<any> => {
  // long pooling response
  try {
    console.log("heyy");
  } catch (e) {
    console.error(`functionName: processGetAlertPullRequest - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processCreateAlertRequest = async (payload: CreateAlertRequest): Promise<string> => {
  try {
    return "";
  } catch (e) {
    console.error(`functionName: processCreateAlertRequest - errorMessage: '${e.message}'`);
    throw e;
  }
};
