import {SecuritySchemeType} from "./index";
import {SecurityScheme} from "./security-scheme";

export class OpenIdConnectSecurityScheme extends SecurityScheme {

    private openIdConnectUrl: string;

    constructor(openIdConnectUrl: string) {
        super(SecuritySchemeType.OPEN_ID_CONNECT);
        this.openIdConnectUrl = openIdConnectUrl;
    }
}
