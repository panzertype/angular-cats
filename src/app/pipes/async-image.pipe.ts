import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { CatsService } from '../services/cats.service';

@Pipe({
  name: 'asyncImage',
})
export class AsyncImagePipe implements PipeTransform {
  constructor(private catsService: CatsService) {}

  transform(url: string | undefined): Observable<any> {
    return this.catsService.getCatImage(url);
  }
}
