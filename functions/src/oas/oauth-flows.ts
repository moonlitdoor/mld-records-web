import {AuthorizationUrlOAuthFlow, ClientCredentialsOAuthFlow, ImplicitOAuthFlow, PasswordOAuthFlow} from "./index";

export class OAuthFlows {

    private implicit?: ImplicitOAuthFlow;
    private password?: PasswordOAuthFlow;
    private clientCredentials?: ClientCredentialsOAuthFlow;
    private authorizationCode?: AuthorizationUrlOAuthFlow;

    public withImplicit(implicit: ImplicitOAuthFlow): OAuthFlows {
        this.implicit = implicit;
        return this;
    }

    public withPassword(password: PasswordOAuthFlow): OAuthFlows {
        this.password = password;
        return this;
    }

    public withClientDredentials(clientCredentials: ClientCredentialsOAuthFlow): OAuthFlows {
        this.clientCredentials = clientCredentials;
        return this;
    }

    public withAuthorizationCode(authorizationCode: AuthorizationUrlOAuthFlow): OAuthFlows {
        this.authorizationCode = authorizationCode;
        return this;
    }

}
