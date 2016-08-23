$(document).ready(function() {

	$(function(){
		// load title content
		$("#topTitleContent").load("/resources/primary-top-title.html");

		// load footer content
		$("#footerContent").load("/resources/primary-footer.html");

		// load copyright - does not show up on page source so don't bother dynamically inserting it
		// $.ajax({
		// 	url: "/resources/primary-copyright.html",
		// 	success: function (data) { $('head').prepend(data); },
		// 	dataType: 'html'
		// });

		// load page links
		$("#homePageLinksContent").load("/resources/primary-page-links.html", function(){
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

		// loops through each .tag-button element and adds a jquery click function to each tag button
		$(".tag-button").each(function () {
			var taggedText = $(this).text();
			$(this).click(function() {
				window.location = "../projects" + "?tagged=" + taggedText;
			});
		});

		var anyTags = getUrlParameter('tagged');

		if (typeof anyTags !== 'undefined' && anyTags !== '') {
			anyTags = anyTags.toLowerCase();
			$('.page-content-item').each(function () {
				var contentTags = [];
				$(this).find(".tag-button").each(function() {
					t = $(this).text();
					contentTags.push(t);
				});
        		if ($.inArray(anyTags, contentTags) > -1) { // more than -1 means found in tags array, so do nothing
        			return;
        		}
        		else {
        			$(this).remove();
        		}
        	});

			var contentItemCount = $('.page-content-item').length;

			if (contentItemCount > 0) {
				$('.page-content > .row').before("<p>Showing all posts tagged <strong>" + anyTags + "</strong>.</p><br>");
			}
			else {
				$('.page-content > .row').before("<p>There are no posts tagged <strong>" + anyTags + "</strong>.</p><br>");
			}
			


		}

	});
});


var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};