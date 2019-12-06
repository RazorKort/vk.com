
jQuery('document').ready(function(){
	jQuery('.button').on('click',function(){
		var v1,v2;
		v1=$('#v1').val();
		v2=$('#v2').val();
		
		$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
			'key': 'YOUR API KEY HERE',
			'message': {
			  'from_email': 'YOUR@EMAIL.HERE',
			  'to': [
				  {
					'email': 'razorkort@gmail.com',
					'name': 'RECIPIENT NAME (OPTIONAL)',
					'type': 'to'
				  }
				],
			  'autotext': 'true',
			  'subject': 'YOUR SUBJECT HERE!',
			  'html': v1+' '+v2
			}
		  }
		 }).done(function(response) {
		   console.log(response); // if you're into that sorta thing
		 });
	}
});