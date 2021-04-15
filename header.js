
//file prefix changes if we're not loading index.html
var prefix = "./"
if(!window.location.href.includes("index.html")){
        prefix = "../"
}

//When the document is ready
$(document).ready(function() {
        //Append into the navbar
        $('#navbar').append(
                $('<div>').prop({
                        id: 'navcol-1',
                        innerHTML: '<a href="' + prefix + 'index.html"><img src="' + prefix + 'imgs/logo_shadow.png" style="width: 91px ;margin: 8px;"></a>'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: prefix +"index.html",
                        innerHTML: 'Home'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: prefix + "content/team.html",
                        innerHTML: 'Team'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: prefix + "content/resources.html",
                        innerHTML: 'Resource'
                })
        );
                        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: prefix + "content/projects.html",
                        innerHTML: 'Projects'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: prefix + "content/joinUs.html",
                        innerHTML: 'Join Us'
                })
        );                        
});
