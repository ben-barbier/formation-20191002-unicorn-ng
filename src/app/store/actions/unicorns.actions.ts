import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const addToList = createAction(
    '[Unicorns] addToList',
    props<{ unicorn: Unicorn }>()
);

export const removeFromList = createAction(
    '[Unicorns] removeFromList',
    props<{ unicorn: Unicorn }>()
);
