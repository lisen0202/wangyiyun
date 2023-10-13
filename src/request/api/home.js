import service from "../index";
// 获取首页轮播图的数据
export function getBanner(data) {
    return service({
        method: "GET",
        url: '/banner',
        params: data
    })
}