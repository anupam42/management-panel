export class Action {
  id: string;
  name: string;

  constructor(id, name) {
    this.id = id || null;
    this.name = name || null;
  }
}
