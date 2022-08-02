import { createReducer, on } from '@ngrx/store';
import { update } from './paginator.actions';

export const initialState = {
  previousPageIndex: 0,
  pageIndex: 0,
  pageSize: 10,
  length: 0,
};

export const paginatorReducer = createReducer(
  initialState,
  on(update, (state, { paginator }) => {
    console.log(state);
    console.log(paginator);
    return paginator;
  })
);
