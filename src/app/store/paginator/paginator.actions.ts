import { createAction, props } from '@ngrx/store';
import { IPaginator } from 'src/app/models/interfaces/IPaginator';

export const update = createAction(
  '[Paginator] Update',
  props<{
    paginator: IPaginator;
  }>()
);
