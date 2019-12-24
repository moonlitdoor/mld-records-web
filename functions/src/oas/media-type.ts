import {Dictionary} from "../dictionary";
import {Encoding, Example, Reference, Schema} from "./index";

export class MediaType {

    private schema?: Schema | Reference;
    private example?: any;
    private examples?: Dictionary<Example | Reference>;
    private encoding?: Dictionary<Encoding>;

    public withSchema(schema: Schema | Reference): MediaType {
        this.schema = schema;
        return this;
    }

    public withExample(example: any): MediaType {
        this.example = example;
        return this;
    }

    public setExample(key: string, example: Example | Reference): MediaType {
        if (this.examples === undefined) {
            this.examples = new Dictionary();
        }
        this.examples.set(key, example);
        return this;
    }

    public setEncoding(key: string, encoding: Encoding): MediaType {
        if (this.encoding === undefined) {
            this.encoding = new Dictionary();
        }
        this.encoding.set(key, encoding);
        return this;
    }
}
