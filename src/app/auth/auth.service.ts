import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl='https://icherniakov.ru/yt-course/auth/'
  public hhtp=inject(HttpClient);

  login(payload:{username:string,password:string}){
    return this.hhtp.post(`${this.baseApiUrl}token`,payload)
  }
}
