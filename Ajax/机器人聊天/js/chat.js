$(() => {
  resetui();
  // 重置滚动条

  $('#btnSend').on('click', function () {
    const text = $('#ipt').val().trim();
    if (text.length <= 0) return $('#ipt').val('');
    // 输入内容渲染到页面
    $('#talk_list').append(`<li class="right_word">
    <img src="img/person02.png" /><span>${text}</span>
  </li>`);
    $('#ipt').val('');
    resetui();
    getMeg(text);
  })

  $('#ipt').on('keydown', e => {
    if(e.key === 'Enter') {
      $('#btnSend').click();
    }
  })

  // 获取机器人消息
  function getMeg(text) {
    $.ajax({
      type: 'GET',
      url: 'http://www.liulongbin.top:3006/api/robot',
      data: {
        spoken: text
      },
      success: res => {
        if (res.message === 'success') {
          // 获取聊天信息 
          const msg = res.data.info.text;
          $('#talk_list').append(`<li class="left_word">
          <img src="img/person01.png" /> <span>${msg}</span>
      </li>`)
          resetui();
          getVoice(msg);
        }
      }
    })
  }

  // 让机器人文本变为语音
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