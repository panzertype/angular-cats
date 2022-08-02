import { CatsService } from './../../services/cats.service';
import { Component, OnInit } from '@angular/core';
import { ICat } from 'src/app/models/interfaces/ICat';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  cats: ICat[] = [];
  isLoading: boolean = true;
  paginatorLength: number = 0;
  defaultPaginatorSize: number = 10;
  paginatorSize: number = this.defaultPaginatorSize;
  noPagination: boolean = false;

  constructor(private catsService: CatsService) {}

  filtersForm = new FormGroup({
    breed: new FormControl(''),
    pageSize: new FormControl(this.paginatorSize),
  });

  filterCats() {
    if (this.filtersForm.value.breed) {
      this.cats = [];
      this.isLoading = true;
      this.catsService
        .getFilteredCats(this.filtersForm.value.breed)
        .subscribe((res) => {
          this.isLoading = false;
          this.noPagination = true;
          this.cats = res;
        });
    } else if (this.filtersForm.value.pageSize !== this.defaultPaginatorSize) {
      this.paginatorSize = this.filtersForm.value.pageSize as number;
      this.catsService.getCats(this.paginatorSize).subscribe((res) => {
        this.isLoading = false;
        this.noPagination = false;
        this.cats = res.body;
        this.paginatorLength = res.headers.get('pagination-count');
      });
    } else {
      this.catsService.getCats().subscribe((res) => {
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
