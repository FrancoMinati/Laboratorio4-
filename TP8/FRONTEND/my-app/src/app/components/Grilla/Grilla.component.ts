import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GrillaInstrumentosService } from 'src/app/service/GrillaInstrumentos.service';
import Instrumento from 'src/app/types/Instrumento.model';

@Component({
  selector: 'app-grilla',
  templateUrl: './Grilla.component.html',
})
export class Grilla implements OnInit {
  instrumentos: Instrumento[] | undefined;
  filter: { minPrice: number; maxPrice: number } = { minPrice: 0, maxPrice: 0 };

  constructor(private grillaInstrumentosService: GrillaInstrumentosService) {}

  async handleDelete(id: number | undefined): Promise<void> {
    this.grillaInstrumentosService.deleteInstrumento(id).subscribe();
    window.location.reload();
  }

  async cargarInstrumentos() {
    this.grillaInstrumentosService.getInstrumentos().subscribe(
      (instrumentos: Instrumento[]) => {
        this.instrumentos = instrumentos;
        console.log(this.instrumentos);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  handleChange(event: Event): void {
    const target = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    const { name, value } = target;
    this.filter = {
      ...this.filter,
      [name]: value,
    };
  }

  filterInstruments() {
    this.instrumentos = this.instrumentos?.filter(
      (instrumento) =>
        Number(instrumento.precio) >= this.filter.minPrice &&
        Number(instrumento.precio) <= this.filter.maxPrice
    );
  }
  removeFilter() {
    window.location.reload();
  }
  async postListOfInstrumentos() {
    this.grillaInstrumentosService.postListOfInstrumentos().subscribe();
    window.location.reload();
  }

  async ngOnInit(): Promise<void> {
    await this.cargarInstrumentos();
  }
}
@NgModule({
  imports: [CommonModule],
})
export class AppModule {}
