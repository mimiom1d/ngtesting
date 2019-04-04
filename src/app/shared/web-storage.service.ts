import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XyzWebStorageService {

  constructor() { }
  
  get(key: string){
    return window.localStorage.getItem(key);
  }
  set(key: string, value: string){
    window.localStorage.setItem(key, value);
  }

}
