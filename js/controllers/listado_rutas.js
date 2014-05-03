render("listado_rutas",{});



$("#listado_rutas").on("pageshow", function( event ) {
    console.log($("#listado_rutas .header").height());
    console.log($("#listado_rutas .footer").height());
    
        $("#ul_listado_rutas").css("height",$(window).height()-($("#listado_rutas .footer").height()+$("#listado_rutas .header").height()+$("#listado_rutas .select_horizontal").height()));
      });