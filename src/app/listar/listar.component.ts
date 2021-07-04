import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaProdutos: Produto[] = [];
  
  produtoEditar : Produto = {
    _id : '' ,
    titulo : '',
    descricao: '',
    preco: 0,
    createdAt: '',
    updatedAt: '',
    __v: 0
  }

  constructor(
    private web : WebService
  ) { }


  carregarProdutos() : void {
    this.web.getProdutos().subscribe(res => {
      
      this.listaProdutos = res;
      console.log(this.listaProdutos);
    });
  }

  ngOnInit(): void {
    
    this.carregarProdutos();
  }

}
