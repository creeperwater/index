$('.world .banner>div').click(function(){
    var target = $(this).attr('goto');
    $('.world .content>div').each(function(){$(this).hide();});
    $(target).show();
});
$.getJSON("data/world2020.json", function (data) {
    for(var i=0,len=data.length;i<len;i++){
        $('.world .chart1').append(`<div><h1>${data[i].rank}</h1><h2>${data[i].ISO3}</h2><p><span style='width:${data[i].score}%'></span></p></div>`);
    }
})
$.getJSON("data/world2019.json", function (data) {
    for(var i=0,len=data.length;i<len;i++){
        $('.world .chart2').append(`<div><h1>${data[i].rank}</h1><h2>${data[i].ISO3}</h2><p><span style='width:${data[i].score}%'></span></p></div>`);
    }
})