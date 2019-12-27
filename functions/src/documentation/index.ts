import {Request, Response as Resp} from "express";
import about from "../about";
import {Api} from "../api";
import {
    Components,
    Contact,
    ExternalDocumentation,
    Header,
    HttpStatus,
    HttpStatusCode,
    Info,
    License,
    MediaType,
    OpenApi,
    Operation,
    PathItem,
    Reference,
    Response,
    Responses,
    Schema,
    Server,
    Tag
} from "../oas";
import {Router} from "../router";
import {Stub} from "../stub";

export class Documentation {

    public static init(router: Router, name: string, rootPath: string, title: string, description: string, isBaseApi: boolean = false) {

        OpenApi.get(name)
            .withInfo(new Info(title, about.version)
                .withDescription(description)
                .withTermsOfService("/tos")
                .withContact(new Contact()
                    .withName("Moonlit Door Software")
                    .withUrl("https://www.moonlitdoor.com")
                    .withEmail("support@moonlitdoor.com"))
                .withLicense(new License("MIT")
                    .withUrl("https://github.com/moonlitdoor/mld-records-web/blob/master/LICENSE")))
            .addServer(new Server(rootPath))
            .withComponents(new Components()
                .setResponse("INTERNAL_SERVER_ERROR", new Response(HttpStatus.INTERNAL_SERVER_ERROR)
                    .setContent("None", new MediaType()
                        .withExample(""))))
            .addTag(new Tag(Documentation.TAG)
                .withDescription("API Documentation"))
            .setPath("/", new PathItem()
                .withGet(new Operation(new Responses()
                    .setResponse(HttpStatusCode.OK, new Response(HttpStatus.OK)
                        .setContent("HTML", new MediaType()
                            .withSchema(new Schema()
                                .withType("HTML"))
                            .withExample("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n\t...\n  </body>\n</html>"))
                        .setHeader("Content-Type", new Header().withSchema(new Schema().withType("text/html"))))
                    .setResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, new Reference("#/components/responses/INTERNAL_SERVER_ERROR")))
                    .addTag(Documentation.TAG)
                    .withOperationId("docs")
                    .withSummary("Docs")
                    .withDescription("The documentation of the API.")))
            .setPath("/data", new PathItem()
                .withGet(new Operation(new Responses()
                    .setResponse(HttpStatusCode.OK, new Response(HttpStatus.OK)
                        .setContent("OpenAPI", new MediaType()
                            .withSchema(new Schema()
                                .withType("OpenAPI")
                                .withExternalDocumentation(new ExternalDocumentation("https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md")
                                    .withDescription("Specification")))
                            .withExample("{\"openapi\":\"3.0.2\",\"paths\":...}"))
                        .setHeader("Content-Type", new Header().withSchema(new Schema().withType("application/json")))
                        .setHeader("Content-Encoding", new Header().withSchema(new Schema().withType("gzip"))))
                    .setResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, new Reference("#/components/responses/INTERNAL_SERVER_ERROR")))
                    .addTag(Documentation.TAG)
                    .withOperationId("data")
                    .withSummary("Data")
                    .withDescription("The OpenAPI data for the documentation")));

        if (isBaseApi) {
            OpenApi.get(name).addTagAt(0, new Tag("APIs")
                .withExternalDocumentation(new ExternalDocumentation(Stub.PATH).withDescription(Stub.TITLE)));
        } else {
            OpenApi.get(name).withExternalDocumentation(new ExternalDocumentation(Api.PATH).withDescription(Api.TITLE));
        }

        router.get("/", (request: Request, response: Resp) => {
            response.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Clinic Records API ${rootPath}</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet">
    <style>body{margin:0;padding:0;}</style>
  </head>
  <body>
    <redoc spec-url="${rootPath}/data" path-in-middle-panel hide-download-button expand-responses="200,201"</redoc>
    <script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"> </script>
  </body>
</html>`);
        });

        router.get("/data", (request: Request, response: Resp) => {
            response.json(OpenApi.get(name));
        });
    }

    private static TAG: string = "Documentation";

}
