import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICat } from '../../models/interfaces/ICat';
import { paginatorSelector } from '../../store/paginator/paginator.selectors';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
})
export class CatCardComponent implements OnInit {
  @Input() cat!: ICat;
  @Input() index!: number;

  temperaments: string[] = [];
  paginator$: Observable<any>;

  constructor(private store: Store) {
    this.paginator$ = this.store.pipe(select(paginatorSelector));
  }

  ngOnInit(): void {
    this.temperaments = this.cat.temperament.split(', ');
  }
}
