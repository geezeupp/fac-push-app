/*
 * Extraire les parametres du lien 
 */	
 function extractUrlParams() {
		var urlParams = location.search.substring(1).split('&');
		var tabParams = [];
		for ( var i = 0; i < urlParams.length; i++) {
			var param = urlParams[i].split('=');
			tabParams[param[0]] = param[1];
		}
		return tabParams;

	}

 /*
  * Recuperer la valeur d'un parametre  
  */
	function getParameterValue(name) {
		var tabParams = extractUrlParams();
		var value = "All"; 
		if (tabParams[name] != null) {
			value = tabParams[name];
		}
		return value;

	}
	
	/*
	 * Ajouter un parametre à un lien et naviguer vers ce lien
	 */
	function getLink(page,parameterName) {
		var link = page + '?'+parameterName+'='+getParameterValue(parameterName);
		document.location.href = link;
	}
	
	/*
	 * Construire le lien de la page: ajout de parametres
	 */
	function addParameter(page,parameterName,value){
		var link = page;
		
		if(page.indexOf('?') === -1){
			link = page + '?'+parameterName+'='+value;
		}else{
			link = page + '&'+parameterName+'='+value;
		}
		
		return link;
	}
	
	/*
	 * Trier le tableau de reponse par date
	 */
	function sortByDate(x,y) {
		return ((x.createdAt == y.createdAt) ? 0 : ((x.createdAt < y.createdAt) ? 1 : -1 ));
		}

	/*
	 * fonctions jquery pour la navigation. 
	 */
 
    $(document).ready(function(){ 
    	//Naviguation entre les diffÃ©rents onglets
        $('a').click(function (e) {
        	e.preventDefault();
        	$(this).tab('show');	    	
        });
        
    	$("#mentions_legales").click(function () {     
    	    document.location.href = "mentions_legales.html";
    	});
    	
    	$("#retour").click(function () {
    		//retour vers la rubrique d'oÃ¹ l'on vient
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
    
    /*
     * Aller à la page en parametre
     */
    function goToPage(page){
    	document.location.href = "."+page;
    }
    
   /********************************************************************
    * Fonctions Javascripts pour l'interface Android
    * Communication webApp - Application native Android
    **********************************************************************/
    
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
    
    
    /*
     * Construction de la navbar de l'application avec les sous menus
     */
    function buildNavigationHeader(channel){
  
    	var header = '<div class="container">';
    	header+= '<div class="navbar-header">';
    	header+= '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">';
    	header+= '<span class="sr-only">Toggle navigation</span>';
    	header+= '<span class="icon-bar"></span>';
    	header+= '<span class="icon-bar"></span>';
    	header+= '<span class="icon-bar"></span>';
    	header+= '</button>';
    	header+= '<a class="navbar-brand">'+channel+'</a>';
    	header+= '</div>';
    	header+= '<div class="navbar-collapse collapse" style="height: 1px;">';
    	header+= '<ul class="nav navbar-nav">';
    	header+= '<li><a onclick="return getLink(\'index.html\',\'uid\')">Accueil</a></li>';
    	header+= '<li><a onclick="return getLink(\'associations.html\',\'uid\')">Associations</a></li>';
    	header+= '<li><a onclick="return getLink(\'sports.html\',\'uid\')">Sports</a></li>';
    	header+= '<li><a onclick="return getLink(\'ru.html\',\'uid\')">RU</a></li>';
    	header+= '<li><a onclick="return getLink(\'administration.html\',\'uid\')">Administration</a></li>';
    	header+= '</ul>';
    	header+= '</div>';
    	header+= '</div>'; 
    
    	
    	$("#navHeader").empty();
    	$("#navHeader").append(header);
    	$("#navHeader").show();	
    }
    
	 
	