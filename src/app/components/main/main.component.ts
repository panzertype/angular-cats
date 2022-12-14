import { CatsService } from './../../services/cats.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ICat } from 'src/app/models/interfaces/ICat';
import { FormGroup, FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as PaginatorActions from '../../store/paginator/paginator.actions';
import { Observable } from 'rxjs';
import { paginatorSelector } from '../../store/paginator/paginator.selectors';
import { IPaginator } from 'src/app/models/interfaces/IPaginator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  cats: ICat[] = [];
  isLoading: boolean = true;
  paginatorLength: number = 0;
  paginatorSize: number = 10;
  paginatorIndex: number = 0;
  noPagination: boolean = false;
  paginator$: Observable<any>;

  constructor(private catsService: CatsService, private store: Store) {
    this.paginator$ = this.store.pipe(select(paginatorSelector));
  }

  filtersForm = new FormGroup({
    breed: new FormControl(''),
    pageSize: new FormControl(this.paginatorSize),
  });

  setPaginatorState(paginator: IPaginator) {
    this.store.dispatch(
      PaginatorActions.update({
        paginator,
      })
    );
  }

  filterCats() {
    if (this.filtersForm.value.breed) {
      this.paginatorIndex = 0;
      this.setPaginatorState({
        pageIndex: this.paginatorIndex,
      });
      this.cats = [];
      this.isLoading = true;
      this.catsService
        .getFilteredCats(this.filtersForm.value.breed)
        .subscribe((res) => {
          this.isLoading = false;
          this.noPagination = true;
          this.cats = res;
        });
    } else {
      this.paginatorIndex = 0;
      this.paginatorSize = this.filtersForm.value.pageSize as number;

      this.setPaginatorState({
        pageSize: this.paginatorSize,
        pageIndex: this.paginatorIndex,
      });
      this.catsService.getCats(this.paginatorSize).subscribe((res) => {
        this.isLoading = false;
        this.noPagination = false;
        this.cats = res.body;
        this.paginatorLength = res.headers.get('pagination-count');
      });
    }
  }

  OnPageChange(event: any) {
    this.catsService
      .getCats(event.pageSize, event.pageIndex)
      .subscribe((res) => {
        this.isLoading = false;
        this.noPagination = false;
        this.cats = res.body;
        this.paginatorLength = res.headers.get('pagination-count');
        this.setPaginatorState({
          previousPageIndex: event.previousPageIndex,
          pageSize: event.pageSize,
          pageIndex: event.pageIndex,
          length: this.paginatorLength,
        });

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      });
  }

  ngOnInit(): void {
    this.catsService.getCats().subscribe((res) => {
      this.isLoading = false;
      this.noPagination = false;
      this.cats = res.body;
      this.paginatorLength = res.headers.get('pagination-count');
    });
  }
}
