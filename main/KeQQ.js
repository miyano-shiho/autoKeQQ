/*
    脚本功能:
    1. 自动签到
    2. 自动答题
    3. 检测老师是否进入课堂
    4. 进入课堂自动静音
    5. 待定

    将这五种功能作为 keData 的参数创建对象, 以初始化每种功能的运行或停用
*/
class KeData {

    _uiDoc =
        '<audio id="ding-tip" src="https://gitee.com/nakara/tencent-ke-data/raw/master/audio/message.wav"></audio>' +
        '<div id="suspended-ball" style="position: fixed; left: -15px; width: 30px; height: 30px; top: 350px; background: aquamarine; border-radius: 0 100% 100% 0;" title="脚本"></div>' +
        '<div id="tips" style="width: 128px; height: 110px; padding: 5px 5px 15px 20px; position: fixed; top: 300px; left: -300px; border-radius: 10px; background: aquamarine;">' +
        '<ul style="list-style-type: none;"><li style="margin-bottom: 5px"><div>当前时间:<span id="time"> 0:00 </span></div></li>' +
        // '<li style="margin-bottom: 5px"><div>共计签到:<span id="num-auto-login"> 0 </span>次.</div></li>' +
        // '<li style="margin-bottom: 15px"><div>共计答题:<span id="num-auto-answer"> 0 </span>次.</div></li>' +
        '<li class="ui-li" id="switch-auto-login" style="margin-bottom: 5px; cursor:hand"><div><label for="checkbox-auto-login">自动签到: </label><input id="checkbox-auto-login" style="transform: scale(1.6);" type="checkbox"/></div></li>' +
        '<li class="ui-li" id="switch-auto-answer" style="margin-bottom: 5px; cursor:hand"><div><label for="checkbox-auto-answer">自动答题: </label><input id="checkbox-auto-answer" style="transform: scale(1.6);" type="checkbox"/></div></li>' +
        '<li class="ui-li" id="switch-auto-mute"><div><label for="checkbox-auto-mute">静音开关: </label><input id="checkbox-auto-mute" style="transform: scale(1.6);" type="checkbox"/></div></li></ul></div>';
    _another = false;

    constructor($, loginClassname, answerClassname, beginningClassname) {
        console.log('构造函数被执行');
        this.$ = $;
        this.loginClassname = loginClassname;
        this.answerClassname = answerClassname;
        this.beginningClassname = beginningClassname;
    }

    _login = true;

    get login() {
        return this._login;
    }

    set login(value) {
        this._login = value;
    }

    _answer = true;

    get answer() {
        return this._answer;
    }

    set answer(value) {
        this._answer = value;
    }

    _isMute = false;

    get isMute() {
        return this._isMute;
    }

    set isMute(value) {
        this._isMute = value;
    }

    _classClose = true;

    get classClose() {
        return this._classClose;
    }

    set classClose(value) {
        this._classClose = value;
    }

    _loginCnt = 0;

    get loginCnt() {
        return this._loginCnt;
    }

    set loginCnt(value) {
        this._loginCnt = value;
    }

    _answerCnt = 0;

    get answerCnt() {
        return this._answerCnt;
    }

    set answerCnt(value) {
        this._answerCnt = value;
    }

    _businessLog = [];

    get businessLog() {
        return this._businessLog;
    }

    set businessLog(value) {
        this._businessLog = value;
    }

    _certainText = "";

    get certainText() {
        return this._certainText;
    }

    set certainText(value) {
        this._certainText = value;
    }


    /*
        类方法
     */
    addUi() {
        console.log('addUi函数执行');
        $('#react-body').append(this._uiDoc);
    };

    muteTeacher() {
        this._isMute = !this._isMute;
    }

    /*
      自动签到
      检测目标按钮的text属性判断其是否为签到或确定
     */
    autoLogin() {
        if (this._login) {
            console.log('自动签到模块已生效');
            let date = new Date();
            this._certainText = $(this.loginClassname);
            if (this._certainText && this._certainText.text()) {
                let tempText = this._certainText.text();
                if (tempText === '签到' || tempText === '确定') {
                    this._certainText.click();
                    if (tempText === '签到') {
                        $('#ding-tip')[0].play();
                        this._loginCnt += 1;
                        this._businessLog.push(date.getHours() + " : " + date.getMinutes() + " \"" + '签到任务' + "\"被执行");
                    }
                }
            }
        }
    }

    /*
        自动答题, 可关闭
     */
    autoAnswer() {
        let date = new Date();
        if (this._answer) {
            console.log('自动答题模块已生效');
            this._certainText = $(this.answerClassname);
            if (this._certainText && this._certainText.text()) {
                console.log(this._certainText);
                let tempText = this._certainText.text();
                if (tempText === '单选题' && $('.s-btn--primary')) {
                    let select = Math.floor(Math.random() * 3);
                    $('.s-f-rc-item')[select].click();
                    // this._answerCnt += 1;
                    // this._businessLog.push(date.getHours() + " : " + date.getMinutes() + " \"" + '多选题' + "\"被执行");
                } else if (tempText === '多选题' && $('.s-btn--primary')) {
                    let select2 = Math.floor(Math.random() * 3);
                    $('.s-f-rc-item')[select2].click();
                    let select3 = Math.floor(Math.random() * 3);
                    $('.s-f-rc-item')[select3].click();
                    // this._answerCnt += 1;
                    // this._businessLog.push(date.getHours() + " : " + date.getMinutes() + " \"" + '多选题' + "\"被执行");
                }

                setTimeout(function () {
                    $(this.loginClassname).click();
                }, 1000 * 2);
            }
        }
    }

    checkBeginning() {
        if (this._classClose) {
            console.log('课堂检测模块正在执行, 正在进入教室...');
            if ($(this.beginningClassname).text() === '老师已经下课了！') {
                window.location.reload();
            } else {
                $('#ding-tip')[0].play();
                this._classClose = false;
            }
        }
    }

    showLog() {
        this._businessLog.forEach(function (index) {

        })
    }
}
