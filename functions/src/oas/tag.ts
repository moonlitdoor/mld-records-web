import {ExternalDocumentation} from "./external-documentation";

export class Tag {

    private name: string;
    private description?: string;
    private externalDocs?: ExternalDocumentation;

    constructor(name: string) {
        this.name = name;
    }

    public withDescription(description: string): Tag {
        this.description = description;
        return this;
    }

    public withExternalDocumentation(externalDocs: ExternalDocumentation): Tag {
        this.externalDocs = externalDocs;
        return this;
    }
}
