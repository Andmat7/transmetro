function myLocation(){







}

var response;
$( document ).on("click", "#searchRoute [data-role='listview'] li", function() {


	$(this).find("a").css("background-color","#c32222");
	$(this).find("a").css("text-shadow","none");
	$(this).find("a").css("color","white");

	$(this).parent().find("li").addClass("ui-screen-hidden").removeClass("ui-first-child ui-last-child");
	$(this).removeClass("ui-screen-hidden").addClass("ui-first-child ui-last-child");




});



$( document ).on("click", "#route_map", function() {
	$(".mapRoute").html('<div id="B1" class="field field-name-field-mapa field-type-text-long field-label-hidden">'+
					'<div class="field-items">'+
						'<div class="field-item even">'+
							'<iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=215933424098948531395.0004d347b8f019d2726cd&amp;hl=es&amp;ie=UTF8&amp;t=m&amp;ll=10.946624,-74.789007&amp;spn=0.081205,0.023484&amp;output=embed">'+
							'</iframe>'+
						'</div>'+
					'</div>'+
				'</div>')



});


$( document ).on("click", "#tourist_map", function() {
	
	$(".mapRoute").html('<img width="100%"  src="images/mapaTourist.png" alt="">');
	



});

function selectec_destiny(){

	

		$(".destiny ul li:nth-child(9) a").css("background-color","#c32222");
	$(".destiny ul li:nth-child(9) a").css("text-shadow","none");
	$(".destiny ul li:nth-child(9) a").css("color","white");
	$(".destiny ul li:nth-child(9)").removeClass("ui-screen-hidden").addClass("ui-first-child ui-last-child");


}





$( document ).on( "pageshow", "#routes", function() {






		var xmlhttp;
         xmlhttp = new XMLHttpRequest();
        var url = "http://servicedatosabiertoscolombia.cloudapp.net/v1/Alcaldia_de_barranquilla/routes?$format=json";
        
        xmlhttp.open('GET',url,true);
        xmlhttp.send(null);
        xmlhttp.onreadystatechange = function() {

               if (xmlhttp.readyState == 4 && !response) {
                  if ( xmlhttp.status == 200) {
                  	response = jQuery.parseJSON(xmlhttp.responseText);
                  	console.log("response");
                  	$("#routesContainer ").html('<h3 style="color:black">Rutas del Sistema Transmetro</h3><ul data-role="listview" data-inset="true"></ul>');

                  	for (var i = response.d.length - 1; i >= 0; i--) {
                  		

                  		$("#routesContainer ul").append('<li routeurl="'+response.d[i].routeurl+'" routeshortname="'+response.d[i].routeshortname+'"   routelongname="'+response.d[i].routelongname+'" onclick="carryData(this)"  ><a href="#"><img src=""   style=" width:16px;height: 16px; background-color:#'+
                  		response.d[i].routecolor+
                  		'" class="ui-li-icon ui-corner-none">'+response.d[i].routelongname+'</a></li>');
                  	};
                  	$("#routesContainer ul").listview();




                       
                 }
                   
              }
        };

});


function carryData(element){
	console.log("element");

	$("#specificRoute [data-role='content'] #routeComplete").load($(element).attr('routeurl')+" .field-name-field-mapa");
	$("#routeInfo").html("<h3 style='color:black;!important'>"+$(element).attr('routelongname')+"</h3><h4 style='color:black;!important'> --"+$(element).attr('routeshortname')+"</h4>")
	$("#specificRoute [data-role='content'] #namesStation").load($(element).attr('routeurl')+" .field-name-field-estaciones");
	
	console.log("element");

	$("#namesStation a").each(function(key,value){
		var url=$(value).attr("href");
		$(value).attr("urlStation",url);

		
		



	});


	changePage("#specificRoute");

}


$( document ).on("click", "#namesStation a", function() {
	
	this.href = 'javascript:'+console.log('something has stopped the link');


	



});





$( document ).on("change", "#theStationSelector", function() {
	
	var url=this.value;

	$("#theStationMap").load("http://www.transmetro.gov.co/estacion/"+url+" .field-name-field-mapa");
	$("#horarioStation").html(" ");
           $("#rutasStation").html(" ");

	switch( url ) {
      case 'portal-de-soledad':
           horarionormal='<div class="field field-name-field-horario-normal field-type-text field-label-inline clearfix"><div class="field-label">Horario de Lunes a Sábado:&nbsp;</div><div class="field-items"><div class="field-item even">5:00 am - 10:00 pm</div></div></div>';
           horariofestivo='<div class="field field-name-field-horario-festivos field-type-text field-label-inline clearfix"><div class="field-label">Domingos y Festivos:&nbsp;</div><div class="field-items"><div class="field-item even">6:00 am - 9:30 pm</div></div></div>';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a3-2-soledad-2000">A3-2 Soledad 2000</a></div><div class="field-item odd"><a href="/ruta/a3-3-manuela-beltran">A3-3 Manuela Beltrán</a></div><div class="field-item even"><a href="/ruta/a3-4-villa-sol">A3-4 Villa Sol</a></div><div class="field-item odd"><a href="/ruta/a5-3-la-central">A5-3 La Central</a></div><div class="field-item even"><a href="/ruta/r10">R10</a></div><div class="field-item odd"><a href="/ruta/s10">S10</a></div></div></div>';
           break;
      case 'esthercita-forero':
           horarionormal='<div class="field field-name-field-horario-normal field-type-text field-label-inline clearfix"><div class="field-label">Horario de Lunes a Sábado:&nbsp;</div><div class="field-items"><div class="field-item even">5:00 am - 10:00 pm</div></div></div>';
           horariofestivo='<div class="field field-name-field-horario-festivos field-type-text field-label-inline clearfix"><div class="field-label">Domingos y Festivos:&nbsp;</div><div class="field-items"><div class="field-item even">6:00 am - 9:30 pm</div></div></div>';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/r2">R2</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/b2">B2</a></div><div class="field-item even"><a href="/ruta/r30-suspendida-indefinidamente">R30 (suspendida indefinidamente)</a></div><div class="field-item odd"><a href="/ruta/h30-suspendida-indefinidamente">H30 (suspendida indefinidamente)</a></div></div></div>';
           break;
      case 'alfredo-correa-de-andreis':
           horarionormal='<div class="field field-name-field-horario-normal field-type-text field-label-inline clearfix"><div class="field-label">Horario de Lunes a Sábado:&nbsp;</div><div class="field-items"><div class="field-item even">5:00 am - 10:00 pm</div></div></div>';
           horariofestivo='<div class="field field-name-field-horario-festivos field-type-text field-label-inline clearfix"><div class="field-label">Domingos y Festivos:&nbsp;</div><div class="field-items"><div class="field-item even">6:00 am - 9:30 pm</div></div></div>';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/r2">R2</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/b2">B2</a></div><div class="field-item even"><a href="/ruta/a7-5-boston-temporalmente-suspendida">A7-5 Boston (temporalmente suspendida)</a></div><div class="field-item odd"><a href="/ruta/r10">R10</a></div><div class="field-item even"><a href="/ruta/s10">S10</a></div></div></div>';
           break;
      case 'la-catedral':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/r2">R2</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/b2">B2</a></div><div class="field-item even"><a href="/ruta/a8-3-prado">A8-3 Prado</a></div><div class="field-item odd"><a href="/ruta/a8-4-coliseo-temporalmente-suspendida">A8-4 Coliseo (temporalmente suspendida)</a></div><div class="field-item even"><a href="/ruta/r10">R10</a></div><div class="field-item odd"><a href="/ruta/s10">S10</a></div><div class="field-item even"><a href="/ruta/r30-suspendida-indefinidamente">R30 (suspendida indefinidamente)</a></div><div class="field-item odd"><a href="/ruta/h30-suspendida-indefinidamente">H30 (suspendida indefinidamente)</a></div></div></div>';
           break;
      case 'barrio-abajo':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/b1">B1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/r2">R2</a></div><div class="field-item odd"><a href="/ruta/b2">B2</a></div><div class="field-item even"><a href="/ruta/a8-3-prado">A8-3 Prado</a></div><div class="field-item odd"><a href="/ruta/a8-4-coliseo-temporalmente-suspendida">A8-4 Coliseo (temporalmente suspendida)</a></div></div></div>';
           break;
      case 'parque-cultural-del-caribe':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/b2">B2</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/r2">R2</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a8-3-prado">A8-3 Prado</a></div><div class="field-item odd"><a href="/ruta/a8-4-coliseo-temporalmente-suspendida">A8-4 Coliseo (temporalmente suspendida)</a></div></div></div>';
           break;
      case 'la-arenosa':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a0-1-centro">A0-1 Centro</a></div><div class="field-item odd"><a href="/ruta/r10">R10</a></div><div class="field-item even"><a href="/ruta/s10">S10</a></div></div></div>';
           break;
      case 'chiquinquira':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/r30-suspendida-indefinidamente">R30 (suspendida indefinidamente)</a></div><div class="field-item odd"><a href="/ruta/h30-suspendida-indefinidamente">H30 (suspendida indefinidamente)</a></div></div></div>';
           break;
      case 'atlantico':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a7-4-los-andes">A7-4 Los Andes</a></div><div class="field-item odd"><a href="/ruta/r10">R10</a></div><div class="field-item even"><a href="/ruta/s10">S10</a></div></div></div>';
           break;
      case 'la-veintiuna':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a6-1-cordialidad-temporalmente-suspendida">A6-1 Cordialidad (temporalmente suspendida)</a></div><div class="field-item odd"><a href="/ruta/r30-suspendida-indefinidamente">R30 (suspendida indefinidamente)</a></div><div class="field-item even"><a href="/ruta/h30-suspendida-indefinidamente">H30 (suspendida indefinidamente)</a></div></div></div>';
           break;
      case 'la-catorce':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/r30-suspendida-indefinidamente">R30 (suspendida indefinidamente)</a></div><div class="field-item odd"><a href="/ruta/h30-suspendida-indefinidamente">H30 (suspendida indefinidamente)</a></div></div></div>';
           break;
      case 'la-ocho':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a1-2-las-palmas">A1-2 Las Palmas</a></div><div class="field-item odd"><a href="/ruta/r10">R10</a></div><div class="field-item even"><a href="/ruta/s10">S10</a></div></div></div>';
           break;
      case 'buenos-aires':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/r30-suspendida-indefinidamente">R30 (suspendida indefinidamente)</a></div><div class="field-item odd"><a href="/ruta/h30-suspendida-indefinidamente">H30 (suspendida indefinidamente)</a></div></div></div>';
           break;
      case 'joaquin-barrios-polo':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a2-1-hipodromo">A2-1 Hipódromo</a></div><div class="field-item odd"><a href="/ruta/a1-3-galan">A1-3 Galán</a></div><div class="field-item even"><a href="/ruta/a6-6-ciudadela">A6-6 Ciudadela </a></div><div class="field-item odd"><a href="/ruta/r10">R10</a></div><div class="field-item even"><a href="/ruta/s10">S10</a></div></div></div>';
           break;
      case 'pedro-ramaya':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div><div class="field-item even"><a href="/ruta/a5-1-los-robles">A5-1 Los Robles</a></div></div></div>';
           break;
      case 'pacho-galan':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/b1">B1</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/s2">S2</a></div></div></div>';
           break;
      case 'joe-arroyo':
           horarionormal=' ';
           horariofestivo=' ';
           rutas='<div class="field field-name-field-rutas field-type-node-reference field-label-above"><div class="field-label">Rutas:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/ruta/r1">R1</a></div><div class="field-item odd"><a href="/ruta/r2">R2</a></div><div class="field-item even"><a href="/ruta/s1">S1</a></div><div class="field-item odd"><a href="/ruta/b2">B2</a></div><div class="field-item even"><a href="/ruta/s2">S2</a></div><div class="field-item odd"><a href="/ruta/a7-1-miramar">A7-1 Miramar</a></div><div class="field-item even"><a href="/ruta/a7-4-los-andes">A7-4 Los Andes</a></div><div class="field-item odd"><a href="/ruta/a8-1-paraiso">A8-1 Paraíso</a></div><div class="field-item even"><a href="/ruta/a8-2-40">A8-2 Vía 40</a></div><div class="field-item odd"><a href="/ruta/a9-2-la-playa-temporalmente-suspendida">A9-2 La Playa (temporalmente suspendida)</a></div><div class="field-item even"><a href="/ruta/a9-3-buenavista">A9-3 Buenavista</a></div><div class="field-item odd"><a href="/ruta/a9-4-villa-santos">A9-4 Villa Santos </a></div><div class="field-item even"><a href="/ruta/r10">R10</a></div><div class="field-item odd"><a href="/ruta/s10">S10</a></div><div class="field-item even"><a href="/ruta/r30-suspendida-indefinidamente">R30 (suspendida indefinidamente)</a></div><div class="field-item odd"><a href="/ruta/h30-suspendida-indefinidamente">H30 (suspendida indefinidamente)</a></div></div></div>';
           break;
      default:
           ;
           break;
}

           $("#horarioStation").html("<h4>Horarios:</h4><br>"+horarionormal);
           $("#horarioStation").append(horariofestivo+"<br>");
           $("#rutasStation").html(rutas);
           





});