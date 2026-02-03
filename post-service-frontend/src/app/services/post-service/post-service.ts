import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../../models/posts';

@Injectable({
  providedIn: 'root',
})

export class PostService {
  private apiUrl : string;

  constructor(private http : HttpClient){
    this.apiUrl = 'http://localhost:6565/post';
  }

  private getHeaders() : HttpHeaders {
    return new HttpHeaders({
      'Content-Type' : 'application/json'
    });
  }

  getAllPosts() : Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrl}/`, {headers : this.getHeaders()});
  }

  getPost(id : number) : Observable<Posts>{
    return this.http.get<Posts>(`${this.apiUrl}/${id}`, {headers : this.getHeaders()});
  } 

  addPost(post : Posts) : Observable<Posts>{
    return this.http.post<Posts>(`${this.apiUrl}/`, post, {headers : this.getHeaders()});
  }

  updatePost(id : number, post : Posts) : Observable<Posts>{
    return this.http.put<Posts>(`${this.apiUrl}/${id}`, post, {headers : this.getHeaders()});
  } 

  deletePost(id : number) : Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/${id}`, {headers : this.getHeaders()});
  }

}
