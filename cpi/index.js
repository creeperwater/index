$('.world .banner div').click(function(){
    var target = $(this).attr('goto');
    $('.world .content>div').each(function(){$(this).hide();});
    $(target).show();
});
$.getJSON("data/world.json", function (data) {
    for(var i=0,len=data.length;i<len;i++){
        $('.world .chart1').append(`<div><h1>${data[i].rank}</h1><h2>${data[i].country}</h2><p><span style='width:${data[i].score}%'></span></p></div>`);
    }
})