export abstract class DataMapper<T, K> {
    abstract toDomain(object: T): K
    public collectionToDomain(objects: T[]): K[] {
        const mappedObjects = objects.map(obj => this.toDomain(obj));
        return mappedObjects;
    }
}