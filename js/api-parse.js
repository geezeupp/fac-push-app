var headers = {"X-Parse-Application-Id":"gn23tgrg2J5EYgYJJqUW7tvlqCRRbULZZjuCv1de", "X-Parse-REST-API-Key":"ZblCesxlIR6w5TI6IumInVUJrhLDTB19cC6xsTeF"};


//send notification to all users in category
function sendPush(){
	
	var title =  document.getElementById("title").value;
	var channel = $('#category option:selected').val();

	// Variable to store data:
	var pushData = '{ "channels": ["'+channel+'"], "data": {"alert": "'+title+'" }}' ;
	
		$.ajax({
				type: "POST",
				url: "https://api.parse.com/1/push",
				data: pushData,
				contentType: "application/json; charset=utf-8",
			    dataType: "json",
				headers:headers,
				success: function (data, status, jqXHR) {
						alert("Votre notification a été envoyée");
						savePushNotification(title,channel);
						 },
					 
				error: function (jqXHR, status) {            
							 
						}
				 });
		
}


function getAllNotificationsForChannel(channel){
	
	$.ajax({
		type: "GET",
		url: 'https://api.parse.com/1/classes/push?where={"channel":"'+channel+'"}',
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
			
			buildNotificationList(data);        
		},
			 
		error: function (jqXHR, status) {            
				alert('error');	 
				}
		 });
}


//Build list of notifications for channel
function buildNotificationList(data){
	$("#list-push").empty();
	for(var i in data.results){
		var objectID=data.results[i].objectId;
		var link=addParameter('news.html','objectID',objectID);
		var push = '<a href="'+link+'" rel="external" class="list-group-item"> <h4 class="list-group-item-heading">'+data.results[i].title+'</h4><span class="glyphicon glyphicon-chevron-right pull-right"></span><p class="list-group-item-text">'+data.results[i].message.substring(0,50)+'</p> </a>';
		$("#list-push").append(push);
	}	 
	$('#list-push').show();
}

function getFullMessage(objectID){
	$.ajax({
		type: "GET",
		url: 'https://api.parse.com/1/classes/push?where={"objectId":"'+objectID+'"}',
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
			
			buildFullMessage(data);        
		},
			 
		error: function (jqXHR, status) {            
				alert('error');	 
				}
		 });

}

function buildFullMessage(data){
	
	$("#full-message").empty();
	
	for(var i in data.results){
		var message = '<div class="panel-heading">';
		message+= '<h5 class = panel-Title>'+data.results[i].title+'</h5></div> ';
		message+='<div class="panel-body">'+data.results[i].message +'</div>';
		message+='<div class = panel-footer><center><strong>'+data.results[i].channel+'</strong></center></div></div>';		
		$("#full-message").append(message);
	}
	$('#full-message').show();
}

function subscribeOrUnsubscribeFromChannel(Id,channel){
	$.ajax({
		type: "GET",
		url: 'https://api.parse.com/1/installations/'+Id,
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		headers:headers,
		success: function (data, status, jqXHR) {
			buildCorrectButton(data,channel);
		},
			 
		error: function (jqXHR, status) {            
				alert('errorstats');	 
				}
		 });
	
}

function buildCorrectButton(data,channel){
	
	var button='<input type="button" class="btn btn-success" value="inscription" onClick="subscribeToChannel(\''+channel+'\')" />';
	var txt = '';
	switch (channel) {
	case "Associations":
		txt = '<h4>Inscrivez-vous à la rubrique "Association" pour recevoir des notifications associées aux animations associatives de l université de Bordeaux.Pour cela, il suffit d appuyer sur le bouton "S inscrire". </h4>';
		break;
	case "Sport":
		txt = '<h4>Inscrivez-vous à la rubrique "Sport" pour recevoir des notifications associées aux activités sportives de l université de Bordeaux.Pour cela, il suffit d appuyer sur le bouton "S inscrire". </h4>';
		break;
	case "RU":
		txt = '<h4>Inscrivez-vous à la rubrique "Restaurant Universitaire" pour recevoir des notifications associées aux menus proposés par les "resto U" et cafétariats de l université de Bordeaux.Pour cela, il suffit d appuyer sur le bouton "S inscrire". </h4>';
		break;
	case "Administration":
		txt = '<h4>Inscrivez-vous à la rubrique "Administration" pour recevoir des notifications associées au domaine administratif (emploi du temps, résultats examens) de l université de Bordeaux.Pour cela, il suffit d appuyer sur le bouton "S inscrire". </h4>';
		break;
	}
	if(data.channels != undefined){
		var channelsArray = data.channels;
		for (var i = 0; i < channelsArray.length; i++) {
		    if (channelsArray[i] == channel ){
		    	
		    	button='<input type="button" class="btn btn-danger" value="desinscription" onClick="unsubscribeFromChannel(\''+channel+'\')" />';
		    	
		    	switch (channel) {
		    	case "Associations":
		    		txt = '<h4>Vous avez la possibilité de vous désinscrire de la rubrique "Association" en appuyant sur le bouton "Se désinscrire".</h4>';
		    		break;
		    	case "Sport":
		    		txt = '<h4>Vous avez la possibilité de vous désinscrire de la rubrique "Sport" en appuyant sur le bouton "Se désinscrire".</h4>';
		    		break;
		    	case "RU":
		    		txt = '<h4>Vous avez la possibilité de vous désinscrire de la rubrique "Restaurant Universitaire" en appuyant sur le bouton "Se désinscrire".</h4>';
		    		break;
		    	case "Administration":
		    		txt = '<h4>Vous avez la possibilité de vous désinscrire de la rubrique "Administration" en appuyant sur le bouton "Se désinscrire".</h4>';
		    		break;
		    	}
		    	
		    	break;
		    }
		}
	}
	$("#txt-parametre").empty();
	$("#txt-parametre").append(txt);
	$("#txt-parametre").show();	
	
	$("#btn-parametre").empty();
	$("#btn-parametre").append(button);
	$("#btn-parametre").show();
	
}
