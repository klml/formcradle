// mark em with its value to rechange it later
function markEmWithText () {
    $('em').each( function () {
        $(this).attr( 'id', $(this).text().toLowerCase()  )
    });
};

function input2italic() {
    // change content of em with given values form inputs
    $("input").each( function () {
        inputvalue = $(this).val();

        $('em#' + $(this).attr('name') ).each( function () {
            if ( inputvalue != "") $(this).text( inputvalue )
        });
    });
};
function setQRcode() {
    document.getElementById("qrcodeurl").innerHTML = "" ;
    if( $('#fcqr').prop('checked') ) {
        var qrcode = new QRCode(document.getElementById("qrcodeurl"), {
            text: window.location.href ,
            width: 192,
            height: 192,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.L
        });
    }
};

jQuery(document).ready(function() {
    var formcradleform = window.location.search.substring(6) ;  // remove the string '?form='

    if ( formcradleform ) {
        document.title = formcradleform ;
        $.ajax( { url : formcradleform , dataType: "text" } )
        .done(function( data ) {

            // prepareForm ;
            $("#content").html( Markdown(data) );
            hashsplit();
            updateHash();
            markEmWithText()
            input2italic();
            setQRcode();

        }).fail(function() {
            alert( formcradleform + " is not available" );
        });
    }

});
window.onhashchange = input2italic ;
window.onhashchange = setQRcode ;