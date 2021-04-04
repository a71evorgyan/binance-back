import { Schema, model, Document } from "mongoose";

export interface AlertProps extends Document {}

const AlertSchema: Schema = new Schema(
  {},
  {
    timestamps: true,
    _id: true,
    versionKey: false,
  }
);

export const alert = model<AlertProps>("alert", AlertSchema);
