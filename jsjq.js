$('.progress span').each(function(){
    $(this).animate({
    width : $(this).attr('dataprogress')
    },2000,function(){
        $(this).text( $(this).attr('dataprogress')
        )
    })
    })