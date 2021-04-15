
$(document).ready(function() {
        $('#navbar').append(
                $('<div>').prop({
                        id: 'navcol-1',
                        innerHTML: '<a href="../index.html"><img src="imgs/logo_shadow.png" style="width: 91px ;margin: 8px;"></a>'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: "index.html",
                        innerHTML: 'Home'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: "team.html",
                        innerHTML: 'Team'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: "resources.html",
                        innerHTML: 'Resource'
                })
        );
                        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: "projects.html",
                        innerHTML: 'Projects'
                })
        );
        $('#navbar').append(
                $('<a>').prop({
                        id: 'navcol-1',
                        href: "joinUs.html",
                        innerHTML: 'Join Us'
                })
        );                        
});
