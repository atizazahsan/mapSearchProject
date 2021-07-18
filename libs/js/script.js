
$('#btn').click(function() {

	$.ajax({
		url: "libs/php/getdata.php",
		type: 'GET',
		dataType: 'json',
		data: {
			lat: $('#lat').val(),
			lng: $('#lang').val()
		},
		message : alert("Fetching......") ,
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {
				// Code Here
			}
		
		},
		error: function(jqXHR, status, error) {
					// error code here
			}
	}); 

});
	

	

	