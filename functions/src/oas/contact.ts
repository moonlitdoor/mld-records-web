export class Contact {

    private name?: string;
    private url?: string;
    private email?: string;

    public withName(name: string): Contact {
        this.name = name;
        return this;
    }

    public withUrl(url: string): Contact {
        this.url = url;
        return this;
    }

    public withEmail(email: string): Contact {
        this.email = email;
        return this;
    }

}
