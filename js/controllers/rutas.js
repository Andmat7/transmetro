
render("rutas",{});



$("#rutas").on("pageshow", function( event ) {
    console.log($("#rutas .header").height());
    console.log($("#rutas .footer").height());
    
      $("#contenedor_recorridos").css("height",$(window).height()-($("#rutas .footer").height()+$("#rutas .header").height()+$("#enrutador").height()));
      });
