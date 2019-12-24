import {Dictionary} from "../dictionary";
import {Header} from "./header";
import {Reference} from "./index";

export class Encoding {

    private contentType?: string;
    private headers?: Dictionary<Header | Reference>;
    private style?: string;
    private explode: boolean = false;
    private allowReserved: boolean = false;

    public withContentType(contentType: string): Encoding {
        this.contentType = contentType;
        return this;
    }

    public withStyle(style: string): Encoding {
        this.style = style;
        return this;
    }

    public isExplode(explode: boolean): Encoding {
        this.explode = explode;
        return this;
    }

    public isAllowReserved(allowReserved: boolean): Encoding {
        this.allowReserved = allowReserved;
        return this;
    }

    public setHeader(key: string, header: Header | Reference): Encoding {
        if (this.headers === undefined) {
            this.headers = new Dictionary();
        }
        this.headers.set(key, header);
        return this;
    }

}
