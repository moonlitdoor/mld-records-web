import {Request, Response as Resp} from "express";
import {Inject} from "typescript-ioc";
import {
    HttpStatus,
    HttpStatusCode,
    MediaType,
    OpenApi,
    Operation,
    Parameter,
    ParameterLocation,
    PathItem,
    Response,
    Responses,
    Schema,
    Tag
} from "../oas";
import {Router} from "../router";
import {Repository} from "./repository";

export class Routes {

    constructor(@Inject private repository: Repository) {
    }

    public init(router: Router, openApi: OpenApi) {

        openApi.addTagAt(0, new Tag("Stub").withDescription("desc"))
            .setPath("/proving/{id}", new PathItem()
                .withGet(new Operation(new Responses()
                    .setResponse(HttpStatusCode.OK, new Response(HttpStatus.OK)
                        .setContent("OK", new MediaType()
                            .withExample("OK"))))
                    .addTag("Stub")
                    .withOperationId("proving")
                    .addParameter(new Parameter("id", ParameterLocation.PATH)
                        .withSchema(new Schema()
                            .withType("path")
                            .withTitle("id")
                            .withExample("/proving/4")
                            .withDescription("desc"))))
                .withSummary("summary")
                .withDescription("desc"));

        router.get("/proving/:id", async (request: Request, response: Resp) => {
            const id = Number.parseInt(request.params.id, 10);
            response.status(200).send(await this.repository.doSomething(id));
        });
    }

}
