import {Address} from './address';

export class User {
  name: string;
  username: string;
  address: Address;

  PrintUser(): string {
    let str = `name: ${this.name}, username: ${this.username}, lat: ${this.address.geo.lat}}`;
    return str;
  }

  constructor(user: User) {
    this.name = user.name;
    this.username = user.username;
    this.address = user.address;
  };

}

