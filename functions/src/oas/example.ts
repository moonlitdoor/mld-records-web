export class Example {

    private summary?: string;
    private description?: string;
    private value?: any;
    private externalValue?: string;

    public withSummary(summary: string): Example {
        this.summary = summary;
        return this;
    }

    public withDescription(description: string): Example {
        this.description = description;
        return this;
    }

    public withValue(value: any): Example {
        this.value = value;
        return this;
    }

    public withExternalValue(externalValue: string): Example {
        this.externalValue = externalValue;
        return this;
    }

}
