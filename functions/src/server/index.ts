import express, {Application, Router} from "express";
import {Singleton} from "typescript-ioc";

@Singleton
export class Server {

    private app: Application;

    constructor() {
        this.app = express();
        this.app.disable("x-powered-by");
    }

    public init(path: string, router: Router): express.Application {
        return this.app.use(path, router);
    }

}
