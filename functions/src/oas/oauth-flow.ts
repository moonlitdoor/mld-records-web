import {Dictionary} from "../dictionary";

// @ts-ignore
export class OAuthFlow<T extends OAuthFlow> {

    private refreshUrl?: string;
    private scopes: Dictionary<string>;

    constructor(scopes: Dictionary<string>) {
        this.scopes = scopes;
    }

    public withRefreshUrl(refreshUrl: string): T {
        this.refreshUrl = refreshUrl;
        // @ts-ignore
        return this;
    }
}
