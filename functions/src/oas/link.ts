import {Dictionary} from "../dictionary";
import {Server} from "./index";

export class Link {

    private operationRef?: string;
    private operationId?: string;
    private parameters?: Dictionary<any | string>;
    private requestBody?: any | string;
    private description?: string;
    private server?: Server;

    public withOperationRef(operationRef: string): Link {
        this.operationRef = operationRef;
        return this;
    }

    public withOperationId(operationId: string): Link {
        this.operationId = operationId;
        return this;
    }

    public withRequestBody(requestBody: any | string) {
        this.requestBody = requestBody;
        return this;
    }

    public withDesription(description: string): Link {
        this.description = description;
        return this;
    }

    public withServer(server: Server): Link {
        this.server = server;
        return this;
    }

    public setParameter(key: string, parameter: any | string) {
        if (this.parameters === undefined) {
            this.parameters = new Dictionary();
        }
        this.parameters.set(key, parameter);
        return this;
    }

}
