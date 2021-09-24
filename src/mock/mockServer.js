// 利用mockjs提供mock接口
import Mock from 'mockjs'
import recommends from './recommends'
import floors from './floors'
import like from './like'
import rank from './rank'

// 提供今日推荐接口
Mock.mock('/mock/recommends', { code: 200, data: recommends })



// 提供楼层接口
Mock.mock('/mock/floors', { code: 200, data: floors })

// 提供like接口 
Mock.mock('/mock/like', { code: 200, data: like })
// 提供rank 接口
Mock.mock('/mock/rank', { code: 200, data: rank })

