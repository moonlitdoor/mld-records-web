import {Dictionary} from "../dictionary";
import {HttpStatusCode, Reference, Response} from "./index";

export class Responses extends Dictionary<Response | Reference> {

    private default?: Response | Reference;

    public withDefault(def: Response | Reference): Responses {
        this.default = def;
        return this;
    }

    public setResponse(statusCode: HttpStatusCode, response: Response | Reference): Responses {
        this.set(statusCode, response);
        return this;
    }

}