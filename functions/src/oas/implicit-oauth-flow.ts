import {Dictionary} from "../dictionary";
import {OAuthFlow} from "./oauth-flow";

export class ImplicitOAuthFlow extends OAuthFlow<ImplicitOAuthFlow> {

    private authorizationUrl: string;

    constructor(scopes: Dictionary<string>, authorizationUrl: string) {
        super(scopes);
        this.authorizationUrl = authorizationUrl;
    }

}
