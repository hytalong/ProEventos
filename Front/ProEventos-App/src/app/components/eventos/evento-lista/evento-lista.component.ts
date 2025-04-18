import { Component, OnInit, TemplateRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {

  modalRef?: BsModalRef;
public eventos: Evento[] = [];
public eventosFiltrados: Evento[] = [];
public eventoId = 0;


public larguraImagem = 150;
public margemImagem = 2;
public exibirImagem = true;
private filtroListado = '';

public get filtroLista(): string{
  return this.filtroListado;
}

public set filtroLista(value: string){
  this.filtroListado = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
}


public filtrarEventos(filtrarPor: string): Evento[] {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
    evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
    evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  );
}

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

 public ngOnInit(): void {
    this.spinner.show();
    this.carregarEventos();

  }

public alterarImagem(): void{
this.exibirImagem = !this.exibirImagem;
    }

    mostraImagem(imagemURL: string): string{
      return (imagemURL !== '')
        ? `${environment.apiURL}resources/images/${imagemURL}`
        : 'assets/img/semImagem.png';
    }

  public carregarEventos(): void {
    this.eventoService.getEventos().subscribe({
        next: (eventosResponse: Evento[]) => {
          this.eventos = eventosResponse;
          this.eventosFiltrados = this.eventos;
        },
        error: (error: any) => {
          this.spinner.hide();
          this.toastr.error('Erro ao Carregador os Eventos', 'Erro!');
        },
        complete: () => this.spinner.hide()
      });
  }

  openModal(event: any, template: TemplateRef<void>, eventoId: number): void {
    event.stopPropagation();
    this.eventoId = eventoId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef?.hide();
    this.spinner.show();

    this.eventoService.deleteEvento(this.eventoId).subscribe(
      (result: any) => {
          if (result.message === 'Deletado') {
          this.toastr.success('O Evento foi deletado com Sucesso', 'Deletado!');
          this.carregarEventos();
          }
      },
      (error: any) => {
        console.error(error);
        this.toastr.error(`Erro ao tentar deletar o evento ${this.eventoId}`, 'Erro');
      },
    ).add(() => this.spinner.hide());


  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheEvento(id: number): void{
    this.router.navigate([`eventos/detalhe/${id}`]);
  }
}
