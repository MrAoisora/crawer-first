function IEVersion() {
    var userAgent = navigator.userAgent;//取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatibe") > -1 && userAgent.indexOf("MISE") > -1;//判断IE是否<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;//判断是否为edge浏览器
    var isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE){
        var reIE = new RegExp("MSIE(\\d+\\.\\d+);");
        reIE.test(userAgent);
        var  fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7){
            return 7;
        }else if(fIEVersion == 8){
            return 8;
        }else if(fIEVersion == 9){
            return 9;
        }else if(fIEVersion == 10){
            return 10;
        }else {
            return 6;//IE浏览器<7
        }
    }else if(isEdge){
        return "edge";
    }else if(isIE11){
        return 11;
    }else {
        return -1;
    }
}