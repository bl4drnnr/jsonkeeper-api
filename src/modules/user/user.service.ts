import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async login({ email, password }: { email: string; password: string }) {
    //
  }

  async register({
    firstName,
    lastName,
    email,
    password
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    //
  }

  async logout() {
    //
  }
}
