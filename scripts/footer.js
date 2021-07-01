

  /////////////////////////////////
 ///////////// FOOTER ////////////
/////////////////////////////////

//file prefix changes if we're not loading index.html
var prefix = "./"
if(!window.location.href.includes("index.html")){
        prefix = "../"
}


$(document).ready(function() {
        //Append onto parent
        $("footer").append(
                $('<div>').prop({
                        className: 'footer_content',
                        id: "footer_content",
                        style: "width: 100%"
                })
        );

        // BUILD TABLE
        $("#footer_content").append(
                $('<table>').prop({
                        style: "width: 100%",
                        id: "table1"
                })
        );
        $("#table1").append(
                $('<tr>').prop({
                        id: "tr1"
                })
        );

        // LEFT SIDE OF FOOTER
        $("#tr1").append(
                $('<td>').prop({
                        className: "footer_section about",
                        id: "td1"
                })
        );
        $("#td1").append(
                $('<div>').prop({
                        className: "footer_section about",
                        style: "float: left",
                        innerHTML:
                                '<h3 class="logo-text"><span>NeurotechUVIC</span></h3>' +
                                '<br>' +
                                '<p>Some info about how neurotech changes lives</p>' +
                                '<br>'
                })
        );

        // MIDDLE PART OF FOOTER
        $("#tr1").append(
                $('<td>').prop({
                        className: "footer_section quick-links",
                        id: "td2"
                })
        );
        $("#td2").append(
                $('<div>').prop({
                        className: "footer_section about",
                        style: "margin: auto",
                        innerHTML:
                                '<br>' +
                                '<h3 class="logo-text"><span>Quick Links</span></h3>' +
                                '<ul>' +
                                    '<li><a href = "#">Team</a></li>' +
                                    '<li><a href = "#">Resources</a></li>' +
                                    '<li><a href = "#">Projects</a></li>' +
                                    '<li><a href = "#">Join Us</a></li>' +
                               '</ul>'
                })
        );

        // RIGHT SIDE OF FOOTER
        $("#tr1").append(
                $('<td>').prop({
                        className: "footer_section contact",
                        id: "td3"
                })
        );
        $("#td3").append(
                $('<div>').prop({
                        className: "footer_section about",
                        style: "float: right",
                        innerHTML:
                                '<h3 class="logo-text"><span>Contact & Socials</span></h3>' +
                                  '<br>' + 
                                  '<div class="contact">' +
                                    '<span><i class="fas fa-phone"></i>&nbsp; (250) 721-7211</span>' +
                                    '<span><i class="fas fa-envelope"></i>&nbsp; *insert email right here*</span>' +
                                  '</div>' +
                                  '<br>' +
                                  '<div class="socials">' + 
                                    '<a href="https://www.facebook.com/neurotechuvic2021"><i class="fab fa-facebook-f"></i></i></a>' +
                                    '<a href="https://www.instagram.com/uvicneurotech/"><i class="fab fa-instagram"></i></i></a>' +
                                    '<a href="https://twitter.com/NeurotechU"><i class="fab fa-twitter"></i></i></a>' +
                                    '<a href="https://www.youtube.com/channel/UCZwPAcQAexJp9ky0V9R3b6w"><i class="fab fa-youtube"></i></i></a>' +
                                  '</div>' 
                })
        );

        // BOOTOM BAR ON FOOTER
        $("#footer_content").append(
                $('<div>').prop({
                        className: "footer_bottom",
                        innerHTML: "COPYRIGHT &copy; 2021 NeurotechUVIC"
                })
        );

});

////////////////////////////////////////
