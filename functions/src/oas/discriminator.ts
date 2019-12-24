import {Dictionary} from "../dictionary";

export class Discriminator {

    private propertyName: string;
    private mapping?: Dictionary<string>;

    constructor(propertyName: string) {
        this.propertyName = propertyName;
    }

    public setMapping(key: string, mapping: string): Discriminator {
        if (this.mapping === undefined) {
            this.mapping = new Dictionary<string>()
        }
        this.mapping.set(key, mapping);
        return this;
    }
}
