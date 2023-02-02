/*
##################################################
# Judge Mobile Device or PC
# Author : GitHub@MoYu-Official
# Website : https://MoYu-Official.GitHub.io/JavaScript/
# Version : 1.2_2022-2-18
# Don't delete copyright information.
##################################################
*/
//目前只用来跳转到移动设备适配页"./m/"，需要自定义的请自行下载修改
if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|HarmonyOS|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    location.href = "./m/"
}

//推荐的可拓展选项
/*
else if () {
    location.href = "url"
}

else {
    location.href = "url"
}
*/

//从移动设备适配页跳转到默认页，需要开启的请自行下载并去掉下方代码前注释，请注意避免与上方冲突
/*
if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|HarmonyOS|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    
}

else {
    location.href = "./"
}
*/
