import compression from "compression";
import express, {Application, RequestHandler, Router as ERouter} from "express";
// tslint:disable-next-line:no-implicit-dependencies
import {PathParams} from "express-serve-static-core";
import {Singleton} from "typescript-ioc";

@Singleton
export class Router {

    private app: Application;
    private readonly router: ERouter = express.Router();

    constructor() {
        this.app = express();
        this.app.disable("x-powered-by");
        this.router = express.Router();
        this.router.use(express.json());
        this.router.use(compression());
    }

    public init(path: string): express.Application {
        return this.app.use(path, this.router);
    }

    public get(path: PathParams, ...handlers: RequestHandler[]) {
        return this.router.get(path, handlers);
    }

    public post(path: PathParams, ...handlers: RequestHandler[]) {
        return this.router.post(path, handlers);
    }

    public put(path: PathParams, ...handlers: RequestHandler[]) {
        return this.router.put(path, handlers);
    }

    public delete(path: PathParams, ...handlers: RequestHandler[]) {
        return this.router.delete(path, handlers);
    }

}
