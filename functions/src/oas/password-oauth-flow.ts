import {Dictionary} from "../dictionary";
import {OAuthFlow} from "./oauth-flow";

export class PasswordOAuthFlow extends OAuthFlow<PasswordOAuthFlow> {

    private tokenUrl: string;

    constructor(scopes: Dictionary<string>, tokenUrl: string) {
        super(scopes);
        this.tokenUrl = tokenUrl;
    }
}
