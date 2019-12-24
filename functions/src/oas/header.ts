import {Parameter} from "./parameter";
import {ParameterLocation} from "./parameter-location";

export class Header extends Parameter {

    constructor() {
        super(undefined, ParameterLocation.HEADER);
    }

}
