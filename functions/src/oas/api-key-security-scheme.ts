import {SecuritySchemeLocation, SecuritySchemeType} from "./index";
import {SecurityScheme} from "./security-scheme";

export class ApiKeySecurityScheme extends SecurityScheme {

    private name: string;
    private in: SecuritySchemeLocation;

    constructor(name: string, location: SecuritySchemeLocation) {
        super(SecuritySchemeType.API_KEY);
        this.name = name;
        this.in = location;
    }
}
