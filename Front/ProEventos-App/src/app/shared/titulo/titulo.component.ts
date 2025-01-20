import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input() titulo!: string; // Mantido, pois o valor é passado como entrada
  @Input() iconClass = 'fa fa-user'; // Removido o tipo, o TypeScript infere que é string
  @Input() subtitulo = 'Desde 2021'; // Removido o tipo, o TypeScript infere que é string
  @Input() botaoListar = false; // Removido o tipo, o TypeScript infere que é boolean

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`]);
  }
}
