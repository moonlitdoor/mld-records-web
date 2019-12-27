import compression from "compression";
import express, {Request, RequestHandler, Response as Resp, Router as ERouter} from "express";
// tslint:disable-next-line:no-implicit-dependencies
import {PathParams} from "express-serve-static-core";
import {Inject, Provided, Provider} from "typescript-ioc";
import {Server} from "../server";

const routerProvider: Provider = {
    get: () => {
        return new Router();
    }
};

@Provided(routerProvider)
export class Router {

    // @ts-ignore
    @Inject private server: Server;
    private readonly router: ERouter = express.Router();

    constructor() {
        this.router = express.Router();
        this.router.use(express.json());
        this.router.use(compression());
    }

    public init(path: string): express.Application {
        this.router.get("**", (request: Request, response: Resp) => {
            response.redirect(path);
        });
        return this.server.init(path, this.router);
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
