import {Contact, License} from "./index";

export class Info {

    private title: string;
    private description?: string;
    private termsOfService?: string;
    private contact?: Contact;
    private license?: License;
    private version: string;

    constructor(title: string, version: string) {
        this.title = title;
        this.version = version;
    }

    public withDescription(description: string): Info {
        this.description = description;
        return this;
    }

    public withTermsOfService(termsOfService: string): Info {
        this.termsOfService = termsOfService;
        return this;
    }

    public withContact(contact: Contact): Info {
        this.contact = contact;
        return this;
    }

    public withLicense(license: License): Info {
        this.license = license;
        return this;
    }

}
