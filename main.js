function main () {
    $('.boxes').hide();
    $('.boxes').fadeIn(2000);

    $('.button-txt').hide();
    $('.button').on('click', function() {
        
        $(this).next().slideToggle(400);
            
    });
}

$(document).ready(main);