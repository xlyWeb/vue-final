// 取
export function getData(key) {
    return localStorage.getItem(key)
}
// 删除
export function clearData(key) {
    localStorage.removeItem(key)
    return;
}
// 存
export default function addData(key,value) {
    localStorage.setItem(key,JSON.stringify(value))
    return;
}