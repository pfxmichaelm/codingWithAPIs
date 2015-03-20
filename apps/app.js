$(document).ready(function() {
	$(function() {
		$('#search-term').submit(function(event) {
			event.preventDefault();
			var searchTerm = $('#query').val();
			getRequest(searchTerm);
		});
	});

	function getRequest(searchTerm) {
		var params = {
			s: searchTerm,
			r: 'json'
		};
		url = 'http://www.omdbapi.com';

        $.getJSON(url, params, function(data) {
	        showResults(data.Search);
	    });
	}

	function showResults(results) {
		var html = "";
		$.each(results, function(index,value) {
			html += '<div>' + value.Title + '<div>';
			console.log(value.Title);
		});
		$('#search-results').html(html);
	}
});