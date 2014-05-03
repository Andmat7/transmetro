render("listado_estaciones",{});



$("#listado_estaciones").on("pageshow", function( event ) {
    console.log($("#listado_estaciones .header").height());
    console.log($("#listado_estaciones .footer").height());
    
    $("#ul_listado_estaciones").css("height",$(window).height()-($("#listado_estaciones .footer").height()+$("#listado_estaciones .header").height()+$("#listado_estaciones .select_horizontal").height()+$("#listado_estaciones .ui-filterable").height() ));
});