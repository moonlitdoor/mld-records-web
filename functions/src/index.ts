import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import {Container} from "typescript-ioc";
import {Api} from "./api";

admin.initializeApp();

export const api = functions.https.onRequest(Container.get(Api).init());

