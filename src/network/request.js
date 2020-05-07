/**
 * Created by Culbertli on 2020/5/4.
 */


import axios from 'axios';

export function request(option){
  const axios_instance = axios.create({
    baseURL:'http://wq.com/app/',
    timeout:10000
  })
  /*拦截器 interceptor*/
  //请求拦截
  //axios_instance.interceptors.request.use(req=>{//成功拦截
  //  return req;//最后需要返回
  //},err=>{//失败
  //})
  //响应拦截
  //axios_instance.interceptors.response.use(res=>{//成功拦截
  //  return res;//最后需要返回
  //},err=>{//失败
  //
  //})
  return axios_instance(option);
}
