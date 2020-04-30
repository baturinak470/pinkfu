var elem = document.createElement('script');
elem.src = 'https://quantcast.mgr.consensu.org/cmp.js';
elem.async = true;
elem.type = "text/javascript";
var scpt = document.getElementsByTagName('script')[0];
scpt.parentNode.insertBefore(elem, scpt);
(function () {
    var gdprAppliesGlobally = false;
    function addFrame() {
        if (!window.frames['__cmpLocator']) {
            if (document.body) {
                var body = document.body,
                        iframe = document.createElement('iframe');
                iframe.style = 'display:none';
                iframe.name = '__cmpLocator';
                body.appendChild(iframe);
            } else {
                // In the case where this stub is located in the head,
                // this allows us to inject the iframe more quickly than
                // relying on DOMContentLoaded or other events.
                setTimeout(addFrame, 5);
            }
        }
    }
    addFrame();
    function cmpMsgHandler(event) {
        var msgIsString = typeof event.data === "string";
        var json;
        if (msgIsString) {
            json = event.data.indexOf("__cmpCall") != -1 ? JSON.parse(event.data) : {};
        } else {
            json = event.data;
        }
        if (json.__cmpCall) {
            var i = json.__cmpCall;
            window.__cmp(i.command, i.parameter, function (retValue, success) {
                var returnMsg = {"__cmpReturn": {
                        "returnValue": retValue,
                        "success": success,
                        "callId": i.callId
                    }};
                event.source.postMessage(msgIsString ?
                        JSON.stringify(returnMsg) : returnMsg, '*');
            });
        }
    }
    window.__cmp = function (c) {
        var b = arguments;
        if (!b.length) {
            return __cmp.a;
        }
        else if (b[0] === 'ping') {
            b[2]({"gdprAppliesGlobally": gdprAppliesGlobally,
                "cmpLoaded": false}, true);
        } else if (c == '__cmp')
            return false;
        else {
            if (typeof __cmp.a === 'undefined') {
                __cmp.a = [];
            }
            __cmp.a.push([].slice.apply(b));
        }
    }
    window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
    window.__cmp.msgHandler = cmpMsgHandler;
    if (window.addEventListener) {
        window.addEventListener('message', cmpMsgHandler, false);
    }
    else {
        window.attachEvent('onmessage', cmpMsgHandler);
    }
})();


if( 
    window.location.href !== netweekCmpOpts.site_cookie_url && 
    window.location.href !== netweekCmpOpts.site_privacy_url       
) {
    window.__cmp('init', {
        'Consent Scope': 'service',
        'Default Value for Toggles': 'on',
        'Display UI': 'always',
        'Initial Screen Body Text': 'Noi e i nostri partner utilizziamo, sul nostro sito, tecnologie come i cookie per personalizzare contenuti e annunci, fornire funzionalità per social media e analizzare il nostro traffico. Facendo clic di seguito si acconsente all&#039;utilizzo di questa tecnologia. Puoi cambiare idea e modificare le tue scelte sul consenso in qualsiasi momento ritornando su questo sito. <a href="' + netweekCmpOpts.site_privacy_url + '" target="_blank">Privacy</a> e <a href="' + netweekCmpOpts.site_cookie_url + '" target="_blank">Cookie Policy</a>',
        'Initial Screen Title Text': 'Il rispetto della tua privacy è la nostra priorità',
        'Initial Screen Reject Button Text': 'Non Accetto',
        'Initial Screen Accept Button Text': 'Accetto',
        'Initial Screen Purpose Link Text': 'Mostra tutte le finalità di utilizzo',
        'Language': 'it',
        'Min Days Between UI Displays': 30,
        'Non-Consent Display Frequency': 1,
        'No Option': false,
        'Purpose Screen Title Text': 'Il rispetto della tua privacy è la nostra priorità',
        'Purpose Screen Header Title Text': 'Impostazioni sulla privacy',
        'Purpose Screen Body Text': 'È possibile impostare le tue preferenze sul consenso e scegliere come i tuoi dati vengono utilizzati in relazione alle diverse finalità riportate di seguito. Inoltre, potrai configurare le impostazioni per il nostro sito indipendentemente da quelle per i nostri partner. Troverai una descrizione per ciasuna delle finalità di utilizzo, in modo che tu sia a conoscenza di come noi e i nostri partner utilizziamo i tuoi dati.',
        'Purpose Screen Enable All Button Text': 'Abilita consenso per tutti gli usi previsti',
        'Purpose Screen Vendor Link Text': 'Visualizza la lista completa dei partner',
        'Purpose Screen Cancel Button Text': 'Annullare',
        'Purpose Screen Save and Exit Button Text': 'Salva ed Esci',
        'UI Layout': 'banner',
        'Vendor Screen Title Text': 'Il rispetto della tua privacy è la nostra priorità',
        'Vendor Screen Body Text': 'È possibile impostare le preferenze sul consenso per ogni singola società partner riportata di seguito. Per facilitare la tua decisione, puoi espandere l&#039;elenco di ciascun partner e visualizzare per quali finalità utilizza i dati. In alcuni casi, le società possono affermare che utilizzano i tuoi dati senza chiedere il consenso, in quanto esiste un legittimo interesse. Puoi fare clic sulle loro politiche sulla privacy per ottenere maggiori informazioni e per revocare il consenso.',
        'Vendor Screen Accept All Button Text': 'Accettare tutto',
        'Vendor Screen Reject All Button Text': 'Rifiutare tutto',
        'Vendor Screen Purposes Link Text': 'Ritorna alle finalità di utilizzo',
        'Vendor Screen Cancel Button Text': 'Annullare',
        'Vendor Screen Save and Exit Button Text': 'Salva e chiudi',
        'Publisher Name': netweekCmpOpts.site_name,
        'Publisher Logo': netweekCmpOpts.site_logo ? netweekCmpOpts.site_logo : '',
        'Post Consent Page': netweekCmpOpts.site_home_url,
        'Publisher Purpose IDs': [1, 3, 5],
        'Publisher Purpose Legitimate Interest IDs': [1, 3, 5],
    });
}