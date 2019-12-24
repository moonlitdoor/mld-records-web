import {Dictionary} from "../dictionary";
import {OAuthFlow} from "./oauth-flow";

export class AuthorizationUrlOAuthFlow extends OAuthFlow<AuthorizationUrlOAuthFlow> {

    private authorizationUrl: string;
    private tokenUrl: string;

    constructor(scopes: Dictionary<string>, authorizationUrl: string, tokenUrl: string) {
        super(scopes);
        this.authorizationUrl = authorizationUrl;
        this.tokenUrl = tokenUrl;
    }
}
