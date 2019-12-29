import {Dictionary} from "../dictionary";
import {Example, MediaType, ParameterLocation, Reference, Schema} from "./index";

export class Parameter {

    private name?: string;
    private in: ParameterLocation;
    private description?: string;
    private required: boolean = false;
    private deprecated: boolean = false;
    private allowEmptyValue: boolean = false;
    private style?: string;
    private explode: boolean = false;
    private allowReserved: boolean = false;
    private schema?: Schema | Reference;
    private example?: any;
    private examples?: Dictionary<Example | Reference>;
    private content?: Dictionary<MediaType>;

    constructor(name: string | undefined, location: ParameterLocation) {
        this.name = name;
        this.in = location;
        if (location === ParameterLocation.PATH) {
            this.required = true;
        }
    }

    public withDescription(description: string): Parameter {
        this.description = description;
        return this;
    }

    public withStyle(style: string): Parameter {
        this.style = style;
        return this;
    }

    public withSchema(schema: Schema | Reference): Parameter {
        this.schema = schema;
        return this;
    }

    public withExample(example: any): Parameter {
        this.example = example;
        return this;
    }

    public isRequired(required: boolean): Parameter {
        this.required = required;
        return this;
    }

    public isDeprecated(deprecated: boolean): Parameter {
        this.deprecated = deprecated;
        return this;
    }

    public isAllowEmptyValue(allowEmptyValue: boolean): Parameter {
        this.allowEmptyValue = allowEmptyValue;
        return this;
    }

    public isExplode(explode: boolean): Parameter {
        this.explode = explode;
        return this;
    }

    public isAllowReserved(allowReserved: boolean): Parameter {
        this.allowReserved = allowReserved;
        return this;
    }

    public setExample(key: string, example: Example | Reference): Parameter {
        if (this.examples === undefined) {
            this.examples = new Dictionary();
        }
        this.examples.set(key, example);
        return this;
    }

    public setContent(key: string, mediaType: MediaType): Parameter {
        if (this.content === undefined) {
            this.content = new Dictionary<MediaType>();
        }
        this.content.set(key, mediaType);
        return this;
    }

}
