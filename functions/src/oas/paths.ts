import {Dictionary} from "../dictionary";
import {PathItem} from "./index";

export class Paths extends Dictionary<PathItem> {

    public setPathItem(key: string, pathItem: PathItem): Paths {
        this.set(key, pathItem);
        return this;
    }
}
