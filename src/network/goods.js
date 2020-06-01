/**
 * Created by Culbertli on 2020/5/12.
 */
import { request } from 'network/request'

export function getCategory(){
  return request({
    url:'ewei_shopv2_api.php?i=1&r=shop.get_category',
    method:'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
  })
}

export function getGoods(...args){
  return request({
    url:'index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=culbert.mall.getGoodsByCate',
    method:'get',
    params:{cate:args[0],page:args[1]},
  })
}

export function getGoodsDetail(id){
  return request({
    url:'ewei_shopv2_api.php?i=1&r=goods.get_detail',
    method:'get',
    params:{id:id},
  })
}
