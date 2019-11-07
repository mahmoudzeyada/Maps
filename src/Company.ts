import faker from "faker";

export class Company {
  public companyName: string;
  public companyPhrase: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  public markerContent(): string {
    return `
    <div>
    <h1>companyName: ${this.companyName}</h1>
    <h3>companyPhrase: ${this.companyPhrase}</h3>
    </div>`;
  }
}
