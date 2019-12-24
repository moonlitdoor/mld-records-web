export class ExternalDocumentation {

    private description?: string;
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public withDescription(description: string): ExternalDocumentation {
        this.description = description;
        return this;
    }

}
