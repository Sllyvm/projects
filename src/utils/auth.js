const aliasToken='token'
const aliasUserInfo='userInfo'
// 把token存道本地储存
export const setToken=(token)=>{
    localStorage.setItem(aliasToken,token)
}
// 获取本地token
export const getToken=()=>{
    localStorage.getItem(aliasToken)
}
// 删除本地token和用户信息
export const removeTokenAndUserInfo=()=>{
    localStorage.removeItem(aliasToken)
    localStorage.removeItem(aliasUserInfo)
}
// 往本地存储里面存用户信息
export const setUserInfo=(userInfo)=>{
    localStorage.setItem(aliasUserInfo,userInfo)
}
// 获取用户信息
export const getUserInfo=()=>{
    localStorage.getItem(aliasUserInfo)
}