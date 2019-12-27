import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import {Container} from "typescript-ioc";
import {Api} from "./api";
import {Stub} from "./stub";

admin.initializeApp();

export const stub = functions.https.onRequest(Container.get(Stub).init());
export const api = functions.https.onRequest(Container.get(Api).init());
