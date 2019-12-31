import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DALService {

  constructor(private http:HttpClient) {}

  getAllMovies(){
    return this.http.get('http://localhost:3000')
  }
  getByV(key){
    return this.http.get(`http://localhost:3000/${key}`)
  }

  addNewMovie(id, key, title){
    this.http.post('http://localhost:3000', {id:id, title:title, key:key } ).subscribe()
  }

}
