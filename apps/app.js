$(document).ready(function() {
	$(function() {
		$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data) {
			myData = data.Search;
			$.each(myData, function(index,value) {
			    console.log(value.Title);
			});
		})
	})
});