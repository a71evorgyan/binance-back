import jwt, { DecodeOptions } from "jsonwebtoken";
import { TokenPayload } from "./types";

export const generateToken = (payload: TokenPayload, secret: string, expiresIn: string = "48h"): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const decodeToken = (token: string, secret: string): TokenPayload => {
  const valid = jwt.verify(token, secret);
  if (!valid) throw new Error("Token is expired");

  const payload = jwt.decode(token, secret as DecodeOptions);
  if (!payload) throw new Error("Something wrong with token");
  return payload as TokenPayload;
};
