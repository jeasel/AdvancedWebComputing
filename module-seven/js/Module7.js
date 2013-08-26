$(document).ready(function(){
	$('#movie').keypress(function(event){
		if(event.which == 13){
			var searchmovies = $('#movie').val();
			if(searchmovies == ""){
				alert("Please input the required field.");
			}
			$(function(){
				$('#result1').html("");
				$('#result1').append('<p class="text-info">Search Result for: '+searchmovies+ '</p>');
				var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
				$.ajax({
					url: url,
					data: {
						q: searchmovies,
						apiKey: 's4g4bxznr29fucmhs5fvjx3u'
					},
					dataType: 'jsonp',
					success: showmovies
				});
				function showmovies(response){
					$('.MovieContainer').html("");
					for(i=0;i<response.movies.length;i++){
						var movie = response.movies[i];
						var synop = movie.synopsis;
						if(synop == ""){
							synop = '<h3 style="text-align: center;">No Available Synopsis</h3>';
							$('.MovieContainer').append('<div class="MovieHolder">'+'Year: '+movie.year+'</p>'+'<div class="Thumb">'+'<img src="' 
							+movie.posters.thumbnail+'"/>'+'</div>'+'<div class="Title">'+'<p class="MovieTitle">' 
							+movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>');
						
						}else{
							$('.MovieContainer').append('<div class="MovieHolder">'+'Year: '+movie.year+'</p>'+'<div class="Thumb">'+'<img src="' 
							+movie.posters.thumbnail+'"/>'+'</div>'+'<div class="Title">'+'<p class="MovieTitle">' 
							+movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>');
						
						}
					}
					var movieslength = response.movies.length;
						$('#result2').html("");
						$('#result2').append('<p class="text-info">Total number of results found: '+movieslength+'</p>');
				}
			});
				searchmovies = $('#movie').val("");
		}
	});
	$('#send').click(function(){
		var searchmovies = $('#movie').val();
		if(searchmovies == ""){
			alert("Please input the required field.");
		}
		$(function(){
			$('#result1').html("");
			$('#result1').append('<p class="text-info">Search Result for: '+searchmovies+'</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: searchmovies,
					apiKey: 's4g4bxznr29fucmhs5fvjx3u'
				},
				dataType: 'jsonp',
				success: showmovies
			});
			function showmmovies(response){
				$('.MovieContainer').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center;">No Available Synopsis</h3>';
						$('.MovieContainer').append('<div class="MovieHolder">'+'Year: '+movie.year+'</p>'+'<div class="Thumb">'+'<img src="' 
						+movie.posters.thumbnail+'"/>'+'</div>'+'<div class="Title">'+'<p class="MovieTitle">' 
						+movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>');
						
					}else {
						$('.MovieContainer').append('<div class="MovieHolder">'+'Year: '+movie.year+'</p>'+'<div class="Thumb">'+'<img src="' 
						+movie.posters.thumbnail+'"/>'+'</div>'+'<div class="Title">'+'<p class="MovieTitle">' 
						+movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>');
						
					}
				}
				var movieslength = response.movies.length;
				$('#result2').html("");
				$('#result2').append('<p class="text-info">Total number of results found: '+movieslength+'</p>');
			}
		});
			searchmovies = $('#movie').val("");
	});
});
