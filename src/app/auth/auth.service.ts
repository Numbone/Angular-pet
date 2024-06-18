import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl='https://icherniakov.ru/yt-course/auth/'
  hhtp=inject(HttpClient);


  login(payload:{username:string,password:string}){
    const fd =new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this.hhtp.post(`${this.baseApiUrl}token`,fd)
  }
}
