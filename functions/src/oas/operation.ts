import {Dictionary} from "../dictionary";
import {Callback, ExternalDocumentation, Parameter, Reference, RequestBody, Responses, SecurityRequirement, Server} from "./index";

export class Operation {

    private tags?: string[];
    private summary?: string;
    private description?: string;
    private externalDocs?: ExternalDocumentation;
    private operationId?: string;
    private parameters?: Array<Parameter | Reference>;
    private requestBody?: RequestBody | Reference;
    private responses: Responses;
    private callbacks?: Dictionary<Callback | Reference>;
    private deprecated: boolean = false;
    private security?: SecurityRequirement[];
    private servers?: Server[];

    constructor(responses: Responses) {
        this.responses = responses;
    }

    public withSummary(summary: string): Operation {
        this.summary = summary;
        return this;
    }

    public withDescription(description: string): Operation {
        this.description = description;
        return this;
    }

    public withOperationId(operationId: string): Operation {
        this.operationId = operationId;
        return this;
    }

    public withExternalDocumentation(externalDocumentation: ExternalDocumentation): Operation {
        this.externalDocs = externalDocumentation;
        return this;
    }

    public withRequestBody(requestBody: RequestBody | Reference): Operation {
        this.requestBody = requestBody;
        return this;
    }

    public addTag(tag: string): Operation {
        if (this.tags === undefined) {
            this.tags = [];
        }
        this.tags.push(tag);
        return this;
    }

    public isDeprecated(deprecated: boolean): Operation {
        this.deprecated = deprecated;
        return this;
    }

    public setCallback(key: string, callback: Callback): Operation {
        if (this.callbacks === undefined) {
            this.callbacks = new Dictionary();
        }
        this.callbacks.set(key, callback);
        return this;
    }

    public addParameter(parameter: Parameter | Reference): Operation {
        if (this.parameters === undefined) {
            this.parameters = [];
        }
        this.parameters.push(parameter);
        return this;
    }

    public addSecurity(security: SecurityRequirement): Operation {
        if (this.security === undefined) {
            this.security = [];
        }
        this.security.push(security);
        return this;
    }

    public addServer(server: Server): Operation {
        if (this.servers === undefined) {
            this.servers = [];
        }
        this.servers.push(server);
        return this;
    }

}
