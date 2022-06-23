import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpService ){}

    async login(username:string, password:string){
      const {data} = await firstValueFrom(
        //this.http.post('http://localhost:8080/auth/realms/fullcycle/protocol/openid-connect/token', 
        this.http.post('http://host.docker.internal:8080/auth/realms/fullcycle/protocol/openid-connect/token', 
        new URLSearchParams({
          client_id: 'nest',
          client_secret: 'ff73aba4-a676-490b-ab6f-a49b6feea171',
          grant_type: 'password',
          username,
          password
          }),
        ),
      );
      return data;
    }
}


// client_id=nest
// &client_secret=ff73aba4-a676-490b-ab6f-a49b6feea171
// &grant_type=password
// &username=user1@user.com
// &password=123456