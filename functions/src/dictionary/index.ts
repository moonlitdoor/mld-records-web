export class Dictionary<V> {

    public set(key: string, value: V) {
        // @ts-ignore
        this[key] = value;
    }

}
