import {Operation, Parameter, Reference, Server} from "./index";

export class PathItem {

    private $ref?: string;
    private summary?: string;
    private description?: string;
    private get?: Operation;
    private put?: Operation;
    private post?: Operation;
    private delete?: Operation;
    private options?: Operation;
    private head?: Operation;
    private patch?: Operation;
    private trace?: Operation;
    private servers?: Server[];
    private parameters?: Array<Parameter | Reference>;

    public withRef(ref: string): PathItem {
        this.$ref = ref;
        return this;
    }

    public withSummary(summary: string): PathItem {
        this.summary = summary;
        return this;
    }

    public withDescription(description: string): PathItem {
        this.description = description;
        return this;
    }

    public withGet(get: Operation): PathItem {
        this.get = get;
        return this;
    }

    public withPut(put: Operation): PathItem {
        this.put = put;
        return this;
    }

    public withPost(post: Operation): PathItem {
        this.post = post;
        return this;
    }

    public withDelete(_delete: Operation): PathItem {
        this.delete = _delete;
        return this;
    }

    public withOptions(options: Operation): PathItem {
        this.options = options;
        return this;
    }

    public withHead(head: Operation): PathItem {
        this.head = head;
        return this;
    }

    public withPatch(patch: Operation): PathItem {
        this.patch = patch;
        return this;
    }

    public withTrace(trace: Operation): PathItem {
        this.trace = trace;
        return this;
    }

    public addServer(server: Server): PathItem {
        if (this.servers === undefined) {
            this.servers = [];
        }
        this.servers.push(server);
        return this;
    }

    public addParameter(parameter: Parameter | Reference): PathItem {
        if (this.parameters === undefined) {
            this.parameters = [];
        }
        this.parameters.push(parameter);
        return this;
    }

}
