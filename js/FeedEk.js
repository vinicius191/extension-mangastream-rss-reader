/*
* FeedEk jQuery RSS/ATOM Feed Plugin v1.1.2
* http://jquery-plugins.net/FeedEk/FeedEk.html
* Author : Engin KIZIL 
* http://www.enginkizil.com
*
*
* Edited by Vinicius (https://twitter.com/vinicius191)
*/
(function (e) {
	e.fn.FeedEk = function (t) { 
		var n = { 
			FeedUrl: "http://rss.cnn.com/rss/edition.rss", MaxCount: 5, ShowDesc: true, ShowPubDate: true, CharacterLimit: 0, TitleLinkTarget: "_blank" 
		};

		if (t) { 
			e.extend(n, t) 
		} 

		var r = e(this).attr("id");
		var i;
		//e("#" + r).empty().append('<div style="padding:3px;"><img src="images/loader.gif" /></div>');
		
		e.ajax({
			url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + n.MaxCount + "&output=json&q=" + encodeURIComponent(n.FeedUrl) + "&hl=en&callback=?", dataType: "json", 
			success: function (t) {
				e("#" + r).empty();
				var s = "";
				var image = "";
				e.each(t.responseData.feed.entries, function (e, t) {
					if(t.title.replace(/\d+/g, '') == 'Naruto ') {
						image = '<div style="float: left;padding-right: 10px;"><img width=50px; height=50px; src="images/naruto.jpg"></img></div>';
					} else if(t.title.replace(/\d+/g, '') == 'One Piece ') {
						image = '<div style="float: left;padding-right: 10px;"><img width=50px; height=50px; src="images/one_piece.jpg"></img></div>';
					} else if(t.title.replace(/\d+/g, '') == 'Bleach ') {
						image = '<div style="float: left;padding-right: 10px;"><img width=50px; height=50px; src="images/bleach.png"></img></div>';
					} else if(t.title.replace(/\d+/g, '') == 'Fairy Tail ') {
						image = '<div style="float: left;padding-right: 10px;"><img width=50px; height=50px; src="images/fairy_tail.jpg"></img></div>';
					} else {
						image = '<div style="float: left;padding-right: 10px;"><img width=50px; height=50px; src="images/manga.jpg"></img></div>';
					}

					s += '<li>' + image + '<div class="itemTitle"><a href="' + t.link + '" target="' + n.TitleLinkTarget + '" >' + t.title + "</a></div>"; 
					if (n.ShowPubDate) { 
						i = new Date(t.publishedDate); 
						s += '<div class="itemDate">' + i.toLocaleDateString() + "</div>"
					} 
					
					if (n.ShowDesc) { 
						if (n.DescCharacterLimit > 0 && t.content.length > n.DescCharacterLimit) { 
							s += '<div class="itemContent">' + t.content.substr(0, n.DescCharacterLimit) + "...</div>" 
						} else {
							s += '<div class="itemContent">' + t.content + "</div>" 
						} 
					} 
				});
				showLoader('hide');
				e(".container #divRss").
				append('<ul class="feedEkList">' + s + "</ul>").
				hide().
				slideDown(850);
			} 
		}) 
	} 
})(jQuery)
