import {Inject} from "typescript-ioc";
import {Dao} from "./dao";

export class Repository {

    constructor(@Inject private dao: Dao) {
    }

    public async doSomething(id: number) {
        return await this.dao.doSomethingElse(id);
    }
}
