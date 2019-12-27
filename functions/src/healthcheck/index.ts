import {Request, Response as Resp} from "express";
import {HttpStatus, HttpStatusCode, MediaType, OpenApi, Operation, PathItem, Reference, Response, Responses, Tag} from "../oas";
import {Router} from "../router";

export class HealthCheck {

    public static healthCheck(router: Router, openApi: OpenApi) {
        openApi
            .addTag(new Tag("Health Check")
                .withDescription("Quickly check the health of the API"))
            .setPath("/healthcheck", new PathItem()
                .withGet(new Operation(new Responses()
                    .setResponse(HttpStatusCode.OK, new Response(HttpStatus.OK)
                        .setContent(HttpStatus.OK, new MediaType()
                            .withExample("OK")))
                    .setResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, new Reference("#/components/responses/INTERNAL_SERVER_ERROR")))
                    .addTag("Health Check")
                    .withOperationId("healthcheck")
                    .withSummary("Health Check")
                    .withDescription("The API Health Check.")));

        router.get("/healthcheck", (request: Request, response: Resp) => {
            response.sendStatus(200);
        });

    }

}
