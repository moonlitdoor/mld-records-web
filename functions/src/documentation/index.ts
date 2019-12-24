import {Request, Response as Resp} from "express";
import { Provided, Provider} from "typescript-ioc";
import {
    Contact, ExternalDocumentation, Header,
    HttpStatusCode, Info, License, OpenApi,
    Operation, PathItem, Response, Responses,
    Server, ServerVariable, Tag
} from "../oas";

const documentationProvider: Provider = {
    get: () => {
        return new Documentation();
    }
};

@Provided(documentationProvider)
export class Documentation {

    private static TAG: string = "Documentation";

    // openApi
    // .wiTag(new Tag().wName(Documentation.TAG))
    //     .setPath("/", new PathItem()
    //         .withGet(new Operation(
    //             new Responses()
    //                 .setResponse(HttpStatusCode.OK, new Response(HttpStatusCode.OK)
    //                     .setHeader("Content-Type", new Header()))
    //         )));
    // .wTag(Documentation.TAG)
    // .wOperationId("docs")
    // .wSummary("Documentation")
    // .wDescription("The API documentation.")
    // .wProduces("text/html")
    // .wResponse("200", new Response()
    //     .wDescription("OK")
    //     .wHeader("Content-Type", new StringProperty()
    //         .wType("String")
    //         .wFormat("text/html")
    //         .wDescription("The media-type that is returned."))
    //     .wExample("test", "test")
    //     .wSchema(new FileProperty()
    //         .wExample(Documentation.HTML)))));

    public getDocumentationHandler(rootPath: string): (request: Request, response: Resp) => void {
        return (request: Request, response: Resp): void => {
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
    <redoc spec-url="${rootPath}/data" path-in-middle-panel expand-responses="200,201"</redoc>
    <script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"> </script>
  </body>
</html>`
            );
        };
    }

    // openApi
    //     .wPath("/data", new PathItem()
    //         .wGet(new Operation()
    //             .wTag(Documentation.TAG)
    //             .wOperationId("data")
    //             .wSummary("Data")
    //             .wDescription("The OpenAPI definition.")
    //             .wProduces("application/json")
    //             .wResponse("200", new Response()
    //                 .wDescription("OK")
    //                 .wHeader("Content-Type", new StringProperty()
    //                     .wType("String")
    //                     .wFormat("application/json")
    //                     .wDescription("The media-type that is returned."))
    //                 .wSchema(new ObjectProperty()
    //                     .wTitle("Json Object")
    //                     .wType("OpenApi 2.0")
    //                     .wExample({})
    //                 ))));

    public getDataHandler(openApi: OpenApi, title: string, description: string): (request: Request, response: Resp) => void {

        openApi
            .withInfo(new Info(title, "0.0.0-1-gabc1234")
                .withDescription("this is a test description")
                .withTermsOfService("Terms of service")
                .withContact(new Contact()
                    .withName("Moonlit Door Software")
                    .withUrl("https://example.com")
                    .withEmail("support@moonlitdoor.com"))
                .withLicense(new License("MIT")
                    .withUrl("https:example.com/license")))
            .addServer(new Server("http://records.clinic")
                .withDescription("server description")
                .setVariable("someKey", new ServerVariable("adgadf")
                    .withDescription("server var description")
                    .addEnum("a")
                    .addEnum("b")));

        return (request: Request, response: Resp): void => {
            response.json(openApi);
        };
    }
}
