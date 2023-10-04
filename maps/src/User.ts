import { faker } from '@faker-js/faker';

export const red = 'red';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    console.log(this.name);
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    };
  }
}
