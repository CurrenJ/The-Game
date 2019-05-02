$(function() {
    function loadOption(option){
		$("#text").empty();
		$("#img").empty();
		$("#buttons1").empty();
		$("#buttons2").empty();
		
		var json = $.getJSON("paths/" + option, function(data) {
			$("#text").append("<p>" + data.text[0] + "</p>");
			$("#text p").css("font-size", data.text[1]);
			
			var i = "<img src=\"" + data.image[0] + "\">";
			if(data.image[0] !== ""){
			$("#img").append(i);
			$("#img img").css("width", data.image[1]);
			}
			
			$.each(data.options1, function( index, value ) {
				var b = "<button type=\"button\">" + value.text + "</button>";
				$(b).appendTo("#buttons1").click(function (){
					loadOption(value.link);
				});
			});
			
			$.each(data.options2, function( index, value ) {
				var b = "<button type=\"button\">" + value.text + "</button>";
				$("#buttons2").append(b).click(function (){
					loadOption(value.link);
				});
			});
			
		});
		
		$.getJSON("test.json", function(json) {
		console.log(json); // this will show the info it in firebug console
		});
	}
	
	loadOption("opt1.json");
});

