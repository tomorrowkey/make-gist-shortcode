chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        $buttonGroups =  $(".button-group");

        for(var i = 0;i < $buttonGroups.length; i++) {
            var gistId = location.href.replace(/https:\/\/gist.github.com\/.+\/([0-9a-f]+).+/g, "$1");
            var fileName = $($(".file-name")[i]).text();

            var $a = $("<a />");
            $a.addClass("file-actions-button tooltipped downwards permalink");
            $a.attr("original-title", "Make a shortcode for Wordpress");
            $a.attr("href", "javascript:void(0)");
            $a.attr("gist-id", gistId);
            $a.attr("file-name", fileName);
            $a.append($("<span />").addClass("octicon octicon-clippy"));
            $a.click(function(){
                var $this = $(this);
                var gistId = $this.attr("gist-id");
                var fileName = $this.attr("file-name");
                var shortcode = '[gist id="' + gistId + '" file="' + fileName + '"]';
                
                prompt("Shortcode for Wordpress", shortcode);
            });
            
            var $li = $("<li />").append($a);
            
            var $buttonGroup = $($buttonGroups[i]);
            $buttonGroup.prepend($li);
        }
    }
	}, 10);
});
