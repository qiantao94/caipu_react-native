/**
 * Created by  on 2016/10/19.
 */
import {combineReducers} from 'redux';
import {SELECT_TAB, PageFilters} from'./actions'
const {PAGE_MENU} = PageFilters;

function pageFilter(state = PAGE_MENU, action) {
    switch (action.type) {
        case SELECT_TAB:
            return action.title;
        default:
            return state
    }
}

const rootReducers = combineReducers({
    pageFilter
});
export default rootReducers;