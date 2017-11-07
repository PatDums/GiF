		function ajouter(){
			var produit = document.getElementById("prod").value;
			var quantite = document.getElementById("qts").value;
			localStorage.setItem(produit, quantite);
			document.getElementById("qts").value="";
			afficher(); /* F5 auto */
		}
		function modifier(){
			var produit = document.getElementById("prod").value;
			document.getElementById("qts").value = localStorage.getItem(produit);
			afficher();
		}
		function supprimer(){
			var produit = document.getElementById("prod").value;
			localStorage.removeItem(produit);
			document.getElementById("prod").value="";
			afficher();
		}
		
		function doClear(){
			localStorage.clear();
			afficher();
		}
		function afficher(){
			var key ="";
			var tabLine = "<tr class=\"first\"><td><b> Produit </b></td><td><b> Quantité </b></td></tr>";
			var paires = tabLine;
			var i=0;
			for (i; i<=localStorage.length-1; i++){
				key=localStorage.key(i);
				paires += "<tr><td>"+key+"</td>\n<td>"+localStorage.getItem(key)+"</td></tr>\n";
 
		}
		if(paires == tabLine){
			paires += "<tr><td><i>Vide</i></td><td><i>Vide</i></td></tr>";
		}
			document.getElementById('paires').innerHTML = paires;
		}
		

