/**
 * 时间相关的公共js脚本
 */


/**
 * 校验当前系统时间是否在当天的某个时间段内
 * @author Mowq
 * @param beginTimeParam
 * @param endTimeParam
 * @returns {boolean}
 */
function isInTime(beginTimeParam, endTimeParam) {
    debugger;
    //1.拼接字符
    var curTime = new Date();//当前系统时间
    var year = curTime.getFullYear();
    var month = curTime.getMonth() + 1;//getMonth()获取到的的数值比实际月份少1
    var date = curTime.getDate();
    var beginTimeStr = year + '-' + month + '-' + date + ' ' + beginTimeParam;
    var endTimeStr = year + '-' + month + '-' + date + ' ' + endTimeParam;
    //2把字符串格式转换为日期类
    var startTime = new Date(Date.parse(beginTimeStr));
    var endTime = new Date(Date.parse(endTimeStr));
    //3进行时间区域判断 [startTime,endTime]
    if (!(curTime >= startTime && curTime <= endTime)) {
        return false;
    }
    return true;
}

