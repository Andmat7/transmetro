function changePage(page){

  if(navigator.userAgent.match(/OS/i) || navigator.userAgent.match(/Android/i)){



    $.mobile.changePage(page);
  }else{
   window.location.href = page;
 }
}

function customAlert(message)
{
  if(navigator.userAgent.match(/OS/i) || navigator.userAgent.match(/Android/i)){

    navigator.notification.vibrate(1000);

    function alertDismissed() {
    }

    navigator.notification.alert(message,
      alertDismissed,
      'Alerta Golombiao',
      'Cerrar'
      );

  }else{

    alert(message);
  }
}


var render=function(tmpl_name, tmpl_data) {

  if ( !render.tmpl_cache ) {
    render.tmpl_cache = {};
  }

  if ( ! render.tmpl_cache[tmpl_name] ) {

    var tmpl_dir = './static/templates';
    var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

    var tmpl_string;
    $.ajax({
      url: tmpl_url,
      method: 'GET',
      async: false,
      success: function(data) {

        tmpl_string = data;
      }
    });
    console.log('tmpl_string');
    render.tmpl_cache[tmpl_name] = _.template(tmpl_string);

  }
  console.log(render.tmpl_cache[tmpl_name]);
  $("#"+tmpl_name).html(render.tmpl_cache[tmpl_name](tmpl_data));
  $("#"+tmpl_name).trigger('create');
  $("#"+tmpl_name+" .select_horizontal .ui-radio").off().on('click',
    function(){
      var view=$(this).find("input").attr("ref");
      $("#"+tmpl_name+" .view").hide();
      $("#"+tmpl_name+" .view."+view).show();


          }
    );
};







jQuery( document).on( "pagebeforechange", function( event,data) {
  $page=$(data.toPage[0]);
  var nameScript=data.toPage[0].id;
  if (nameScript) {
    $.getScript("js/controllers/"+nameScript+".js");
  }

}
);

