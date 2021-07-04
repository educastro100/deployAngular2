import { Input, Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() produto : Produto = {
    _id : '' ,
    titulo : '',
    descricao: '',
    preco: 0,
    createdAt: '',
    updatedAt: '',
    __v: 0
  }


  constructor(private web : WebService) { }


  editarProduto(){
    this.web.editarProduto(this.produto).subscribe(res => { 
      if (res.ok == true){
        alert('A Edição foi realizada com sucesso');
        document.location.reload(true);
      }else{
          alert("Edição não realizada!");
      }
    });
  }

  ngOnInit(): void {
  }
}
