// 要求路由器
const express = require('express')
// 引入路由器的模組
const router = express.Router()
// 引入home.js 的 code
const home = require('./modules/home')

// 引入 restaurants.js 的 code
const restaurants = require('./modules/restaurants')
// 如果URL是/, 就使用home的code
router.use('/', home)
// 如果URL是/search, 就使用home的code
router.use('/search', home)

// 如果URL是/restaurants, 就使用restaurants的code
router.use('/restaurants', restaurants)


// 匯出路由器
module.exports = router