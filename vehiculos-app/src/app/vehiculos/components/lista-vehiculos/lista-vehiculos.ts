import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IVehiculo } from '../../models/IVehiculo';
import { Observable } from 'rxjs';
import { EditarVehiculo } from '../editar-vehiculo/editar-vehiculo';

@Component({
  imports: [EditarVehiculo],
  selector: 'app-lista-vehiculos',
  styleUrl: './lista-vehiculos.scss',
  templateUrl: './lista-vehiculos.html',
})
export class ListaVehiculos implements OnInit {
  ngOnInit(): void {
    this.obtenerVehiculos().subscribe((vehiculos) => {
      this.listaVehiculos.set(vehiculos);
    });
  }

  editarComponent = signal<boolean>(false);
  vehiculoId = signal<number>(0);

  //? Inject HttpClient
  private httpClient = inject(HttpClient);

  //? Variable de datos de vehiculos
  listaVehiculos = signal<IVehiculo[]>([]);

  //?URL
  private url = 'https://localhost:7189/api/vehiculos';

  //? Funcion para obtener la lista de vehiculos
  obtenerVehiculos(): Observable<IVehiculo[]> {
    return this.httpClient.get<IVehiculo[]>(this.url);
  }

  //?Eliminar vehiculo
  eliminarVehiculo(id: number): void {
    this.httpClient.delete(`${this.url}/${id}`).subscribe(() => {
      //? Actualizar la lista de vehiculos despues de eliminar pero con los mismos datos
      this.listaVehiculos.set(this.listaVehiculos().filter((vehiculo) => vehiculo.id !== id));
      //? Actualizar desde la db la lista de vehiculos despues de eliminar
      this.obtenerVehiculos();
    });
  }

  //?Editar vehiculo
  editarVehiculo(id: number): void {
    this.vehiculoId.set(id);
    this.editarComponent.set(true);
  }
}
