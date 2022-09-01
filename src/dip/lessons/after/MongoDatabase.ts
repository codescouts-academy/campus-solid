export class MongoDatabase implements IPersistence {
  public save(item: string): string {
    return `${item} saved on Mongo\n`;
  }
}
