
//file prefix changes if we're not loading index.html
var prefix = "./"
if(!window.location.href.includes("index.html")){
	prefix = "../"
}

//When the document is ready
$(document).ready(function() {
	//Divide the header
	$('#header').append(
		$('<table>').prop({
			id: 'table1',
			className: "navbar navbar-expand-lg  bg",
		})
	);
	$('#table1').append(
		$('<tr>').prop({
			id: 'row1',
			className: "navbar navbar-expand-lg  bg",
		})
	);

	$('#row1').append(
		$('<span>').prop({
			id: 'siteLogo',
			className: "navbar navbar-expand-lg  bg",
		})
	);
	$('#row1').append(
		$('<span>').prop({
			id: 'siteLinks',
			className: "navbar navbar-expand-lg  bg",
		})
	);
	$('#row1').append(
		$('<span>').prop({
			id: 'navicons',
			className: "navbar navbar-expand-lg  bg",
		})
	);


	// The site links
	$('#siteLogo').append(
		$('<a>').prop({
			id: 'navcol-1',
			className: "navbar-brand",
			href: "./index.html",
			innerHTML: '<img src="' + prefix + 'imgs/logo_shadow.png" width="70" height="50" alt="">'
		})
	);  
	$('#siteLinks').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo",
			innerHTML: '<a href="' + prefix + 'index.html" class="header-label">Home</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/team.html" class="header-label">Team</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/resources.html" class="header-label">Resources</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/projects.html" class="header-label">Projects</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/joinUs.html" class="header-label">Join Us</a>'
		})
	); 

	// The Navicons
	$('#navicons').append(
		$('<nav>').prop({
			id: 'navcol-1',
			className: "nav-menu d-none d-lg-block",
			innerHTML: 
			'<ul>' +
            '<li><a href="https://www.facebook.com/"><i class="material-icons facebook">facebook</i></a></li>' +
			'<li><a href="https://www.youtube.com/watch?v=6IJuLtj3400&list=PL7yYIG1eq9bRWBbc8xcwoRwLu1Dyc7qP0"> <i class="material-icons ">play_circle</i></a></li>'+
            '<li><a href="https://github.com/neurotechuvic"><i class="material-icons folder">folder</i></a></li>'+
            '<li><a href=""><i class="material-icons Email">email</i></a></li>' +
          '</ul>'
		})
	); 
});
