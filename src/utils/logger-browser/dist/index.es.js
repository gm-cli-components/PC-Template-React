/*
 * @Author: your name
 * @Date: 2020-08-03 17:21:00
 * @LastEditTime: 2020-08-03 18:10:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/src/utils/logger-browser/dist/index.es.js
 */
/* eslint-disable */
var color={blue:"#8fc9fb",green:"#64ea91",purple:"#d897eb",red:"#f69899",yellow:"#f8c82e",peach:"#f797d6",grass:"#d6fbb5",sky:"#c1e0fc"},normal=["background: "+color.blue,"color: black","display: block","text-align: center"].join(";"),ok=["background: "+color.green,"color: black","display: block","text-align: center"].join(";"),warning=["background: "+color.yellow,"color: black","display: block","text-align: center"].join(";"),failure=["background: "+color.red,"color: black","display: block","text-align: center"].join(";"),ajax=["background: "+color.purple,"color: black","display: block","text-align: center"].join(";"),Logger=function(){return function(){this.info=function(o,c){console.log("%c"+o+" "+(c?"%O":""),normal,c||"")},this.success=function(o,c){console.log("%c"+o+" "+(c?"%O":""),ok,c||"")},this.warn=function(o,c){console.log("%c"+o+" "+(c?"%O":""),warning,c||"")},this.error=function(o,c){console.log("%c"+o+" "+(c?"%O":""),failure,c||"")},this.network=function(o,c){console.log("%c"+o+" "+(c?"%O":""),ajax,c||"")}}}();export default Logger;
//# sourceMappingURL=index.es.js.map
/* eslint-disable */
