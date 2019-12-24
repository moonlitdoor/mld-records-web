import {Dictionary} from "../dictionary";
import {Header, Link, MediaType, Reference} from "./index";

export class Response {

    private description: string;
    private headers?: Dictionary<Header | Reference>;
    private content?: Dictionary<MediaType>;
    private links?: Dictionary<Link | Reference>;

    constructor(description: string) {
        this.description = description;
    }

    public setHeader(key: string, header: Header | Reference): Response {
        if (this.headers === undefined) {
            this.headers = new Dictionary<Header | Reference>();
        }
        this.headers.set(key, header);
        return this;
    }

    public setContent(key: string, mediaType: MediaType): Response {
        if (this.content === undefined) {
            this.content = new Dictionary<MediaType>();
        }
        this.content.set(key, mediaType);
        return this;
    }

    public setLink(key: string, link: Link | Reference): Response {
        if (this.links === undefined) {
            this.links = new Dictionary<Link | Reference>();
        }
        this.links.set(key, link);
        return this;
    }

}
