(function() {
    try {
    if (window.navigator.brave && window.navigator.brave.isBrave() || false){
        let brave_ua = navigator.userAgent.replace("Chrome","Chrome(Brave)");
        _paq.push(['appendToTrackingUrl', 'ua='+brave_ua]); 
       }
    }
    catch (error) {
        console.error(error);
    }
})();