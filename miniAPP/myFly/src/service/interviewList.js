import request from "../utils/request";

//获取面试列表
export function interview(){
    return request.get("/sign")
}

//获取面试详情
export function interviewDetail(id){
    return request.get(`/sign/${id}`)
}