import {Application, Request, Response as Resp} from "express";
import {Inject, Singleton} from "typescript-ioc";
import {Documentation} from "../documentation";
import {HealthCheck} from "../healthcheck";
import {OpenApi} from "../oas";
import {Router} from "../router";

@Singleton
export class Api {

    public static PATH: string = "/api";

    @Inject
    private documentation!: Documentation;

    constructor(@Inject private router: Router) {
        // routes here
        router.get("", this.documentation.getDocumentationHandler(Api.PATH));
        router.get("/data", this.documentation.getDataHandler(OpenApi.get(Api.name), "The base Api", Api.PATH));
        // Documentation.init(this.router, OpenApi.get(Api.name), Api.name, "The base Api", Api.PATH);
        HealthCheck.healthCheck(this.router, OpenApi.get(Api.name));
        router.get("**", (request: Request, response: Resp) => {
            response.redirect(Api.PATH);
        });
    }

    public init(): Application {
        return this.router.init(Api.PATH);
    }

}
