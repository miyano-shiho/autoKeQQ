// ==UserScript==
// @name         2NakarA(签到及进入课堂时有提示音)
// @namespace    https://ke.qq.com/
// @version      0.1
// @description  打开腾讯课堂, 睡觉
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

(function() {

    'use strict';

    let intervalTime = 10; // 执行一次扫描需要的时间
    const keData = new KeData($, '.s-btn--m', 'p.head-text', 'p.title');
    keData.addUi();

    let ball = $('#suspended-ball');
    let ui = $('#tips');
    let checkboxLogin = $('checkbox-auto-login');
    let checkboxAnswer = $('checkbox-auto-answer');
    let checkboxIsMute = $('checkbox-auto-mute');

    ball.mouseenter(function () {

        let date = new Date();
        $('#time').text(date.getHours() + ':' + date.getMinutes());
        $('#num-auto-login').text(keData.loginCnt);
        $('#num-auto-answer').text(keData.answerCnt);

        ui.animate({
            left: '0px'
        }, 300)
    });

    ui.mouseleave(function () {
        ui.animate({
            left: '-300px'
        }, 300)
    });

    $('#checkbox-auto-login').attr('checked', keData.login);
    $('#checkbox-auto-answer').attr('checked', keData.answer);
    $('#checkbox-auto-mute').attr('checked', keData.isMute);

    setInterval(function () {

        keData.login = $('#checkbox-auto-login').is(':checked');
        keData.answer = $('#checkbox-auto-answer').is(':checked');
        keData.isMute = $('#checkbox-auto-mute').is(':checked');
        keData.checkBeginning();
        keData.autoLogin();
        keData.autoAnswer();

        // keData.muteTeacher();
        console.log(keData.businessLog);
    }, intervalTime * 1000);

})();
