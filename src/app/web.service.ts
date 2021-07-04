import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Alterar a url e as chamadas depois que fizer o backend.
export class WebService {

  baseURL = "https://sc3002411edu.glitch.me/api";
  // baseURL = "http://localhost:8040/api/produtos";


  getProdutos() : Observable<Produto[]> {

    return this.http.get<Produto[]>(this.baseURL + "/produtos");

  }

  deletaProdutos(produto: any): Observable<any>{

    return this.http.delete(this.baseURL + /produtos/ + produto._id);
  } 

  cadastrarProduto(produto : any): Observable<any>{
    let body = new HttpParams();
    body = body.set("titulo", produto.titulo);
    body = body.set("preco", String(produto.preco));
    body = body.set("descricao", produto.descricao);
    return this.http.post(this.baseURL + '/produtos', body, {observe: "response"});
  }

  editarProduto(produto: any) : Observable<any>{

    let body = new HttpParams()    ;
    body = body.set("titulo", produto.titulo);
    body = body.set("preco", String(produto.preco));
    body = body.set("descricao", produto.descricao);
    return this.http.put(this.baseURL + "/produtos/" + produto._id, body, {observe: "response"});

  }

  constructor(
    private http : HttpClient
  ) { }
}
