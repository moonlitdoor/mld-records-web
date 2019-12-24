import {Dictionary} from "../dictionary";
import {ServerVariable} from "./index";

export class Server {

    private url: string;
    private description?: string;
    private variables?: Dictionary<ServerVariable>;

    constructor(url: string) {
        this.url = url;
    }

    public withDescription(description: string): Server {
        this.description = description;
        return this;
    }

    public setVariable(key: string, variable: ServerVariable) {
        if (this.variables === undefined) {
            this.variables = new Dictionary<ServerVariable>();
        }
        this.variables.set(key, variable);
        return this;
    }
}
