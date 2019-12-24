export class ServerVariable {

    private enum?: string[];
    private default: string;
    private description?: string;

    constructor(def: string) {
        this.default = def;
    }

    public withDescription(description: string): ServerVariable {
        this.description = description;
        return this;
    }

    public addEnum(e: string) {
        if (this.enum === undefined) {
            this.enum = [];
        }
        this.enum.push(e);
        return this;
    }
}
