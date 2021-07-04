import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  produto = {
    title: "",
    price: 0.0,
    description: ""
  }

  constructor(private web: WebService) { }

  cadastrar(){
    this.web.cadastrarProduto(this.produto).subscribe(res => {
      if (res.ok == true){
        alert('O cadastro foi realizado com sucesso');
        history.back()

      }else{
          alert("Cadastro não realizado!");
      }
    });
  }

  ngOnInit(): void {
  }


}
