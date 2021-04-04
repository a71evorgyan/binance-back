import Container from "typedi";
import { Model } from "mongoose";
import { UserDataProps } from "./userData";
import { AlertProps } from "./alert";

export * from "./userData";
export * from "./alert";

export const getUserDataModel = (): Model<UserDataProps> => {
  return Container.get("model.userData");
};

export const getAlertModel = (): Model<AlertProps> => {
  return Container.get("model.alert");
};
