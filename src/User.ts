import faker from "faker";

export class User {
  public name: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  public markerContent(): string {
    return `<h1>${this.name}</h1>`;
  }
}
