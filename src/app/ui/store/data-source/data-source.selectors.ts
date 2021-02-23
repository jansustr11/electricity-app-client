import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app-store.state';
import { DataSourceState } from './data-source.reducer';

const selectDataSource = createFeatureSelector<AppState, DataSourceState>(
    'dataSource'
);

export const selectDataSourceIntervals = createSelector(
    selectDataSource,
    (state: DataSourceState) => ({
        interval1: state.interval1,
        interval2: state.interval2
    })
);

export const selectDataSourceInfo = createSelector(
    selectDataSource,
    (state: DataSourceState) => state.info
);
