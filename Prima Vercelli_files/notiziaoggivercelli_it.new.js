window.optiload = window.optiload || {};
optiload.cmd = optiload.cmd || [];

window.googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];

window.evopbjs = window.evopbjs || {};
evopbjs.que = evopbjs.que || [];


googletag.cmd.push(function() {
	googletag.pubads().enableSingleRequest();
	googletag.pubads().disableInitialLoad();
	googletag.pubads().collapseEmptyDivs(true, true);
	googletag.enableServices();
});

(function() {
	var s = document.createElement("script");
	s.async = true;
	s.type = "text/javascript";
	s.src = "https://assets.evolutionadv.it/optiload/3.0.0/optiload.min.js";
	var node = document.getElementsByTagName("script")[0];
	//@ts-ignore
	node.parentNode.insertBefore(s, node);
})();

//CONFIG
optiload.cmd.push(function() {
	optiload.config.domain = "primavercelli.it";
	optiload.config.cmp_type = "none";
	//optiload.config.cmp_privacy_url = "https://notiziaoggivercelli.it/informativa-privacy/";
	//optiload.config.intext_container='.post-content';	
	optiload.config.mobile_width = 767;
	optiload.config.amazon_bid = true;
	optiload.config.sellerid= 1958;

	optiload.$(document.body).append('<div class="gptslot" data-adunitid="8"></div>');

	var viewportWidth = optiload.$(window).width();
	mhSizes = [[300,100],[320,100],[300,50],[320,50],[728,90],[970, 90], [970, 250]];
	mhSizesDesktop = [[728,90],[970, 90], [970, 250]];

	if(viewportWidth >= 767 && viewportWidth <= 1000) {
		mhSizes = [[728,90]];
		mhSizesDesktop = [[728,90]];
	}
});

//ADSENSE
(function () {
    var k = document.createElement("script"),
    el = document.getElementsByTagName("script")[0];
    k.async = true;
    k.setAttribute('type','text/javascript');
    k.setAttribute('data-ad-client','ca-pub-8945354104464549');
    k.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"; 
    el.parentNode.insertBefore(k, el); 
  })();

//UNITS
optiload.cmd.push(function() {
	var adUnits = [];

	adUnits[0] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_masthead', 
		sizes: mhSizes,
		lazy: false,	//usare optiload.fn.isMobile() invece di Optiload.isMobile() per il check se mobile o no
		isMasthead: false,
		mappings:{
			desktop: mhSizesDesktop,
			mobile: [[300,100],[320,100],[300,50],[320,50]]
		},
		hb: {
			sizes: mhSizesDesktop,
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694092'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583259'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377892", sizes: [2,57]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58989} 
			}
			]
		},
		hbmobile:{
			sizes: [[300, 100], [320, 100], [300,50], [320,50]],
			bids:[
				{
					bidder:'adform',
					params:{ mid: '694100'}
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '16583263'}
				},
				{
					bidder: 'rubicon',
					params: { accountId: "17322", siteId:"275666", zoneId: "1377924", sizes: [19,43,44,117]}
				}/*,
				{
					bidder: 'smartadserver',
					params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
				}*/
				]
			} 
	};


	adUnits[1] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_ATF', 
		sizes: [[300, 250],[336, 280],'fluid'],
		lazy: false,
		mappings:{
			desktop: [[300, 250],[336, 280],'fluid'],
			mobile: [[300,250],[336, 280],'fluid']
		},
		hb: {
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694093'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583246'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377878", sizes: [15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58998}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694093'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583246'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377914", sizes: [15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		}  
	};


	adUnits[2] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_intext', 
		sizes: [[300, 250],[320, 480],[336,280],'fluid'],
		lazy: true,
		isIntext: true, //aggiungere sempre agli intext
		mappings:{
			desktop: [[300,250],[320, 480],[336,280],'fluid'],
			mobile: [[300,250],[320, 480],[336,280],'fluid']
		},
		hb: {
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694094'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583257'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377888", sizes: [15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58993}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694094'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583257'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377920", sizes: [15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58994}
			}
			]
		} 
	};

	adUnits[3] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_BTF', 
		sizes: [[300, 250],[336, 280],'fluid'],
		lazy: true,
		mappings:{
			desktop: [[300,250],[336, 280],'fluid'],
			mobile: [[300,250],[336, 280],'fluid']
		},
		hb: {
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694095'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583251'}
			},

			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377882", sizes: [15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:59000}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694095'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583251'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377916", sizes: [15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:59001}
			}
			]
		} 
	};

	adUnits[4] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_sidebarTop', 
		sizes: [[300, 250],[300, 600],'fluid'],
		lazy: false,
		mappings:{
			desktop: [[300,250],[300, 600],'fluid'],
			mobile: [[300,250],[300, 600],'fluid']
		},
		hb: {
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
		
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377902", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58998}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};


	adUnits[5] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_sidebarSticky', 
		sizes: [[300, 250],[300,600]],
		lazy: false,
		mappings:{
			desktop: [[300, 250],[300,600]],
			mobile: [[300, 250],[300, 600]]
		},
		hb: {
			sizes: [[300, 250],[300,600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694096'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583264'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377894", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58995}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694096'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583264'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377926", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58994}
			}
			]
		} 
	};


	adUnits[6] = { 
		name:  '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_Floorad', 
		sizes: [[970, 90], [728, 90], [300, 100], [320, 100],[320, 50],[300, 50], [1,1],[1,4]], 
		isFloorad: true, //da aggiungere SEMPRE per il floorad, senza non parte il floorad
		mappings:{
			desktop: [[970, 90], [728, 90],[1,1],[1,4]],
			mobile: [[300,100],[320,100],[320, 50],[300, 50],[1,1],[1,4]]
		},
		hb: {
			sizes: [[728, 90],[970,90]],                
			bids: [
			{ 
				bidder: 'adform',
				params: { mid: '694098'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583252'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377886", sizes: [2,55]}
			}
			/*,
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58991}
			}*/
			]
		},
		hbmobile: {
			sizes: [[300, 100],[320,100]],                
			bids: [
			{
				bidder: 'adform',
				params: {mid: '694099'} 
			}, 
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583256'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377918", sizes: [19,117]}
			},            
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58992}
			}       
			]
		}
	};

	adUnits[7] = {
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_skin',
		sizes: [[1, 1], [1, 3], [1800, 1000], [1900, 1080]],
		mappings: {
			desktop: [[1, 1], [1, 3], [1800, 1000], [1900, 1080]],
			mobile: [[1, 1], [1, 3]]
		},
		isSkin: true,
		hb: {
			sizes: [[1, 1], [1800, 1000],[1900, 1080]],
			bids: [
			{
				bidder: "rubicon",
				params: { accountId: "17322", siteId: "275662", zoneId: "1476392", sizes: [68]}
			}
			]
		},
    hbmobile:{}
	};

	adUnits[8] = {
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_Intropage',
		sizes: [[1, 1]],
		mappings:{
			desktop: [[1,1]],
			mobile: [[1,1]]
		}
	};

	adUnits[9] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_leaderboard', 
		sizes: [[728,90],[970, 90],[300,100],[320,100],[300,50],[320,50]],
		lazy: false,	//usare optiload.fn.isMobile() invece di Optiload.isMobile() per il check se mobile o no
		mappings:{
			desktop: [[728,90],[970, 90]],
			mobile: [[300, 250],[300,100],[320,100],[300,50],[320,50]]
		},
		hb: {
			sizes: [[970, 90], [728, 90]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694101'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583258'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377890", sizes: [2,55]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58989} 
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[10] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_sidebar2', 
		sizes: [[300, 250],[300,600], 'fluid'],
		lazy: false,
		mappings:{
			desktop: [[300, 250],[300,600], 'fluid'],
			mobile: [[300, 250],[300, 600], 'fluid']
		},
		hb: {
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
		
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377902", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58998}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[11] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_sidebar3', 
		sizes: [[300, 250],[300,600], 'fluid'],
		lazy: false,
		mappings:{
			desktop: [[300, 250],[300,600], 'fluid'],
			mobile: [[300, 250],[300, 600], 'fluid']
		},
		hb: {
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
		
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377902", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58998}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[12] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_sidebar4', 
		sizes: [[300, 250],[300,600], 'fluid'],
		lazy: false,
		mappings:{
			desktop: [[300, 250],[300,600], 'fluid'],
			mobile: [[300, 250],[300, 600], 'fluid']
		},
		hb: {
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
		
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377902", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58998}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[13] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_sidebar6', 
		sizes: [[300, 250],[300,600], 'fluid'],
		lazy: false,
		mappings:{
			desktop: [[300, 250],[300,600], 'fluid'],
			mobile: [[300, 250],[300, 600], 'fluid']
		},
		hb: {
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
		
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377902", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58998}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[14] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_sidebar7', 
		sizes: [[300, 250],[300,600], 'fluid'],
		lazy: false,
		mappings:{
			desktop: [[300, 250],[300,600], 'fluid'],
			mobile: [[300, 250],[300, 600], 'fluid']
		},
		hb: {
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
		
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377902", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58998}
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250],[300, 600]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[15] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_leaderboard2', 
		sizes: [[728,90],[970, 90],[300,100],[320,100],[300,50],[320,50]],
		lazy: optiload.fn.isMobile(),	//usare optiload.fn.isMobile() invece di Optiload.isMobile() per il check se mobile o no
		mappings:{
			desktop: [[728,90],[970, 90]],
			mobile: [[300, 250],[300,100],[320,100],[300,50],[320,50]]
		},
		hb: {
			sizes: [[970, 90], [728, 90]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694101'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583258'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377890", sizes: [2,55]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58989} 
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[16] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_leaderboard3', 
		sizes: [[728,90],[970, 90],[300,100],[320,100],[300,50],[320,50]],
		lazy: optiload.fn.isMobile(),	//usare optiload.fn.isMobile() invece di Optiload.isMobile() per il check se mobile o no
		mappings:{
			desktop: [[728,90],[970, 90]],
			mobile: [[300, 250],[300,100],[320,100],[300,50],[320,50]]
		},
		hb: {
			sizes: [[970, 90], [728, 90]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694101'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583258'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377890", sizes: [2,55]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58989} 
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};

	adUnits[17] = { 
		name: '/5966054/NotiziaOggiVercelli/NotiziaOggiVercelli_leaderboard4', 
		sizes: [[728,90],[970, 90],[300,100],[320,100],[300,50],[320,50]],
		lazy: optiload.fn.isMobile(),	//usare optiload.fn.isMobile() invece di Optiload.isMobile() per il check se mobile o no
		mappings:{
			desktop: [[728,90],[970, 90]],
			mobile: [[300, 250],[300,100],[320,100],[300,50],[320,50]]
		},
		hb: {
			sizes: [[970, 90], [728, 90]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694101'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583258'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275662", zoneId: "1377890", sizes: [2,55]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58989} 
			}
			]
		},
		hbmobile:{
			sizes: [[300, 250]],
			bids:[
			{
				bidder:'adform',
				params:{ mid: '694097'}
			},
			{
				bidder: 'appnexusAst',
				params: { placementId: '16583265'}
			},
			{
				bidder: 'rubicon',
				params: { accountId: "17322", siteId:"275666", zoneId: "1377928", sizes: [10,15]}
			},
			{
				bidder: 'smartadserver',
				params: {siteId: 313375, domain:'https://prg.smartadserver.com',pageId:1128151, formatId:58999}
			}
			]
		} 
	};
	
	optiload.config.adunits=  adUnits;
	optiload.enable();
});


optiload.cmd.push(function() {
	optiload.addEventListener("ready", function() {
		insertIntextNew();
		optiload.fn.standardConfig();
		
		googletag.cmd.push(function() {
			googletag.pubads().addEventListener('slotRenderEnded', function(event) {
				//@ts-ignore
				if (event.slot.getSlotElementId() === "optiload-skin" && !event.isEmpty && event.size[0] === 1900) {
					//optiload.fn.utils.loadCss('https://assets.evolutionadv.it/netweek/skin.css');
				}
			})
		});
		
	});
});


function getWordCount(content) {

  var total = 0;
  content.forEach(element => {
    total += element.wordCount;
  });

  return total;
}

function insertIntextNew() {

    var $texte = optiload.$(".post-content").last();
    var evoIntextId = optiload.fn.utils.getIdIntext();

    if (evoIntextId !== -1 && $texte.length > 0) {
        var $p = $texte.find("p");
        var limit = 120;

        var currentLimit = limit;

        var count = Date.now() + 1;
        var stripText;

        var $pAndImg = $texte.find("p, img");
        $pAndImg.find("script").remove();

        var content = [];

        for (var i = 0; i < $pAndImg.length; i++) {
            stripText = null;
            var $node = optiload.$($pAndImg[i]);
            if ($node.is("img")) {
                content.push({
                    $node: $node,
                    wordCount: 0
                });
            } else if ($node.is("p")) {
                if ($node.text().length) {
                    stripText = optiload.$.parseHTML($node.text());
                }

                if (stripText && stripText.length) {
                    var wordCount = optiload.$(stripText[0]).text().split(" ").length;

                    content.push({
                        $node: $node,
                        wordCount: wordCount
                    });
                }
            }
        }

        var wordCount = 0;
        for (var i = 0; i < content.length; i++) {

            wordCount += content[i].wordCount;
            if (wordCount > currentLimit) {
                var j = i + 1;
                var found = false;
                while (j < content.length && !found) {
                    if (content[j].$node.is("p:not(.toc)") &&  getWordCount(content.slice(j)) > 50) {
                        found = true;

                      content[i].$node.after("<div class='gptslot atf' data-adunitid='" +
	                    evoIntextId +
	                    "' id='gptneltesto-" +
	                    count +
	                    "'style='text-transform:uppercase;font-size:10px;'></div>");

                        i = j - 1;
                        
                    }
                    j++;
                }

                count++;
                wordCount = 0;
            }

        }

    }
}