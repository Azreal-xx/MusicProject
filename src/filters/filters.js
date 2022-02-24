// 时长格式化
let setTime = time => {
    var duration = parseInt(time);
    var minute = parseInt(duration/60);
    var sec = duration%60+'';
    var isM0 = ':';
    if(minute == 0){
        minute = '00';
    }else if(minute < 10 ){
        minute = '0'+minute;
    }
    if(sec.length == 1){
        sec = '0'+sec;
    }
    return minute+isM0+sec
}

// 时间戳转详细世时间过滤器
let dateFormatdetailed = value =>{
    let result = ""
    var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var sdate = ("0" + date.getDate()).slice(-2);
    var hour = ("0" + date.getHours()).slice(-2);
    var minute = ("0" + date.getMinutes()).slice(-2);
    var second = ("0" + date.getSeconds()).slice(-2);
    // 拼接

    result = year + "-" + month + "-" + sdate + " " + hour + ":" + minute + ":" + second;
    // 返回
    return result;
}

// 时间戳转时间过滤器
let dateFormat = value => {
    let result = ""
    var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var sdate = ("0" + date.getDate()).slice(-2);
    var hour = ("0" + date.getHours()).slice(-2);
    var minute = ("0" + date.getMinutes()).slice(-2);
    var second = ("0" + date.getSeconds()).slice(-2);
    // 拼接

    result = year + "-" + month + "-" + sdate
    // 返回
    return result;
}

// 注册处理单个或多个歌手信息过滤器
let Singersname = singers => {
    if(singers.length == 1) {
        return singers[0].name
      } else {
          let result = ""
          for(var singer of singers) {
              result += '/' + singer.name
          }
          return result.slice(1)
      }
}

// 注册过万处理全局过滤器
let Otthprocessing = value => {
    let num;
    value = parseInt(value)
    if(value > 9999){//大于9999显示x.xx万
        num=(Math.floor(value/1000)/10) + 'W';
    }else if( value < 9999 && value>-9999){
        num=value
    }else if(value<-9999){//小于-9999显示-x.xx万
        num = -(Math.floor(Math.abs(value)/1000)/10)+'W'
    }
    return num;
}

// 注册毫秒转化为   分钟:秒数
let formatTime = value => {
    let minutes = Math.floor(value / 60)
    let seconds = parseInt(value % 60)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}

export default {
    setTime,
    dateFormatdetailed,
    dateFormat,
    Singersname,
    Otthprocessing,
    formatTime
}