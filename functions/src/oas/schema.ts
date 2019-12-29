import {Discriminator, ExternalDocumentation, Format, Reference, Xml} from "./index";

export class Schema {

    private title?: string;
    private description?: string;
    private multipleOf?: number; // >0
    private maximum?: number;
    private exclusiveMaximum?: boolean;
    private minimum?: number;
    private exclusiveMinimum?: boolean;
    private maxLength?: number;
    private minLength?: number;
    private pattern?: string;
    private maxItems?: number;
    private minItems?: number;
    private uniqueItems?: boolean;
    private maxProperties?: number;
    private minProperties?: number;
    private required?: string[];
    private enum?: any[];
    private type?: string;
    private allOf?: Schema | Reference;
    private oneOf?: Schema | Reference;
    private anyOf?: Schema | Reference;
    private not?: Schema | Reference;
    private items?: Schema | Reference;
    private properties?: Schema | Reference;
    private additionalProperties: boolean | Schema | Reference = true;
    private format?: Format;
    private default?: any;
    private nullable: boolean = false;
    private discriminator?: Discriminator;
    private readOnly: boolean = false;
    private writeOnly: boolean = false;
    private xml?: Xml;
    private externalDocs?: ExternalDocumentation;
    private example?: any;
    private deprecated: boolean = false;

    public withTitle(title: string): Schema {
        this.title = title;
        return this;
    }

    public withDescription(description: string): Schema {
        this.description = description;
        return this;
    }

    public withPattern(pattern: string): Schema {
        this.pattern = pattern;
        return this;
    }

    public withType(type: string): Schema {
        this.type = type;
        return this;
    }

    public withMultipleOf(multipleOf: number): Schema {
        this.multipleOf = multipleOf;
        return this;
    }

    public withMaximum(maximum: number): Schema {
        this.maximum = maximum;
        return this;
    }

    public withMinimum(minimum: number): Schema {
        this.minimum = minimum;
        return this;
    }

    public withMaxLength(maxLength: number): Schema {
        this.maxLength = maxLength;
        return this;
    }

    public withMinLength(minLength: number): Schema {
        this.minLength = minLength;
        return this;
    }

    public withMaxItems(maxItems: number): Schema {
        this.maxItems = maxItems;
        return this;
    }

    public withMinItems(minItems: number): Schema {
        this.minItems = minItems;
        return this;
    }

    public withMaxProperties(maxProperties: number): Schema {
        this.maxProperties = maxProperties;
        return this;
    }

    public withMinProperties(minProperties: number): Schema {
        this.minProperties = minProperties;
        return this;
    }

    public withAllOf(allOf: Schema | Reference): Schema {
        this.allOf = allOf;
        return this;
    }

    public withOneOf(oneOf: Schema | Reference): Schema {
        this.oneOf = oneOf;
        return this;
    }

    public withAnyOf(anyOf: Schema | Reference): Schema {
        this.anyOf = anyOf;
        return this;
    }

    public withNot(not: Schema | Reference): Schema {
        this.not = not;
        return this;
    }

    public withItems(items: Schema | Reference): Schema {
        this.items = items;
        return this;
    }

    public withProperties(properties: Schema | Reference): Schema {
        this.properties = properties;
        return this;
    }

    public withAdditionalProperties(additionalProperties: boolean | Schema | Reference): Schema {
        this.additionalProperties = additionalProperties;
        return this;
    }

    public withFormat(format: Format): Schema {
        this.format = format;
        return this;
    }

    public withDefault(def: any): Schema {
        this.default = def;
        return this;
    }

    public withDiscriminator(discriminator: Discriminator): Schema {
        this.discriminator = discriminator;
        return this;
    }

    public withXml(xml: Xml): Schema {
        this.xml = xml;
        return this;
    }

    public withExternalDocumentation(externalDocumentation: ExternalDocumentation): Schema {
        this.externalDocs = externalDocumentation;
        return this;
    }

    public withExample(example: any): Schema {
        this.example = example;
        return this;
    }

    public isExclusiveMaximum(exclusiveMaximum: boolean): Schema {
        this.exclusiveMaximum = exclusiveMaximum;
        return this;
    }

    public isExclusiveMinimum(exclusiveMinimum: boolean): Schema {
        this.exclusiveMinimum = exclusiveMinimum;
        return this;
    }

    public isUniqueItems(uniqueItems: boolean): Schema {
        this.uniqueItems = uniqueItems;
        return this;
    }

    public isNullable(nullable: boolean): Schema {
        this.nullable = nullable;
        return this;
    }

    public isReadOnly(readOnly: boolean): Schema {
        this.readOnly = readOnly;
        return this;
    }

    public isWriteOnly(writeOnly: boolean): Schema {
        this.writeOnly = writeOnly;
        return this;
    }

    public isDeprecated(deprecated: boolean): Schema {
        this.deprecated = deprecated;
        return this;
    }

    public addRequired(required: string): Schema {
        if (this.required === undefined) {
            this.required = [];
        }
        this.required.push(required);
        return this;
    }

    public addEnum(e: any): Schema {
        if (this.enum === undefined) {
            this.enum = [];
        }
        this.enum.push(e);
        return this;
    }

}
