import faker from "faker";

export class User {
  public name: string;
  public location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    };
  }
}
