
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

	// One Table
	$('#table1').append(
		$('<colgroup>').prop({
			id: 'colgroup1',
			innerHTML: 	'<col span="1" style="width: 20%;">' +
						'<col span="1" style="width: 65%;">' +
						'<col span="1" style="width: 15%;">'
		})
	);
	$('#table1').append(
		$('<tr>').prop({
			id: 'row1',
			className: "navbar navbar-expand-lg  bg"
		})
	);
	
	// Three cells
	$('#row1').append(
		$('<td>').prop({
			id: 'siteLogo',
			className: "navbar navbar-expand-lg  bg",
		})
	);
	$('#row1').append(
		$('<td>').prop({
			id: 'siteLinks',
			className: "navbar navbar-expand-lg  bg",
		})
	);
	$('#row1').append(
		$('<td>').prop({
			id: 'navicons',
			className: "navbar navbar-expand-lg  bg",
		})
	);

	// The site logo
	$('#siteLogo').append(
		$('<a>').prop({
			id: 'navcol-1',
			className: "navbar-brand",
			href: "./index.html",
			innerHTML: '<img src="' + prefix + 'imgs/logo_shadow.png" width="70" height="50" alt="">'
		})
	);  

	// The site links
	$('#siteLinks').append(
		$('<h1>').prop({
			className: "logo",
			innerHTML: '<a href="' + prefix + 'index.html" class="header-label">Home</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/team.html" class="header-label">Team</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/resources.html" class="header-label">Resources</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/projects.html" class="header-label">Projects</a>'
		})
	); 
	$('#siteLinks').append(
		$('<h1>').prop({
			className: "logo",
			innerHTML: '<a href="' + prefix + 'content/joinUs.html" class="header-label">Join Us</a>'
		})
	); 

	// The navicons
	$('#navicons').append(
		$('<nav>').prop({
			id: 'navcol-1',
			className: "nav-menu d-none d-lg-block",
			innerHTML: 
			'<ul>' +
            '<li><a href="https://www.facebook.com/"><i class="material-icons facebook">facebook</i></a></li>' +
			'<li><a href="https://www.youtube.com/watch?v=6IJuLtj3400&list=PL7yYIG1eq9bRWBbc8xcwoRwLu1Dyc7qP0"> <i class="material-icons ">play_circle</i></a></li>'+
            '<li><a href="https://github.com/neurotechuvic"><i class="material-icons folder">folder</i></a></li>'+
            '<li><a href="mailto:gabrieltaves@uvic.ca"><i class="material-icons Email">email</i></a></li>' +
          '</ul>'
		})
	); 
});
