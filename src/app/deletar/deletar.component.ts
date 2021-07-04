import { Input, Component, OnInit } from '@angular/core';
import { EditarComponent } from '../editar/editar.component';
import { Produto } from '../Produto';
import { WebService } from '../web.service';


@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  
  @Input() produto: Produto ={
    _id : '' ,
    titulo : '',
    descricao: '',
    preco: 0,
    createdAt: '',
    updatedAt: '',
    __v: 0
  };

  constructor(private web : WebService
    
    ) {


      }

     

  

  deletaProduto(produto: Produto){
 
    this.web.deletaProdutos(produto).subscribe(res => { 
      alert(res.msg);
      document.location.reload(true);
    });



  }

  ngOnInit(): void {
  }

}
