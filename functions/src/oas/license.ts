export class License {

    private name: string;
    private url?: string;

    constructor(name: string) {
        this.name = name;
    }

    public withUrl(url: string): License {
        this.url = url;
        return this;
    }
}
