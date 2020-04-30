var _comscore = _comscore || [];
document.addEventListener("DOMContentLoaded", function() {

  (function($, viewport) {
    var nkComscore = {
      pushData: function(cs_ucfr) {
        var data = {
          c1: "2",
          c2: "22335742",
          cs_ucfr: cs_ucfr
        }
        _comscore.push(data);
        nkComscore.addScripts();
      },

      addScripts: function() {
        (function() {
          var s = document.createElement("script"),
            el = document.getElementsByTagName("script")[0];
          s.async = true;
          s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
          el.parentNode.insertBefore(s, el);
        })();
      },

      run: function() {

        if (typeof window.__cmp !== 'undefined' && document.cookie.match(/^(.*;)?\s*euconsent\s*=\s*[^;]+(.*)?$/) !== null ) {
          window.__cmp('ping', null, function(pingRes, pingSuccess) {
            window.__cmp('getVendorConsents', [77], function(consents, success) {
                 if( consents.vendorConsents.hasOwnProperty('77') && success) {
                     if(consents.vendorConsents[77]) {
                       nkComscore.pushData('1');
                     } else {
                       nkComscore.pushData('0');
                     }
                 } else {
                     nkComscore.pushData('');
                 }
              });
          });
        } else {
          nkComscore.pushData('');
        }
      }

    };

    nkComscore.run();

  })();

});
