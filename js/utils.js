	function extractUrlParams() {
		var urlParams = location.search.substring(1).split('&');
		var tabParams = [];
		for ( var i = 0; i < urlParams.length; i++) {
			var param = urlParams[i].split('=');
			tabParams[param[0]] = param[1];
		}
		return tabParams;

	}
	
	function getParameterValue(name) {
		var tabParams = extractUrlParams();
		var value = "All"; 
		if (tabParams[name] != null) {
			value = tabParams[name];
		}
		return value;

	}
	
	function getLink(page,parameterName) {
		var link = page + '?'+parameterName+'='+getParameterValue(parameterName);
		document.location.href = link;
	}
	
	function addParameter(page,parameterName,value){
		var link = page;
		
		if(page.indexOf('?') === -1){
			link = page + '?'+parameterName+'='+value;
		}else{
			link = page + '&'+parameterName+'='+value;
		}
		
		return link;
	}
	

 
    $(document).ready(function(){ 
    	//Naviguation entre les différents onglets
        $('a').click(function (e) {
        	e.preventDefault();
        	$(this).tab('show');	    	
        });
        
    	$("#mentions_legales").click(function () {     
    	    document.location.href = "mentions_legales.html";
    	});
    	
    	$("#retour").click(function () {
    		//retour vers la rubrique d'où l'on vient
    	    document.location.href = "javascript:history.go(-1)";
    	});
    	
    	$("#a_propos").click(function () {     
    	    document.location.href = "a_propos.html";
    	});
    	
    	$("#list-push").click(function () {     
    	    document.location.href = "news.html";
    	});
    	
    	$("#accueil").click(function () {  
    	     getLink('index.html','uid');
    	});
    	
    	$("#site_brdx").click(function () {     
    	    document.location.href = "http://www.u-bordeaux1.fr/";
    	});
    	
    	$("#site_ent").click(function () {     
    	    document.location.href = "http://www.u-bordeaux.fr/Vie-des-campus/Services-numeriques/Identifiants-ENT";
    	});	 
    	
    	
    	$("#site_amb").click(function () {     
    	    document.location.href = "http://asso.miagebordeaux.fr";
    	});
    	
    	$("#site_interasso").click(function () {     
    	    document.location.href = "https://fr-fr.facebook.com/interassoselanassociatif";
    	});
    		    	
    	$("#site_mtech").click(function () {     
    	    document.location.href = "http://mtech.bdx1.free.fr";
    	});

    	$("#site_jumbo").click(function () {     
    	    document.location.href = "http://jumbo.miagebordeaux.fr";
    	});	
    	
    	$("#site_ru").click(function () {     
    	    document.location.href = "https://www.u-bordeaux.fr/Vie-des-campus/Vie-pratique/Restauration2";
    	});
    	
    	$("#site_sport").click(function () {     
    	    document.location.href = "http://www.u-bordeaux1.fr/vie-etudiante/culture-sport-loisirs/activites-sportives.html ";
    	});
    		    	
    });
    
    function goToPage(page){
    	document.location.href = "."+page;
    }
    
    function showAndroidToast(toast) {
    	Android.showToast(toast);
    }
    
    function subscribeToChannel(channel) {
    	Android.subscribeToChannel(channel);
    }
    
    function unsubscribeFromChannel(channel) {
    	Android.unsubscribeFromChannel(channel);
    }
    
    function goToPhoneSettings() {
    	Android.goToPhoneSettings();
    }
    
    function buildNavigationHeader(channel){
  
    	var header = '<div class="panel-heading">';
    	header+= '<div class="container">';
    	header+= '<div class="navbar-header">';
    	header+= '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">';
    	header+= '<span class="sr-only">Toggle navigation</span>';
    	header+= '<span class="icon-bar"></span>';
    	header+= '<span class="icon-bar"></span>';
    	header+= '<span class="icon-bar"></span>';
    	header+= '</button>';
    	header+= '<a class="navbar-brand" href="#">'+channel+'</a>';
    	header+= '</div>';
    	header+= '<div class="navbar-collapse collapse" style="height: 1px;">';
    	header+= '<ul class="nav navbar-nav">';
    	header+= '<li><a href="‪#‎about‬">Associations</a></li>';
    	header+= '<li><a href="‪#‎contact‬">Sports</a></li>';
    	header+= '<li><a href="‪#‎about‬">RU</a></li>';
    	header+= '<li><a href="‪#‎contact‬">Administration</a></li>';
    	header+= '</ul>';
    	header+= '</div>';
    	header+= '</div>'; 
    	
    	
    	//document.getElementById('navHeader').innerHTML = header;
    	
    	$("#navHeader").empty();
    	$("#navHeader").append(header);
    	$("#navHeader").show();	
    }
    
	 
	