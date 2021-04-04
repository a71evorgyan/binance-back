import { Request } from "express";
import { CreateAlertRequest } from "../requests";
import { getUserDataModel } from "../models";

export const createTokenForAlertSystem = async (request: Request): Promise<string> => {
  try {
    const userDataModel = getUserDataModel();
  } catch (e) {
    console.error(`functionName: createTokenForAlertSystem - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const destroyAlertSystem = async (request: Request): Promise<void> => {
  try {
    console.log("heyy");
  } catch (e) {
    console.error(`functionName: destroyAlertSystem - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetAllTreadingPaitsRequest = async (request: Request): Promise<any> => {
  try {
  } catch (e) {
    console.error(`functionName: processGetAllTreadingPaits - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetAlertPullRequest = async (request: Request): Promise<any> => {
  // long pooling response
  try {
  } catch (e) {
    console.error(`functionName: processGetAlertPullRequest - errorMessage: '${e.message}'`);
    throw e;
  }
};

export const processGetUserBalanceRequest = async (request: Request): Promise<string> => {
  try {
  } catch (e) {
    console.error(`functionName: processGetUserBalanceRequest - errorMessage: '${e.message}'`);
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
