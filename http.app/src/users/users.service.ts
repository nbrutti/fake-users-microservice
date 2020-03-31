import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    private client: ClientProxy;

    constructor() {
      this.client = ClientProxyFactory.create({
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379'
        }
      });
    }

    public getAll(): Observable<String[]> {
      return this.client.send<any>('list_users', '');
    }
}
