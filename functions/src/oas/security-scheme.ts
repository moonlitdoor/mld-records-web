import {SecuritySchemeType} from "./index";

export class SecurityScheme {
    private type: SecuritySchemeType;
    private description?: string;

    constructor(type: SecuritySchemeType) {
        this.type = type;
    }

    public withDescription(description: string): SecurityScheme {
        this.description = description;
        return this;
    }

}
