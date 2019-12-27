import {Application} from "express";
import {Inject, Singleton} from "typescript-ioc";
import {Documentation} from "../documentation";
import {HealthCheck} from "../healthcheck";
import {OpenApi} from "../oas";
import {Router} from "../router";

@Singleton
export class Api {

    public static PATH: string = "/api";
    public static TITLE: string = "The Records API";

    constructor(@Inject private router: Router) {
        Documentation.init(this.router, Api.name, Api.PATH, Api.TITLE, "A list of all the APIs.", true);
        HealthCheck.healthCheck(this.router, OpenApi.get(Api.name));
    }

    public init(): Application {
        return this.router.init(Api.PATH);
    }

}
