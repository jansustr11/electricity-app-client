import { createAction, props } from '@ngrx/store';
import { CustomerParams } from 'src/app/core/costs/costs';

export const setCustomerParams = createAction(
    '[Costs] Set Customer Params',
    props<{ params: CustomerParams | null }>()
);
