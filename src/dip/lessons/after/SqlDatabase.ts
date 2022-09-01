export class SqlDatabase implements IPersistence {
  public save(item: string): string {
    return `${item} saved on SQL\n`;
  }
}
