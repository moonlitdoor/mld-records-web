import {Dictionary} from "../dictionary";
import {MediaType} from "./index";

export class RequestBody {

    private description?: string;
    private content: Dictionary<MediaType> = new Dictionary<MediaType>();
    private required: boolean = false;

    constructor(type: string, mediaType: MediaType) {
        this.content.set(type, mediaType);
    }

    public withDescription(description: string): RequestBody {
        this.description = description;
        return this;
    }

    public isRequired(required: boolean): RequestBody {
        this.required = required;
        return this;
    }

}
