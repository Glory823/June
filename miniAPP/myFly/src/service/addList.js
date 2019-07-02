import request from "../utils/request";

//添加面试
export function addView(data){
    return request.post("/sign",data)
}
