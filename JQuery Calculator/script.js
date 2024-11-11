$(document).ready(function () {

    $('#period').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'.');
    });

    // Numbers
    $('#zero').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'0');
    });

    $('#one').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'1');
    });

    $('#two').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'2');
    });

    $('#three').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'3');
    });

    $('#four').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'4');
    });
    $('#five').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'5');
    });

    $('#six').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'6');
    });
    
    $('#seven').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'7');
    });
    
    $('#eight').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'8');
    });

    $('#nine').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'9');
    });

    $('#plus').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'+');
    });

    $('#minus').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'-');
    });

    $('#divide').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'/');
    });

    $('#multiply').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'*');
    });

    $('#AC').click(function (e) { 
        e.preventDefault();
        $('#input').val('');
    });

    $('#SQ').click(function (e) { 
        e.preventDefault();
        $('#input').val(Math.sqrt($('#input').val()));
    });

    $('#equals').click(function (e) { 
        e.preventDefault();
       $('#input').val(eval($('#input').val()));
    });

    $('#up').click(function (e) { 
        e.preventDefault();
        $('#input').val($('#input').val()+'**');
    });
});