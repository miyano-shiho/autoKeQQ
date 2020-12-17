// ==UserScript==
// @name         2NakarA(签到及进入课堂时有提示音)
// @namespace    https://ke.qq.com/
// @version      0.1
// @description  open web page and 
// @author       NakarA
// @match        https://ke.qq.com/*
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @license      MIT
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.0/dist/jquery.min.js
// @require      https://gitee.com/nakara/tencent-ke-data/raw/master/js/keData.js
// @grant        none
// ==/UserScript==

const _0x312b=['-300px','log','mouseenter','attr','checkbox-auto-login','#tips','login','answer','loginCnt','checkBeginning',':checked','autoAnswer','#checkbox-auto-login','isMute','checked','#time','animate','#num-auto-login','text','addUi','answerCnt'];const _0xa205=function(_0x312bb1,_0xa2054e){_0x312bb1=_0x312bb1-0x0;let _0x311814=_0x312b[_0x312bb1];return _0x311814;};(function(){'use strict';let _0x1cc9b6=0xa;const _0xdd9e34=new KeData($,'.s-btn--m','p.head-text','p.title');_0xdd9e34[_0xa205('0x13')]();let _0x4f0e8f=$('#suspended-ball');let _0xb7a6cc=$(_0xa205('0x5'));let _0x1a72fc=$(_0xa205('0x4'));let _0x2d1937=$('checkbox-auto-answer');let _0x49489f=$('checkbox-auto-mute');_0x4f0e8f[_0xa205('0x2')](function(){let _0x229a5b=new Date();$(_0xa205('0xf'))['text'](_0x229a5b['getHours']()+':'+_0x229a5b['getMinutes']());$(_0xa205('0x11'))[_0xa205('0x12')](_0xdd9e34[_0xa205('0x8')]);$('#num-auto-answer')['text'](_0xdd9e34[_0xa205('0x14')]);_0xb7a6cc[_0xa205('0x10')]({'left':'0px'},0x12c);});_0xb7a6cc['mouseleave'](function(){_0xb7a6cc[_0xa205('0x10')]({'left':_0xa205('0x0')},0x12c);});$(_0xa205('0xc'))[_0xa205('0x3')](_0xa205('0xe'),_0xdd9e34[_0xa205('0x6')]);$('#checkbox-auto-answer')[_0xa205('0x3')](_0xa205('0xe'),_0xdd9e34[_0xa205('0x7')]);$('#checkbox-auto-mute')[_0xa205('0x3')](_0xa205('0xe'),_0xdd9e34[_0xa205('0xd')]);setInterval(function(){_0xdd9e34[_0xa205('0x6')]=$(_0xa205('0xc'))['is'](':checked');_0xdd9e34['answer']=$('#checkbox-auto-answer')['is'](_0xa205('0xa'));_0xdd9e34[_0xa205('0xd')]=$('#checkbox-auto-mute')['is'](_0xa205('0xa'));_0xdd9e34[_0xa205('0x9')]();_0xdd9e34['autoLogin']();_0xdd9e34[_0xa205('0xb')]();console[_0xa205('0x1')](_0xdd9e34['businessLog']);},_0x1cc9b6*0x3e8);}());
