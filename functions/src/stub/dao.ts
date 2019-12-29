export class Dao {

    public async doSomethingElse(id: number): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello from the DAO... waiting " + id + " hundred milliseconds.");
            }, id * 100);
        });
    }
}
