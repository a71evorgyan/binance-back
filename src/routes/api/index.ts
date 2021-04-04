import express from "express";
import { validationQueryMiddleware, validationBodyMiddleware } from "../../middlewares";
import { GetInitRequest, DeleteDestroyRequest, GetAllTradingPairsRequest, GetUserBalanceRequest, CreateAlertRequest } from "../../requests";
import { initialize, destroy, getAllTradingPairs, getAlertPull, getUserBalance, createAlert } from "../../controllers";
import { GetAlertPullRequest } from "../../requests/get-alert-pull";

const router = express.Router();

router.get("/init", validationQueryMiddleware(GetInitRequest), initialize);
router.get("/getAllTradingPairs", validationQueryMiddleware(GetAllTradingPairsRequest), getAllTradingPairs);
router.get("/getUserBalance", validationQueryMiddleware(GetUserBalanceRequest), getUserBalance);
router.get("/alertPull", validationQueryMiddleware(GetAlertPullRequest), getAlertPull);

router.post("/createAlert", validationBodyMiddleware(CreateAlertRequest), createAlert);

router.delete("/destroy", validationQueryMiddleware(DeleteDestroyRequest), destroy);

export default router;
