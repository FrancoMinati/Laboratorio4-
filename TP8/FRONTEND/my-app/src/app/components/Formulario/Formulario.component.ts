import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GrillaInstrumentosService } from 'src/app/service/GrillaInstrumentos.service';
import Instrumento from 'src/app/types/Instrumento.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './Formulario.component.html',
})
export class Formulario implements OnInit {
  instrumentoData: Instrumento = {
    id: undefined,
    instrumento: '',
    marca: '',
    modelo: '',
    imagen: '',
    precio: '',
    costoEnvio: '',
    cantidadVendida: '',
    descripcion: '',
  };
  id: number | undefined;
  constructor(
    private grillaInstrumentosService: GrillaInstrumentosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async cargarInstrumento() {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      if (this.id !== 0) {
        this.grillaInstrumentosService
          .getInstrumento(this.id)
          .subscribe((instrumento) => {
            this.instrumentoData = instrumento;
          });
      }
    });
  }
  async handleSubmit(): Promise<void> {
    this.grillaInstrumentosService
      .saveOrUpdateInstrumento(this.instrumentoData)
      .subscribe();
      this.router.navigate(['/InstrumentosABM']); // Redirigir a la vista deseada
  }

  handleChange(event: Event): void {
    const target = event.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    const { name, value } = target;
    this.instrumentoData = {
      ...this.instrumentoData,
      [name]: value,
    };
    
  }
  async ngOnInit(): Promise<void> {
    await this.cargarInstrumento();
  }
}
@NgModule({
  imports: [CommonModule],
})
export class AppModule {}
