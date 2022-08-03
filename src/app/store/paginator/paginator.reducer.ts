import { createReducer, on, State } from '@ngrx/store';
import { IPaginator } from '../../models/interfaces/IPaginator';
import { update } from './paginator.actions';

export const initialState: IPaginator = {
  previousPageIndex: 0,
  pageIndex: 0,
  pageSize: 10,
  length: 0,
};

export const paginatorReducer = createReducer(
  initialState,
  on(update, (state, { paginator }) => ({ ...state, ...paginator }))
);
