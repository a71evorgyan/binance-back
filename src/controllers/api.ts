import { Request, Response, NextFunction } from "express";
import {
  createTokenForAlertSystem,
  destroyAlertSystem,
  processGetAllTreadingPaitsRequest,
  processGetAlertPullRequest,
  processGetUserBalanceRequest,
  processCreateAlertRequest,
} from "../services";

export const initialize = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const token = await createTokenForAlertSystem(req);

    return res.status(201).json(token);
  } catch (err) {
    next(err);
  }
};

export const destroy = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    await destroyAlertSystem(req);

    return res.status(204);
  } catch (err) {
    next(err);
  }
};

export const getAllTreadingPaits = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const result = await processGetAllTreadingPaitsRequest(req);

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const getAlertPull = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const result = await processGetAlertPullRequest(req);

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const getUserBalance = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const result = await processGetUserBalanceRequest(req);

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const createAlert = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const result = await processCreateAlertRequest(req.body);

    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
