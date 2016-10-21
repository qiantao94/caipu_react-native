/**
 * Created by  on 2016/10/19.
 */
import {
    combineReducers
} from 'redux';
import {
    types,
    PageFilters
} from './actions'

const state_tabbar = {
    curTab: PageFilters.PAGE_MENU
};

function pageFilter(state = state_tabbar, action) {
    switch (action.type) {
        case types.SELECT_TAB:
            return {
                ...state,
                curTab: action.title
            };
    }
}

const reducers = combineReducers({
    pageFilter
});
export default reducers;