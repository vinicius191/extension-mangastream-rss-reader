window.onload = function() {

    setTimeout(function() {
        getRssResults();
    }, 1000);
}

function getRssResults() {
	$('.container #divRss').FeedEk({
	  FeedUrl: 'http://feeds.feedburner.com/mstream',
	  MaxCount: 7
	});
}

function showLoader(data) {
	if(data == "show") {
		//$(".container").prepend('<img class="loader" src="images/loader.gif">');
	} else {
		$(".container img:first").fadeOut("fast").remove();
	}
}