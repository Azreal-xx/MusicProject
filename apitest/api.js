const express = require('express');
var request = require('request');
const cheerio = require('cheerio');
// const util = require("util")
// const app = express();
// /* 引入cors */
// const cors = require('cors');
// app.use(cors());
// /* 引入body-parser */
// const bodyParser = require('body-parser');
// const { get } = require('http');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.all('*', function (req, res, next) {
//   if (!req.get('Origin')) return next();
//   // use "*" here to accept any origin
//   res.set('Access-Control-Allow-Origin', '*');
//   res.set('Access-Control-Allow-Methods', 'GET');
//   res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
//   // res.set('Access-Control-Allow-Max-Age', 3600);
//   if ('OPTIONS' == req.method) return res.send(200);
//   next();
// });

// // 轮播图
// app.get('/api/getbanners',(req, res) => {
//     request({
//         url: 'https://www.youku.com/',
//         method:'GET'
//     },function (error,response, body) {
//         let data = []
//         let bannerRe = /href="javascr.+?title="(.+?)" class="aplus_exp aplus_clk"><div class="focu/g
//         let bannerimgRe = /style="position:relative;background-image:url(.*?);background-color/g

//         let banners = body.match(bannerRe)
//         let imgs = body.match(bannerimgRe)
//         for(var index = 0; index < 8; index++) {
//             data.push({
//                 name: banners[index].slice(33, -46),
//                 src: 'https:' + imgs[index].slice(46, -18)
//             })
//         }
//         res.send(data)
//     })
// })

// 
// request({
//     url: 'https://www.youku.com/',
//     method:'GET'
// },function (error,response, body) {
//     let data = []
//     //let category = /"mainTitleLinks":\[{"title":"正在热播","logo":(.+?)"mainTitleLinks":\[{"title":"猜你在追",/g
//     let mayRe = /<span class="module_main_title module_last_item">猜你在追<(.+?)target="_self" title="电视剧" class="tabs_main_title aplus_exp aplus_clk">/g
//     let may = body.match(mayRe)[0]
//     let ones = /target="_blank" title=".+?"><img src="(.+?)<\/div><\/div><\/div><\/div><\/div><div class="g-col"><div class="g-box"><div class="pack_yk_pack" type="horizontal">/g
//     let one = may.match(ones)

//     for(var index = 0;index < 6; index++) {
//         let nameRe = /target="_blank" title="(.*?)">/g
//         let imgRe = /<img src="(.+?)"\/><div class="pack_bg">/g
//         let introRe = /<div class="pack_subtitle">(.+?)<\/div>/g

//         let name = one[index].match(nameRe)[0].slice(23, -2)
//         let img = 'https:' + one[index].match(imgRe)[0].slice(10, -24)
//         let intro = one[index].match(introRe)[0].slice(27, -6)
//         data.push({
//             name,
//             img,
//             intro
//         })
//     }

//     res.send(data)
// })

// 综艺
request({
    url: 'https://www.youku.com/',
    method:'GET'
},function (error,response, body) {
    let data = []
    //let category = /"mainTitleLinks":\[{"title":"正在热播","logo":(.+?)"mainTitleLinks":\[{"title":"猜你在追",/g
    let mayRe = /"mainTitleLinks":\[{"title":"综艺","logo":(.+?)"mainTitleLinks":\[{"title":"主题剧场","logo"/g
    let may = body.match(mayRe)[0]
    let ones = /"img":(.+?)"userInfo":null/g
    let one = may.match(ones)


    for(var index = 0;index < one.length; index++) {
        let nameRe = /"title":"(.+?)"/g
        let imgRe = /"img":"(.+?)"/g
        let introRe = /"subTitle":"(.+?)"/g

        let name = one[index].match(nameRe)[0].slice(9, -1)
        let img = one[index].match(imgRe)[0].slice(7, -1)
        if (img.length > 70) {
        img = 'https://liangcang-material.alicdn.com/prod/upload/' + img.slice(69) + '?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80'
        } else {
           if (img.indexOf("https") !== -1) {
               img = 'https://m.ykimg.com/' + img.slice(35) + '?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80'
            } else {
               img = 'https://m.ykimg.com/' + img.slice(29) + '?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80'
            }
        }
        let intro = one[index].match(introRe)[0].slice(12, -1)
        data.push({
            name,
            img,
            intro
        })
    }
    res.send(data)
})
