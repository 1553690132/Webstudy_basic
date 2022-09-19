$(() => {
    load();
    // 输入功能
    $('#title').on('keydown', function (e) {
        if (e.key === 'Enter') {
            if ($(this).val() === '') {
                alert('请输入内容！')
            }
            else {
                const local = getData();
                local.push({ title: $(this).val(), done: false });
                saveData(local);
                load();
                $(this).val('');
            }
        }
    })

    // 删除功能
    $('ol, ul').on('click', 'a', function () {
        const data = getData();
        // 自定义属性attr获取
        const index = $(this).attr('id');
        data.splice(index, 1);
        // 删除后重新保存并渲染
        saveData(data);
        load();
    });

    // 读取本地数据
    function getData() {
        const data = localStorage.getItem('todolist');
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 保存数据
    function saveData(datas) {
        localStorage.setItem('todolist', JSON.stringify(datas));
    }

    // 加载数据
    function load() {
        const datas = getData();
        let todoCount = 0, doneCount = 0;
        $('ol').empty();
        $('ul').empty();
        // 清空再遍历 防止重复！
        $(datas).each(function (index, ele) {
            if (ele.done) {
                $('ul').prepend(`<li><input type="checkbox" checked><p>${ele.title}</p><a href="javascript:;" id=${index}></a></li>`);
                doneCount++;
            } else {
                $('ol').prepend(`<li><input type="checkbox"><p>${ele.title}</p><a href="javascript:;" id=${index}></a></li>`);
                todoCount++;
            }
        });
        $('#todocount').text(todoCount);
        $('#donecount').text(doneCount);
    }

    // 复选框确认
    $('ol, ul').on('change', 'input', function () {
        const datas = getData();
        const index = $(this).siblings('a').attr('id');
        // 存入数据为当前点击的状态
        datas[index].done = $(this).prop('checked');
        saveData(datas);
        load();
    })
})