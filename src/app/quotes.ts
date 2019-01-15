export class Quotes {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public date: Date) {
    this.showDescription = false;
  }
}
