!function(o,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):o.loggerBrowser=n()}(this,function(){"use strict";var o="#64ea91",n="#d897eb",c="#f69899",e="#f8c82e",t=["background: "+"#8fc9fb","color: black","display: block","text-align: center"].join(";"),l=["background: "+o,"color: black","display: block","text-align: center"].join(";"),i=["background: "+e,"color: black","display: block","text-align: center"].join(";"),r=["background: "+c,"color: black","display: block","text-align: center"].join(";"),a=["background: "+n,"color: black","display: block","text-align: center"].join(";");return function(){return function(){this.info=function(o,n){console.log("%c"+o+" "+(n?"%O":""),t,n||"")},this.success=function(o,n){console.log("%c"+o+" "+(n?"%O":""),l,n||"")},this.warn=function(o,n){console.log("%c"+o+" "+(n?"%O":""),i,n||"")},this.error=function(o,n){console.log("%c"+o+" "+(n?"%O":""),r,n||"")},this.network=function(o,n){console.log("%c"+o+" "+(n?"%O":""),a,n||"")}}}()});
//# sourceMappingURL=index.umd.js.map