$(() => {
    function getCommentList() {
        $.ajax({
            type: 'GET',
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            data: {},
            success: res => {
                if (res.status !== 200) return alert('获取失败！');
                $('#cmt-list').empty();
                $.each(res.data, (index, item) => {
                    $('#cmt-list').append(` <li class="list-group-item">
                    <span class="badge" style="background-color: #F0AD4E;">评论时间:${item.time}</span>
                    <span class="badge" style="background-color: #5BC0DE;">评论人:${item.username}</span>
                    ${item.content}
                </li>`);
                })
            }
        })
    } getCommentList();

    $('#formAddCmt').on('submit', function (e) {
        e.preventDefault();
        const data = $(this).serialize();
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, res => {
            if (res.status !== 201) return alert('发表失败!');
            getCommentList();
        })
        $(this)[0].reset();
        // jQuery对象转化为DOM对象使用reset方法
    })

    
})