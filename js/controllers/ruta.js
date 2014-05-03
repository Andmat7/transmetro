render("ruta",{});


$("#ruta").on("pageshow", function( event ) {
    console.log($("#ruta .header").height());
    console.log($("#ruta .footer").height());
    
        $("#ul_ruta").css("height",$(window).height()-($("#ruta .footer").height()+$("#ruta .header").height()+$("#ruta .select_horizontal").height()));
      });