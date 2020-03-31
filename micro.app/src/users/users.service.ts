import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly http: HttpService) {}

  async findAll() {
    const response = await this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .toPromise();

    return response.data;
  }
}