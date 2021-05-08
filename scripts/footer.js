

  /////////////////////////////////
 ///////////// FOOTER ////////////
/////////////////////////////////

//file prefix changes if we're not loading index.html
var prefix = "./"
if(!window.location.href.includes("index.html")){
        prefix = "../"
}

const parent = "footer";

$(document).ready(function() {
        //Append onto parent
        $(parent).append(
                $('<div>').prop({
                        className: '',
                        innerHTML: 
                                '<i class="fa fa-facebook-official w3-hover-opacity"></i>' +
                                '<i class="fa fa-instagram w3-hover-opacity"></i>' + 
                                '<i class="fa fa-snapchat w3-hover-opacity"></i>' + 
                                '<i class="fa fa-pinterest-p w3-hover-opacity"></i>' + 
                                '<i class="fa fa-twitter w3-hover-opacity"></i>' + 
                                '<i class="fa fa-linkedin w3-hover-opacity"></i>'
                })
        );
                  
});

////////////////////////////////////////



