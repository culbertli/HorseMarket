/**
 * Created by Culbertli on 2020/5/6.
 */
import { request } from 'network/request'
export function getBanner(){
  return request({
    url:'index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=culbert.mall.getIndexInfo',
    method:'get',
    params:{se:'banner'}
  })
}

