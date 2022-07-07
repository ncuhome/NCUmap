/**
 * 检测是否含中文
 */
const chineseRegExp = /[\u4e00-\u9fa5]/g
export function hasChinese(str:string){
    return chineseRegExp.test(str) 
}