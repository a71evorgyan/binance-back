import express from "express";
import { validationQueryMiddleware, validationBodyMiddleware } from "../../middlewares";
import { GetInitRequest, DeleteDestroyRequest, GetAllTreadingPaitsRequest, GetUserBalanceRequest, CreateAlertRequest } from "../../requests";
import { initialize, destroy, getAllTreadingPaits, getAlertPull, getUserBalance, createAlert } from "../../controllers";
import { GetAlertPullRequest } from "../../requests/get-alert-pull";

const router = express.Router();

router.get("/init", validationQueryMiddleware(GetInitRequest), initialize);
router.get("/alertPull", validationQueryMiddleware(GetAlertPullRequest), getAlertPull);
router.get("/getUserBalance", validationQueryMiddleware(GetUserBalanceRequest), getUserBalance);
router.get("/getAllTreadingPaits", validationQueryMiddleware(GetAllTreadingPaitsRequest), getAllTreadingPaits);

router.post("/createAlert", validationBodyMiddleware(CreateAlertRequest), createAlert);

router.delete("/destroy", validationQueryMiddleware(DeleteDestroyRequest), destroy);

export default router;
