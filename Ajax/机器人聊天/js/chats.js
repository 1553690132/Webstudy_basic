$(() => {
    resetui();

    $('#btnSend').on('click', function () {
        const text = $('#ipt').val().trim();
        if (text.length <= 0) return alert('不能输入空内容!');
        $('#talk_list').append(`<li class="right_word">
        <img src="img/person02.png" /><span>${text}</span>
      </li>`);
        $('#ipt').val('');
        getMsg(text);
        resetui();
    })

    $('#ipt').on('keydown', e => {
        if (e.key === 'Enter') {
            $('#btnSend').click();
        }
    })

    function getMsg(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: res => {
                if (res.message === 'success') {
                    const msg = res.data.info.text;
                    $('#talk_list').append(`<li class="left_word">
        <img src="img/person01.png" /><span>${msg}</span>
      </li>`);
                    resetui();
                    getVoice(msg);
                }
            }
        })
    }

    function getVoice(text) {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: res => {
                if (res.status === 200) {
                    $('#voice').attr('src', res.voiceUrl);
                }
            }
        })
    }
})