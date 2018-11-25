
	var produits={
				123:{"image":"img/prod1.jpg" ,
						"Nom":"créme pied",
						"description":"produit de pied" ,
						"Prix":"19.900",
						},
				4567:
						{"image":"img/prod2.jpg" ,
						"Nom":"créme visage",
						"description":"produit de visage" ,
						"Prix":"199.900",
						},
				7890:
						{"image":"img/prod3.jpg" ,
						"Nom":"créme main",
						"description":"produit de main" ,
						"Prix":"20.900",
						}
				};
		


function exist(code){

	return(produits.hasOwnProperty(code));


}



function verif()
{

	var m="";
	var code=document.getElementById('code').value;
	if( !exist(code)){

m='<div class="alert alert-danger" role="alert"><b>Invalid BarCode !</b></div>';

	}else{
		


		m='<div class="card" style="width: 18rem;"><img class="card-img-top" src="'+produits[code]["image"]+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+produits[code]["Nom"]+'</h5><p class="card-text"> <b><font color="red" size="16px">'+produits[code]["Prix"]+' DT</font></b></div></div>';

	}

	document.getElementById("affiche").innerHTML=m;

/*
	

	
 		document.getElementById("remplir").getElementsByTagName('p')[0].innerHTML="Image :"+"<img src="+produits[code]["image"]+">";
		document.getElementById("remplir").getElementsByTagName('p')[1].innerHTML="Nom :"+produits[code]["Nom"];
		document.getElementById("remplir").getElementsByTagName('p')[2].innerHTML="Descritption :"+produits[code]["description"];
		document.getElementById("remplir").getElementsByTagName('p')[3].innerHTML="Prix : "+produits[code]["Prix"];
		*/
} 

