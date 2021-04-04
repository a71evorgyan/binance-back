import { Request } from "express";
import { ExchangeInfo, AssetBalance } from "binance-api-node";
import { CreateAlertRequest } from "../requests";
import { getUserDataModel, userData } from "../models";
import { generateToken, JWT_SECRET, decodeToken, validateBinanceAccount, getAllTreadingPairs, getUserBalance } from "../utils";

export const createTokenForAlertSystem = async (request: Request): Promise<string> => {
  try {
    const userDataModel = getUserDataModel();
    const { key, secret } = request.query;

    const existingUserData = await userDataModel.findOne({ key: key as string });

    if (existingUserData) {
      throw new Error("User data already exists");
    }

    const valid = await validateBinanceAccount(key as string, secret as string);

    let token: string;
    if (valid) {
      token = generateToken({ key: key as string, secret: secret as string }, JWT_SECRET);
      await userDataModel.create({ key, token, enabled: true });
    }

    return token;
  } catch (e) {
    console.error(`functionName: createTokenForAlertSystem - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processDestroyRequest = async (request: Request): Promise<void> => {
  try {
    const userDataModel = getUserDataModel();

    const { token } = request.query;
    await userDataModel.updateOne({ token: token as string }, { enabled: false });
  } catch (e) {
    console.error(`functionName: destroyAlertSystem - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetAllTradingPairsRequest = async (request: Request): Promise<ExchangeInfo> => {
  try {
    const { token } = request.query;
    const { key, secret } = decodeToken(token as string, JWT_SECRET);
    const treadingPairs = await getAllTreadingPairs(key, secret);
    return treadingPairs;
  } catch (e) {
    console.error(`functionName: processGetAllTreadingPairs - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetUserBalanceRequest = async (request: Request): Promise<AssetBalance[]> => {
  try {
    const { token } = request.query;
    const { key, secret } = decodeToken(token as string, JWT_SECRET);
    const userBalance = await getUserBalance(key, secret);
    return userBalance;
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
