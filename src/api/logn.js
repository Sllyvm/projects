import request from '../utils/request'
export const  getLogin=(data)=>{
    return request({
        url:"/user/login",
        method:'POST',
        data
    })
}
export const getUserInfo=()=>{
    return request({
        url:"/sysUser/getPermissionList",
        method:"GET"
    })
}
