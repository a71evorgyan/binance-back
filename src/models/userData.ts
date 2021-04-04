import { Schema, model, Document } from "mongoose";

export interface UserDataProps extends Document {
  key: string;
  token: string;
  enabled: boolean;
}

const UserDataSchema: Schema = new Schema(
  {
    key: { type: String },
    token: { type: String },
    enabled: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    _id: true,
    versionKey: false,
  }
);

export const userData = model<UserDataProps>("userData", UserDataSchema);
