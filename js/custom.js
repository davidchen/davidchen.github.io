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

	// loops through each element with the class ".euler-problem-title"
	$(".euler-problem-title").each(function (i) {
		var idCount = i+1;
		// assigns appropriate id tags for each euler problem (ids are given in order of the problems)
		$(this).attr("id", "euler"+idCount);
		// creates anchor links for euler problems up to however many are on page
		$(".euler-anchor-links").append("<a href='#euler" + idCount + "'><div class='euler-anchor-link'>" + idCount + "</div></a>");
	});

	


});