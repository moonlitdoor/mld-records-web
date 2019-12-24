import {SecuritySchemeType} from "./index";
import {SecurityScheme} from "./security-scheme";

export class HttpSecurityScheme extends SecurityScheme {

    private scheme: string;
    private bearerFormat?: string;

    constructor(scheme: string) {
        super(SecuritySchemeType.HTTP);
        this.scheme = scheme;
    }

    public withBearerFormat(bearerFormat: string): HttpSecurityScheme {
        this.bearerFormat = bearerFormat;
        return this;
    }
}
