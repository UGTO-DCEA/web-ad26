import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IPersonajes, Result } from '../../models/IPersonajes';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'app-simpsons',
  styleUrl: './simpsons.scss',
  templateUrl: './simpsons.html',
})
export class Simpsons implements OnInit {
  private readonly http = inject(HttpClient);

  readonly personajes = signal<Result[]>([]);

  ngOnInit(): void {
    this.http.get<IPersonajes>('https://thesimpsonsapi.com/api/characters').subscribe((data) => {
      this.personajes.set(data.results);
    });
  }
}
