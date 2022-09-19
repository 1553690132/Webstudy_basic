$(() => {
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', res => {
            if (res.status !== 200) return alert('获取失败!');
            const htmlStr = template('tpl-news', res);
            $('#news-list').html(htmlStr);
        })
    } getNewsList();



    template.defaults.imports.timeFormat = function (time) {
        return `${time.split('T')[0]} ${time.split('T')[1].split('.')[0]}`;
    }
})