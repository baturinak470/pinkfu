document.addEventListener("DOMContentLoaded", function(){

  (function($, viewport) {
      var netweekAds = {

         is_active: false,
         ads_server_url: 'https://ads.netweek.it/www/delivery/asyncjs.php?_=1562594364907',
         activate: function() {
             if(netweekAds.is_active) {
                 return;
             }
             var script = document.createElement('script');
             script.async = 1;
             script.src = netweekAds.ads_server_url;
             document.getElementsByTagName('head')[0].append(script);
             netweekAds.is_active = true;
             return;
         },
         cleanScreenSize: function() {
             if( window.innerWidth < 768 ) {
                document.querySelectorAll("[data-revivedesktop=true]").forEach(function(el) {
                     el.parentNode.removeChild(el);
                });
             } else {
               document.querySelectorAll("[data-revivemobile=true]").forEach(function(el) {
                     el.parentNode.removeChild(el);
                });    
             }
         },
         checkConsents: function() {
           window.__cmp('getPublisherConsents', null, function(consents) {
             if (consents.standardPurposeConsents[1] && consents.standardPurposeConsents[3] && consents.standardPurposeConsents[5]) {
               netweekAds.activate();
             }
           });
         },
         run: function() {
            netweekAds.cleanScreenSize();
            if (typeof window.__cmp !== 'undefined') {
              netweekAds.checkConsents();
              window.__cmp('setConsentUiCallback', netweekAds.checkConsents);
            } else {
               netweekAds.activate();
            }
         }

     };

     netweekAds.run();

  })();

});
