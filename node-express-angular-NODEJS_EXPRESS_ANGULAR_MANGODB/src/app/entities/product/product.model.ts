export interface IProduct {
  _id?: string;
  email:string;
  name: string;
  brand: string;
}

export class Product implements IProduct {
  constructor(
    public email: string,
    public name: string,
    public brand: string,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.email = email;
    this.name = name;
    this.brand = brand;
  }
}