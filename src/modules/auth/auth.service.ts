import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private jwtservice: JwtService){}
    login(credenciales: LoginAuthDto){
        
        let payload={email:"admin@gmail.com", id:1} //ojo en las comillas
        const token= this.jwtservice.sign(payload)
        return {token:token};
        
    }
}
