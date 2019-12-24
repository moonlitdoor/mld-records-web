import {Dictionary} from "../dictionary";

export class SecurityRequirement extends Dictionary<string[]> {

    public setSecurityRequirement(key: string, securityRequirement: string[]): SecurityRequirement {
        this.set(key, securityRequirement);
        return this;
    }
}
