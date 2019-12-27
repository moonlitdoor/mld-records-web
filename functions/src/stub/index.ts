import {Application, Request, Response as Resp} from "express";
import {Inject, Singleton} from "typescript-ioc";
import {Documentation} from "../documentation";
import {HealthCheck} from "../healthcheck";
import {OpenApi} from "../oas";
import {Router} from "../router";

@Singleton
export class Stub {

    public static PATH: string = "/api/stub";
    public static TITLE: string = "The Stub API";

    constructor(@Inject private router: Router) {
        Documentation.init(this.router, Stub.name, Stub.PATH, Stub.TITLE, "The description of the stub api");
        HealthCheck.healthCheck(this.router, OpenApi.get(Stub.name));
    }

    public init(): Application {
        return this.router.init(Stub.PATH);
    }

}
