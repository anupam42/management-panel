export class Product {
  id: string;
  name: string;

  constructor(id, name) {
    this.id = id || null;
    this.name = name || null;
  }
}
