export class Xml {

    private name?: string;
    private namespace?: string;
    private prefix?: string;
    private attribute?: boolean;
    private wrapped?: boolean;

    public withName(name: string): Xml {
        this.name = name;
        return this;
    }

    public withNamespace(namespace: string): Xml {
        this.namespace = namespace;
        return this;
    }

    public withPrefix(prefix: string): Xml {
        this.prefix = prefix;
        return this;
    }

    public isAttribute(attribute: boolean): Xml {
        this.attribute = attribute;
        return this;
    }

    public isWrapped(wrapped: boolean): Xml {
        this.wrapped = wrapped;
        return this;
    }

}
