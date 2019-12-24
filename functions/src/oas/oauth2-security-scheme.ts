import {OAuthFlows, SecuritySchemeType} from "./index";
import {SecurityScheme} from "./security-scheme";

export class OAuth2SecurityScheme extends SecurityScheme {

    private flows: OAuthFlows;

    constructor(flows: OAuthFlows) {
        super(SecuritySchemeType.OAUTH2);
        this.flows = flows;
    }
}
