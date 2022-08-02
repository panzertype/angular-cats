import { createSelector } from '@ngrx/store';

// TODO: type
export const selectFeature = (state: any) => state.paginator;

export const paginatorSelector = createSelector(
  selectFeature,
  (state) => state
);
