/**
 * Created by qiantao on 2016/10/19.
 */
// 生成action creator
function makeActionCreator(type, ...argNames) {
    return function (...args) {
        let action = {type};
        argNames.forEach((arg, index)=> {
            action[argNames[index]] = args[index]
        });
        return action
    }
}

/**
 * action 类型
 * @type {string}   类型
 */
export const SELECT_TAB = 'SELECT_TAB';

export const PageFilters = {
    PAGE_MENU:'分类',
    PAGE_DISCOVERY:'发现',
    PAGE_SEARCH:'搜索'
};

//action 创建函数

/**
 * 选择底部tab
 * @param tilte
 * @returns {{type: string, title: (string|string)}}
 */
export function selectTabAction(tilte) {
    return {
        type: SELECT_TAB,
        title:tilte
    }
}
