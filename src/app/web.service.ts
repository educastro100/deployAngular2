import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Alterar a url e as chamadas depois que fizer o backend.
export class WebService {

  baseURL = "https://banco-dados-teste.glitch.me/api";


  getProdutos() : Observable<Produto[]> {

    return this.http.get<Produto[]>(this.baseURL + "/produtos");

  }

  deletaProdutos(produto: any): Observable<any>{

    return this.http.delete(this.baseURL + /produtos/ + produto._id);
  } 

  cadastrarProduto(produto : any): Observable<any>{
    let body = new HttpParams();
    body = body.set("title", produto.title);
    body = body.set("price", String(produto.price));
    body = body.set("description", produto.description);
    return this.http.post(this.baseURL + '/produtos', body, {observe: "response"});
  }

  editarProduto(produto: any) : Observable<any>{

    let body = new HttpParams()    ;
    body = body.set("title", produto.title);
    body = body.set("price", String(produto.price));
    body = body.set("description", produto.description);
    return this.http.put(this.baseURL + "/produtos/" + produto._id, body, {observe: "response"});

  }

  constructor(
    private http : HttpClient
  ) { }
}
