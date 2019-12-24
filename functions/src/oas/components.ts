import {Dictionary} from "../dictionary";
import {Callback, Example, Header, Link, Parameter, Reference, RequestBody, Response, Schema, SecurityScheme} from "./index";

export class Components {

    private schemas?: Dictionary<Schema | Reference>;
    private responses?: Dictionary<Response | Reference>;
    private parameters?: Dictionary<Parameter | Reference>;
    private examples?: Dictionary<Example | Reference>;
    private requestBodies?: Dictionary<RequestBody | Reference>;
    private headers?: Dictionary<Header | Reference>;
    private securitySchemes?: Dictionary<SecurityScheme | Reference>;
    private links?: Dictionary<Link | Reference>;
    private callbacks?: Dictionary<Callback | Reference>;

    public setSchema(key: string, item: Schema | Reference): Components {
        if (this.schemas === undefined) {
            this.schemas = new Dictionary<Schema | Reference>();
        }
        this.schemas.set(key, item);
        return this;
    }

    public setResponse(key: string, item: Response | Reference): Components {
        if (this.responses === undefined) {
            this.responses = new Dictionary<Response | Reference>();
        }
        this.responses.set(key, item);
        return this;
    }

    public setParameter(key: string, item: Parameter | Reference): Components {
        if (this.parameters === undefined) {
            this.parameters = new Dictionary<Parameter | Reference>();
        }
        this.parameters.set(key, item);
        return this;
    }

    public setExample(key: string, item: Example | Reference): Components {
        if (this.examples === undefined) {
            this.examples = new Dictionary<Example | Reference>();
        }
        this.examples.set(key, item);
        return this;
    }

    public setRequestBody(key: string, item: RequestBody | Reference): Components {
        if (this.requestBodies === undefined) {
            this.requestBodies = new Dictionary<RequestBody | Reference>();
        }
        this.requestBodies.set(key, item);
        return this;
    }

    public setHeader(key: string, item: Header | Reference): Components {
        if (this.headers === undefined) {
            this.headers = new Dictionary<Header | Reference>();
        }
        this.headers.set(key, item);
        return this;
    }

    public setSecurityScheme(key: string, item: SecurityScheme | Reference): Components {
        if (this.securitySchemes === undefined) {
            this.securitySchemes = new Dictionary<SecurityScheme | Reference>();
        }
        this.securitySchemes.set(key, item);
        return this;
    }

    public setLink(key: string, item: Link | Reference): Components {
        if (this.links === undefined) {
            this.links = new Dictionary<Link | Reference>();
        }
        this.links.set(key, item);
        return this;
    }

    public setCallback(key: string, item: Callback | Reference): Components {
        if (this.callbacks === undefined) {
            this.callbacks = new Dictionary<Callback | Reference>();
        }
        this.callbacks.set(key, item);
        return this;
    }

}
