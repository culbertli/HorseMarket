/**
 * Created by Culbertli on 2020/5/6.
 */
import { request } from 'network/request'
export function getIndex(){
  return request({
    url:'index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=culbert.mall.getIndexInfo',
    method:'get',
    params:{
      se:'index',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },

  })
}


