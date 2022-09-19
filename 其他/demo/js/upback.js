var myChart = echarts.init(document.getElementById('mains'));
var option = {
    title: {
        text: '系友网日均活动量'
    },
    tooltip: {},
    xAxis: {
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    yAxis: {},
    series: [
        {
            name: '帖数',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 40]
        }
    ]
};
myChart.setOption(option);


var myChart1 = echarts.init(document.getElementById('bin1'));
var options = {
    title: {
        text: '系友网用户类型'
    },
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 335,
                    name: '老师'
                },
                {
                    value: 234,
                    name: '在校学生'
                },
                {
                    value: 1548,
                    name: '毕业校友'
                }
            ],
            radius: '50%'
        }
    ]
};
myChart1.setOption(options);