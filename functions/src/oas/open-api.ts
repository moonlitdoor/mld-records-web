import {Components, ExternalDocumentation, Info, PathItem, Paths, SecurityRequirement, Server, Tag} from "./index";

export class OpenApi {

    public static get(name: string): OpenApi {
        let openApi = OpenApi.apis.get(name);
        if (openApi === undefined) {
            openApi = new OpenApi();
            OpenApi.apis.set(name, openApi);
        }
        return openApi;
    }
    private static apis: Map<string, OpenApi> = new Map<string, OpenApi>();

    private openapi: string = "3.0.2";
    private info?: Info;
    private servers?: Server[];
    private paths: Paths = new Paths();
    private components?: Components;
    private security?: SecurityRequirement[];
    private tags?: Tag[];
    private externalDocs?: ExternalDocumentation;

    public withInfo(info: Info): OpenApi {
        this.info = info;
        return this;
    }

    public withComponents(components: Components): OpenApi {
        this.components = components;
        return this;
    }

    public withExternalDocumentation(externalDocumentation: ExternalDocumentation): OpenApi {
        this.externalDocs = externalDocumentation;
        return this;
    }

    public setPath(key: string, path: PathItem): OpenApi {
        this.paths.set(key, path);
        return this;
    }

    public addSecurityRequirement(securityRequirement: SecurityRequirement): OpenApi {
        if (this.security === undefined) {
            this.security = [];
        }
        this.security.push(securityRequirement);
        return this;
    }

    public addTag(tag: Tag): OpenApi {
        if (this.tags === undefined) {
            this.tags = [];
        }
        this.tags.push(tag);
        return this;
    }

    public addServer(server: Server): OpenApi {
        if (this.servers === undefined) {
            this.servers = [];
        }
        this.servers.push(server);
        return this;
    }

}
