$(function(){
	// load title content
	$("#topTitleContent").load("../primary-top-title.html");

	// load footer content
	$("#footerContent").load("../primary-footer.html");

	// load page links
	$("#homePageLinksContent").load("../primary-page-links.html", function(){

		// lets user know what page they are currently on
		var pathname = window.location.pathname;
		$(".home-page-link").find('a').each(function () {
			var linktext = $(this).text();
			if(pathname.indexOf(linktext) >= 0){
				$(this).before("| ")
			}
		});


	});

});