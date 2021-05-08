
//file prefix changes if we're not loading index.html
var prefix = "./"
if(!window.location.href.includes("index.html")){
	prefix = "../"
}

//When the document is ready
$(document).ready(function() {
	//Append into the navbar
	$('#header').append(
		$('<div>').prop({
			id: 'nav',
			className: "navbar navbar-expand-lg  bg",
		})
	);
	$('#nav').append(
		$('<a>').prop({
			id: 'navcol-1',
			className: "navbar-brand",
			href: "./index.html",
			innerHTML: '<img src="' + prefix + 'imgs/logo_shadow.png" width="70" height="50" alt="">'
		})
	);  
	$('#nav').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo mr-auto",
			innerHTML: '<a href="' + prefix + 'index.html">Home</a>'
		})
	); 
	$('#nav').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo mr-auto",
			innerHTML: '<a href="' + prefix + 'content/team.html">Team</a>'
		})
	); 
	$('#nav').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo mr-auto",
			innerHTML: '<a href="' + prefix + 'content/resources.html">Resources</a>'
		})
	); 
	$('#nav').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo mr-auto",
			innerHTML: '<a href="' + prefix + 'content/projects.html">Projects</a>'
		})
	); 
	$('#nav').append(
		$('<h1>').prop({
			id: 'navcol-1',
			className: "logo mr-auto",
			innerHTML: '<a href="' + prefix + 'content/joinUs.html">Join Us</a>'
		})
	); 

	$('#nav').append(
		$('<nav>').prop({
			id: 'navcol-1',
			className: "nav-menu d-none d-lg-block",
			innerHTML: 
			    '<ul>' +
            '<li><a href="#"><i class="material-icons sms">sms</i></a></li>' +
            '<li><a href="#"><i class="material-icons notifications">notifications</i></a></li>'+
            '<li><a href="#"> <i class="material-icons help">help</i></a></li>' +
            '<li><a href="#"><i class="material-icons Email">email</i></a></li>' +
          '</ul>'
		})
	); 
});
