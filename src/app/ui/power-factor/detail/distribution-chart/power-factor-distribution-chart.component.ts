import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/app/app-store.state';
import {
    getRangeDistribution,
    popDistributionStack,
    resetDistributionRange
} from 'src/app/app/power-factor-detail/power-factor-detail.actions';
import {
    PowerFactorDistributionChart,
    selectDistributionChart
} from 'src/app/app/power-factor-detail/power-factor-distribution.selectors';

@Component({
    selector: 'app-power-factor-distribution-chart',
    templateUrl: './power-factor-distribution-chart.component.html',
    styleUrls: ['./power-factor-distribution-chart.component.scss']
})
export class PowerFactorDistributionChartComponent {
    colors = ['#6babac', '#e55253'];

    level = 0;

    get isFirstLevel(): boolean {
        return this.level === 0;
    }

    chart$: Observable<PowerFactorDistributionChart | null>;

    constructor(private store: Store<AppState>) {
        this.chart$ = store.pipe(
            select(selectDistributionChart),
            tap((chart) => {
                this.level = chart?.level ?? NaN;
            })
        );
    }

    customizePoint = (): unknown => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pointSettings: any = {
            color: this.colors[Number(this.isFirstLevel)]
        };

        if (!this.isFirstLevel) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            pointSettings.hoverStyle = {
                hatching: 'none'
            };
        }

        return pointSettings;
    };

    customizeTooltip = (args: { valueText: string }): { text: string } => {
        return {
            text: args.valueText
        };
    };

    customizeLabel = (args: { valueText: string }): string => {
        return args.valueText + '%';
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handlePointClick(e: any): void {
        console.log('point', e);

        this.store.dispatch(
            getRangeDistribution({
                start: 0,
                end: 1
            })
        );
        // this.dataSource = this.service.filterData(e.target.originalArgument);
    }

    handleBackClick(): void {
        this.store.dispatch(popDistributionStack());
    }

    handleResetClick(): void {
        this.store.dispatch(resetDistributionRange());
    }
}
