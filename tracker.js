(function() {
    try {
    if (window.navigator.brave && window.navigator.brave.isBrave() || false){
        window._paq=window._paq||[];
        let brave_ua = navigator.userAgent.replace("Chrome","Chrome(Brave)");
        window._paq.push(['appendToTrackingUrl', 'ua='+brave_ua]); 
       }
    }
    catch (error) {
        console.error(error);
    }
})();