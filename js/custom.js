$(document).ready(function() {

	$(function(){

		// load page title (using the name of the current html document it is on)
		var newTitle = "";

		var htmlDocFileName = document.location.pathname;

		if (htmlDocFileName.includes("/projects/")) {
			newTitle = " | projects";
			loadGloballyUsedExternalHtml();
			tagGrab();
			taggedProjectPageFunctionality();
			pageContentTextHrefLink();
			eulerIdAssignment();
			tagButtonClickFunctionality();
		}
		else if (htmlDocFileName.includes("/misc/")) {
			newTitle = " | misc";
			loadGloballyUsedExternalHtml();
		}
		else if (htmlDocFileName.includes("/blog/")) {
			newTitle = " | blog";
			loadGloballyUsedExternalHtml();
			taggedProjectPageFunctionality()
			tagButtonClickFunctionality();
			pageContentTextHrefLink();
		}
		else if (htmlDocFileName.includes("/contact/")) {
			newTitle = " | contact";
			loadGloballyUsedExternalHtml();
		} 
		else { // home page
			loadGloballyUsedExternalHtml();
		}

		document.title = "dchen.io" + newTitle;

	});
});


function tagButtonClickFunctionality() {
	console.log("This page uses tagButtonClickFunctionality().")
	
	// loops through each .tag-button element and adds a jquery click function to each tag button
	$(".tag-button").each(function () {
		var taggedText = $(this).text();
		console.log("click function added for " + taggedText);
		$(this).click(function() {
			window.location = "../projects" + "?tagged=" + taggedText;
		});
	});
};

function tagGrab() {
	console.log("This page uses tagGrab().");

	$(".tag-grab-recipient").each(function () {
		var postTitle = $(this).find(".page-content-item-title > h3").text();
		// console.log("Title: " + postTitle);
		$.get("/projects/index.html", function(HTMLdata) {
			$(HTMLdata).find(".page-content-item").each(function() {
				var title = $(this).find(".page-content-item-title > h3 > a").text();
				var tags = $(this).find(".page-content-item-tags").html();
				if (title == postTitle) {
					$(".page-content-item-tags").append(tags);
					tagButtonClickFunctionality();
					return;
				}
			});
		});
	});
};

function loadGloballyUsedExternalHtml() {
	console.log("This page uses loadGloballyUsedExternalHtml().");
	
	// load title content
	$("#topTitleContent").load("/resources/primary-top-title.html", function(){
		var pathname = window.location.pathname;

		$(".sm-size-link").each(function () {
			var linktext = $(this).text();
			if(pathname.indexOf(linktext) >= 0){
				$(this).css({"color":"white","background-color":"black"});
			}
		});
	});

	// load footer content
	$("#footerContent").load("/resources/primary-footer.html");

	// load page links and lets user know what page they are currently on
	$("#homePageLinksContent").load("/resources/primary-page-links.html", function(){
		var pathname = window.location.pathname;

		$(".home-page-link").find('a').each(function () {
			var linktext = $(this).text();
			if(pathname.indexOf(linktext) >= 0){
				// $(this).before("| ")
				$(this).css({"color":"white","background-color":"black","padding":"3px"});
			}
		});
	});
};

function eulerIdAssignment() {
	console.log("This page uses eulerIdAssignment().");
	
	// loops through each element with the class ".euler-problem-title"
	$(".euler-problem-title").each(function (i) {
		var idCount = i+1;
		// assigns appropriate id tags for each euler problem (ids are given in order of the problems)
		$(this).attr("id", "euler"+idCount);
		// creates anchor links for euler problems up to however many are on page
		$(".euler-anchor-links").append("<a href='#euler" + idCount + "'><div class='euler-anchor-link'>" + idCount + "</div></a>");
	});
};

function pageContentTextHrefLink() {
	console.log("This page uses pageContentTextHrefLink().");
	
	// gives the same href to page-content-item-text > p as page-content-item-title > h3 > a
	$(".page-content-item").each(function () {
		var givenhref = $(this).find(".page-content-item-title > h3 > a").attr("href");
		$(this).find(".page-content-item-text > p").wrapInner("<a href=" + givenhref + "></a>");
	});
};

function taggedProjectPageFunctionality() {
	console.log("This page uses taggedProjectPageFunctionality().");

	// this function is activated upon receiving a tagged url parameter on the project page.
	// it basically loads all posts and then deletes the ones that do not have the tag specified by user.
	var anyTags = getUrlParameter('tagged');

	if (typeof anyTags !== 'undefined' && anyTags !== '') {
		anyTags = anyTags.toLowerCase();
		$('.page-content-item').each(function () {
			var contentTags = [];
			$(this).find(".tag-button").each(function() {
				t = $(this).text();
				contentTags.push(t);
			});
    		if ($.inArray(anyTags, contentTags) > -1) {} // more than -1 means found in tags array, so do nothing
    			else {
    				$(this).remove();
    			}
    		});

		var contentItemCount = $('.page-content-item').length;

		if (contentItemCount > 0) {
			$('.page-content > .row').before("<p>Showing all posts tagged <strong>" + anyTags + "</strong>.</p><br>");
		}
		else {
			$('.page-content > .row').before("<p>There are no posts tagged <strong>" + anyTags + "</strong>. <a href='javascript:history.back()'>Click here to go back to previous page.</a></p><br>");
		}
	}
};




function getUrlParameter(sParam) {
	console.log("This page uses getUrlParameter().");
	
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