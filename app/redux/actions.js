/**
 * Created by qiantao on 2016/10/19.
 */
// 生成action creator
function makeActionCreator(type, ...argNames) {
    return function (...args) {
        let action = {
            type
        };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
}

//action类型
export const types = {
    SELECT_TAB: 'SELECT_TAB'
};

export const PageFilters = {
    PAGE_MENU: '分类',
    PAGE_DISCOVERY: '发现',
    PAGE_SEARCH: '搜索'
};

//action 创建函数

/**
 * 选择底部tab
 * @param title 选择的标题
 * @returns {{type: string, title: (string|string)}}
 */
export function selectTabAction(title) {
    return {
        type: types.SELECT_TAB,
        title: title
    }
}