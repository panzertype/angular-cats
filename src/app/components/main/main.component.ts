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
  noPagination: boolean = false;

  constructor(private catsService: CatsService) {}

  filtersForm = new FormGroup({
    breed: new FormControl(''),
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
    } else {
      this.catsService.getCats(2).subscribe((res) => {
        this.isLoading = false;
        this.noPagination = false;
        this.cats = res.body;
        this.paginatorLength = res.headers.get('pagination-count');
      });
    }
  }

  ngOnInit(): void {
    this.catsService.getCats(2).subscribe((res) => {
      this.isLoading = false;
      this.noPagination = false;
      this.cats = res.body;
      this.paginatorLength = res.headers.get('pagination-count');
    });
  }
}
