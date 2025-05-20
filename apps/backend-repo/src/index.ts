import { onRequest } from "firebase-functions/v2/https";
import Core from "./core/app";

export const api = onRequest(Core);
