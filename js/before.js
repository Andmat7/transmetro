var connectionStatus;

$(function() {
    connectionStatus = navigator.onLine;
    if(connectionStatus){
        var linkElem = document.createElement('link');
        linkElem.rel = 'stylesheet';
        linkElem.type = 'text/css';
        linkElem.href = 'http://code.google.com/apis/maps/documentation/javascript/examples/default.css';
        document.getElementsByTagName('head')[0].appendChild(linkElem);
        $.getScript("http://maps.googleapis.com/maps/api/js?sensor=false");
        

    }
});
