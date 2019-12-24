import {Dictionary} from "../dictionary";
import {PathItem} from "./index";

export class Callback extends Dictionary<PathItem> {

    public setPathItem(key: string, pathItem: PathItem): Callback {
        this.set(key, pathItem);
        return this;
    }
}
