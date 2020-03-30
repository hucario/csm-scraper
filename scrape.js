const needle = require('needle'); 
const cheerio = require('cheerio')

function chopOffTail(orig,fromlast) {
	return orig.toString().substring(0,orig.toString().length-fromlast); 
}
var res = {body:`<!DOCTYPE html>
<!--[if IEMobile 7]><html class="no-js iem7"  lang="en" dir="ltr"><![endif]-->
<!--[if lte IE 6]><html class="no-js lt-ie9 lt-ie8 lt-ie7"  lang="en" dir="ltr"><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="no-js lt-ie9 lt-ie8"  lang="en" dir="ltr"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"  lang="en" dir="ltr"><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html  lang="en" dir="ltr" prefix="og: http://ogp.me/ns# content: http://purl.org/rss/1.0/modules/content/ dc: http://purl.org/dc/terms/ foaf: http://xmlns.com/foaf/0.1/ rdfs: http://www.w3.org/2000/01/rdf-schema# sioc: http://rdfs.org/sioc/ns# sioct: http://rdfs.org/sioc/types# skos: http://www.w3.org/2004/02/skos/core# xsd: http://www.w3.org/2001/XMLSchema# schema: http://schema.org/" class="no-js"><!--<![endif]-->

<head>
  <!-- OneTrust Cookies Consent Notice start -->
<script src="https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="b09d6a84-df4f-445d-b43e-f686b162d8db"></script>
<script type="text/javascript">
function OptanonWrapper() {
Optanon.InsertScript("https://script.crazyegg.com/pages/scripts/0026/2841.js", "body", null, null, "C0002");
Optanon.InsertScript("/sites/all/modules/contrib/google_analytics/googleanalytics.js", "body", null, null, "C0002");
 }
</script>
<script src="/sites/all/modules/custom/csm_gdpr_onetrust/js/csm_gdpr_onetrust.js" type="text/javascript"></script>
<!-- OneTrust Cookies Consent Notice end --><meta charset="utf-8" />
<link rel="dns-prefetch" href="//fonts.gstatic.com" />
<link rel="preconnect" href="//fonts.gstatic.com" crossorigin="" />
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="preconnect" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//d2e111jq13me73.cloudfront.net" />
<link rel="preconnect" href="//d2e111jq13me73.cloudfront.net" />
<link rel="dns-prefetch" href="//s3.amazonaws.com" />
<link rel="preconnect" href="//s3.amazonaws.com" />
<link rel="dns-prefetch" href="//ajax.googleapis.com" />
<link rel="preconnect" href="//ajax.googleapis.com" />
<link rel="dns-prefetch" href="//www.google-analytics.com" />
<link rel="preconnect" href="//www.google-analytics.com" />
<meta http-equiv="x-dns-prefetch-control" content="on" />
<link rel="dns-prefetch" href="//d344emq0b7u044.cloudfront.net" />
<link rel="dns-prefetch" href="//d2e111jq13me73.cloudfront.net" />
<!--[if IE 9]>
<link rel="prefetch" href="//d344emq0b7u044.cloudfront.net" />
<link rel="prefetch" href="//d2e111jq13me73.cloudfront.net" />
<![endif]-->
<link rel="profile" href="http://www.w3.org/1999/xhtml/vocab" />
<meta name="article:published_time" content="2011-09-17T18:22:00-07:00" />
<meta name="article:author" content="Michael Berry" />
<meta name="keywords" content="Book,STEM" />
<meta property="og:title" content="Ready Player One - Book Review" />
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
<link rel="shortlink" href="/node/2182051" />
<script type="application/ld+json">{
    "@context": "http://schema.org",
    "@type": "Review",
    "name": "Ready Player One",
    "datePublished": "2011-09-17",
    "description": "Layered with inside jokes and sly references that will appeal to a wide range of readers, &quot;Ready Player One&quot; is a smart, funny thriller that both celebrates and critiques online culture.",
    "url": "https://www.commonsensemedia.org/book-reviews/ready-player-one",
    "reviewBody": "Layered with inside jokes and sly references that will appeal to a wide range of readers, &quot;Ready Player One&quot; is a smart, funny thriller that both celebrates and critiques online culture. The author is accomplished at developing suspense even though much of the narrative is set in virtual reality. The puzzles are intriguing, the action is intense, and the payoff at the end is worth all the buildup.",
    "author": {
        "@type": "Person",
        "name": "Michael Berry",
        "sameAs": "https://www.commonsensemedia.org/users/michael-berry"
    },
    "itemReviewed": {
        "@type": "Book",
        "name": "Ready Player One",
        "sameAs": "https://books.google.com/books?id=J8ahqXjUhAAC",
        "isbn": "978-0307887443",
        "datePublished": "2011-08-16",
        "author": {
            "@type": "Person",
            "name": "Ernest Cline",
            "sameAs": "https://en.wikipedia.org/wiki/Ernest_Cline"
        }
    },
    "publisher": {
        "@type": "Organization",
        "name": "Common Sense Media",
        "sameAs": "https://www.commonsensemedia.org"
    },
    "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
    }
}</script><link rel="canonical" href="/book-reviews/ready-player-one" />
<meta name="description" content="Exciting, funny, futuristic thriller about online games. Read Common Sense Media&#039;s Ready Player One review, age rating, and parents guide." />
<meta name="robots" content="follow, index" />
<meta name="generator" content="Drupal 7 (http://drupal.org)" />
<link rel="canonical" href="https://www.commonsensemedia.org/book-reviews/ready-player-one" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://www.commonsensemedia.org/book-reviews/ready-player-one" />
<meta property="og:description" content="Exciting, funny, futuristic thriller about online games. Read Common Sense Media&#039;s Ready Player One review, age rating, and parents guide." />
<meta property="og:image" content="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/product-images/csm-book/ready-player-one-cover1.jpg?itok=sBDZJyGF" />
<meta property="og:image:type" content="image/jpeg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@CommonSense" />
<meta name="twitter:description" content="Exciting, funny, futuristic thriller about online games. Read Common Sense Media&#039;s Ready Player One review, age rating, and parents guide." />
<meta name="twitter:dnt" content="on" />
<meta name="twitter:image" content="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/product-images/csm-book/ready-player-one-cover1.jpg?itok=sBDZJyGF" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="x-ua-compatible" content="IE=edge" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"22bc04bf17",applicationID:"185559085"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(f(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(4),f=e(5),c=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",d=l+"ixn-";a(p,function(e,n){s[n]=i(l+n,!0,"api")}),s.addPageAction=i(l+"addPageAction",!0),s.setCurrentRouteName=i(l+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(d+"tracer",[u.now(),e,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],t),e}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(d+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?c("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&c("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&c("lcp",[t[t.length-1]])}function o(e){if(e instanceof s&&!l){var n,t=Math.round(e.timeStamp);n=t>1e12?Date.now()-t:u.now()-t,l=!0,c("timing",["fi",t,{type:e.type,fid:n}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,f,c=e("handle"),u=e("loader"),s=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),f=new PerformanceObserver(i);try{a.observe({entryTypes:["paint"]}),f.observe({entryTypes:["largest-contentful-paint"]})}catch(p){}}if("addEventListener"in document){var l=!1,d=["click","keydown","mousedown","pointerdown","touchstart"];d.forEach(function(e){document.addEventListener(e,o,!1)})}}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],5:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],6:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?c(e,f,o):o()}function t(t,r,i,o){if(!l.aborted||o){e&&e(t,r,i);for(var a=n(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function d(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||i(t)}function w(e,n){u(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:d,addEventListener:d,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(l.aborted=!0,s=l.backlog={})}var f="nr@context",c=e("gos"),u=e(4),s={},p={},l=n.exports=i();l.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(y,function(n,t){e[n]||(e[n]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function i(){"complete"===d.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=e("handle"),u=e(4),s=e("ee"),p=e(3),l=window,d=l.document,m="addEventListener",v="attachEvent",g=l.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:g,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1167.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),e(2),d[m]?(d[m]("DOMContentLoaded",o,!1),l[m]("load",r,!1)):(d[v]("onreadystatechange",i),l[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=e(6)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){l([u,"",[r,a,i],f])}s(n+"start",[r,a,i],f);try{return c=e.apply(a,r)}catch(p){throw s(n+"err",[r,a,p],f),p}finally{s(n+"end",[r,a,c],f)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,p(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<n.length;c++)f=n[c],a=e[f],r(a)||(e[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||n){var o=c;c=!0;try{e.emit(t,r,i,n)}catch(a){l([a,t,r,i])}c=o}}function p(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){l([r])}for(var i in e)f.call(e,i)&&(n[i]=e[i]);return n}function l(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script>
<link rel="icon" href="https://d2e111jq13me73.cloudfront.net/sites/all/themes/commonsense/images/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
<link rel="icon" href="https://d2e111jq13me73.cloudfront.net/sites/all/themes/commonsense/images/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="https://d2e111jq13me73.cloudfront.net/sites/all/themes/commonsense/images/favicons/favicon-96x96.png" sizes="96x96" type="image/png" />
<link rel="icon" href="https://d2e111jq13me73.cloudfront.net/sites/all/themes/commonsense/images/favicons/favicon-192x192.png" sizes="192x192" type="image/png" />
<meta name="msapplication-tilecolor" content="#e3ffee" />
<meta name="msapplication-tileimage" content="https://d2e111jq13me73.cloudfront.net/sites/all/themes/commonsense/images/favicons/mstile-144x144.png" />
<link rel="apple-touch-icon" href="https://d2e111jq13me73.cloudfront.net/sites/all/themes/commonsense/images/favicons/apple-touch-icon-180x180.png" />
  <title>Ready Player One Book Review</title>
  <link type="text/css" rel="stylesheet" href="https://d344emq0b7u044.cloudfront.net/sites/default/files/advagg_css/css__0BTCLVo4zBxAbHVUF3Wre4LuV4yaoK3EP72Rrw4nOCc__MYP7HDGCzIJkxo12wQjTFSdT0cjduu1hPK37VNKS84Q__fyJTdxdGUft3sQBhzxFVLle0XfxV8p67ahXnLMprbms.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700,400italic,300italic|Oswald" media="all" />
<link type="text/css" rel="stylesheet" href="https://d344emq0b7u044.cloudfront.net/sites/default/files/advagg_css/css__8rvFauhku8Tzi_aJDODX9203a_j1_H8GwMYlyRqxkvw__j-Q1fFb9MuBf9WbGBgcvt4tCySsJJ4RJY1LRbEOijG4__fyJTdxdGUft3sQBhzxFVLle0XfxV8p67ahXnLMprbms.css" media="all" />

<!--[if lte IE 9]>
<link type="text/css" rel="stylesheet" href="https://d344emq0b7u044.cloudfront.net/sites/all/themes/commonsense/css/ie/min/styles-ie-blessed1.min.css?q7z6od" media="all" />
<![endif]-->

<!--[if lte IE 9]>
<link type="text/css" rel="stylesheet" href="https://d344emq0b7u044.cloudfront.net/sites/all/themes/commonsense/css/ie/min/styles-ie-blessed2.min.css?q7z6od" media="all" />
<![endif]-->

<!--[if lte IE 9]>
<link type="text/css" rel="stylesheet" href="https://d344emq0b7u044.cloudfront.net/sites/all/themes/commonsense/css/ie/min/styles-ie-blessed3.min.css?q7z6od" media="all" />
<![endif]-->

<!--[if lte IE 9]>
<link type="text/css" rel="stylesheet" href="https://d344emq0b7u044.cloudfront.net/sites/all/themes/commonsense/css/ie/min/styles-ie-blessed4.min.css?q7z6od" media="all" />
<![endif]-->

<!--[if lte IE 9]>
<link type="text/css" rel="stylesheet" href="https://d344emq0b7u044.cloudfront.net/sites/all/themes/commonsense/css/ie/min/styles-ie.min.css?q7z6od" media="all" />
<![endif]-->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write("<script src='/sites/all/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js'>\x3C/script>")</script>
<script src="https://d344emq0b7u044.cloudfront.net/sites/default/files/advagg_js/js__pIFsfVQKpSpZ5r5khO8nBBYzHjm_jU-SvhXfPe5Qsv8__znGSHBb8mtO0vJVMfJSBE09xm9Jm0EIU6nj7vinQg_0__fyJTdxdGUft3sQBhzxFVLle0XfxV8p67ahXnLMprbms.js"></script>
<script></script><script type="text/plain" class="optanon-category-C0002">(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","https://d344emq0b7u044.cloudfront.net/sites/default/files/googleanalytics/analytics.js?q7z6od","ga");ga("create", "UA-224718-31", {"cookieDomain":"auto"});ga("set", "anonymizeIp", true);ga("set", "dimension1", "logged_out");ga("set", "dimension2", "anonymous user");ga('require', 'GTM-TQFWMDQ');if (window.location.pathname == "/newsletters") ga("set", "location", window.location.pathname + ' ? ' + window.location.search.split('&')[1]); ga(function(tracker) { ga("set", "dimension10", tracker.get('clientId'))});ga("send", "pageview");</script><script></script>
<script>jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"commonsense","theme_token":"4HUq-8liTF5GQY6FQKT3qRt1KM6EwweBo0pmMd9xm80"},"colorbox":{"transition":"none","speed":"350","opacity":"0.85","slideshow":false,"slideshowAuto":true,"slideshowSpeed":"2500","slideshowStart":"start slideshow","slideshowStop":"stop slideshow","current":"{current} of {total}","previous":"\u00ab Prev","next":"Next \u00bb","close":"Close","overlayClose":true,"returnFocus":true,"maxWidth":"98%","maxHeight":"98%","initialWidth":"300","initialHeight":"250","fixed":true,"scrolling":false,"mobiledetect":false,"mobiledevicewidth":"480px","fastIframe":false},"csm_gate":{"classname":[{"classname":"gated-educator","message":"Please log in as an Educator to view this material.","redirect_path":"","redirect_hash":"#my-educator-profile"},{"classname":"gated-authenticated","message":"Please log in to view this material.","redirect_path":"","redirect_hash":""}]},"csm_gdpr_onetrust":{"enabled":"true"},"csm_ui_breakpoint":{"mobile":320,"large_mobile":481,"tablet":768,"desktop":970,"widescreen":1200},"printed":false,"csm_user":{"user":{"uid":0,"connected_providers":{"database":"database"},"isAdmin":0}},"overlay":{"paths":{"admin":"block\/*\/edit\nblock\/*\/delete\nblock\/*\/revisions\nblock\/*\/revisions\/*\/edit\nblock\/*\/revisions\/*\/set-active\nblock\/*\/revisions\/*\/delete\nblock\/add\nblock\/add\/*\najax\/content_lock\/*\/lock\/*\najax\/content_lock\/*\/canceledit\nfield-collection\/*\/*\/edit\nfield-collection\/*\/*\/delete\nfield-collection\/*\/add\/*\/*\nfile\/add\nfile\/add\/*\nfile\/*\/edit\nfile\/*\/usage\nfile\/*\/delete\nuser\/*\/linkchecker\nlinkchecker\/*\/edit\nmedia\/*\/edit\/*\nmedia\/*\/format-form\nmedia\/browser\nmedia\/browser\/*\nnode\/*\/edit\nnode\/*\/delete\nnode\/*\/revisions\nnode\/*\/revisions\/*\/revert\nnode\/*\/revisions\/*\/delete\nnode\/add\nnode\/add\/*\nnode\/*\/nodequeue\noverlay\/dismiss-message\nreferences-dialog\/search\/*\nreplicate\/*\/*\nnode\/*\/replicate\nfield-collection\/*\/*\/replicate\ntaxonomy\/term\/*\/queue\nadmin\nadmin\/*\nbatch\ntaxonomy\/term\/*\/edit\nhelp\/advanced_help\/*\nnode\/*\/revisions\/view\/*\/*","non_admin":"admin\/structure\/block\/demo\/*\nadmin\/reports\/status\/php\nuser\/*\/cancel\nuser\/*\/edit\nuser\/*\/edit\/*\nfield-collection\/field-collection-child\/*\/edit\nfield-collection\/field-collection-child\/*\/delete\nfield-collection\/field-collection-child\/add\/*\/*"},"pathPrefixes":[],"ajaxCallback":"overlay-ajax"},"social_sharing_icons":{"twitter_account":"commonsense"},"flag":{"anonymous":true,"templates":{"flag_abuse_node_5754286":"\u003Cspan class=\u0022flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-5754286\u0022\u003E\n      \u003Cspan class=\u0022flag unflag-disabled\u0022\u003Eflagged\u003C\/span\u003E\n    \u003C\/span\u003E\n","flag_abuse_node_5262816":"\u003Cspan class=\u0022flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-5262816\u0022\u003E\n      \u003Cspan class=\u0022flag unflag-disabled\u0022\u003Eflagged\u003C\/span\u003E\n    \u003C\/span\u003E\n","flag_abuse_node_4932681":"\u003Cspan class=\u0022flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-4932681\u0022\u003E\n      \u003Cspan class=\u0022flag unflag-disabled\u0022\u003Eflagged\u003C\/span\u003E\n    \u003C\/span\u003E\n","flag_abuse_node_4399876":"\u003Cspan class=\u0022flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-4399876\u0022\u003E\n      \u003Cspan class=\u0022flag unflag-disabled\u0022\u003Eflagged\u003C\/span\u003E\n    \u003C\/span\u003E\n"}},"better_exposed_filters":{"views":{"user_reviews_view":{"displays":{"user_reviews_block_pane":{"filters":[]}}},"review_character_strength_terms":{"displays":{"review_char_strengths_pane":{"filters":[]},"review_themes_pane":{"filters":[]}}},"review_other_choices_view":{"displays":{"review_other_choices_pane":{"filters":[]}}},"review_top_advice_articles":{"displays":{"list":{"filters":[]}}}}},"panels_responsive_tabs":[{"identifier":"tabs-reviews-user-reviews-middle","type":"default","width":"auto","fit":"1","closed":"0","activetab_bg":"#B5AC5F","inactive_bg":"#E0D78C","active_border_color":"#9C905C","active_content_border_color":"#9C905C","tabidentify":""}],"slick":{"accessibility":true,"adaptiveHeight":false,"autoplay":false,"autoplaySpeed":3000,"pauseOnHover":true,"pauseOnDotsHover":false,"arrows":true,"centerMode":false,"centerPadding":"50px","dots":false,"dotsClass":"slick-dots","draggable":true,"fade":false,"focusOnSelect":false,"infinite":true,"initialSlide":0,"lazyLoad":"ondemand","rtl":false,"rows":1,"slidesPerRow":1,"slide":"","slidesToShow":1,"slidesToScroll":1,"speed":500,"swipe":true,"swipeToSlide":false,"edgeFriction":0.35,"touchMove":true,"touchThreshold":5,"useCSS":true,"cssEase":"ease","useTransform":false,"easing":"linear","variableWidth":false,"vertical":false,"verticalSwiping":false,"waitForAnimate":true,"mousewheel":false},"urlIsAjaxTrusted":{"\/":true,"\/user\/register":true},"csm_informizely":{"user":{"location":{"country":"US"}}},"googleanalytics":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"superfish":[{"id":"3","sf":{"delay":"0","animation":{"opacity":"show","height":"show"},"speed":"\u0027fast\u0027","autoArrows":true,"dropShadows":false,"disableHI":false},"plugins":{"touchscreen":{"mode":"always_active"},"supposition":false,"bgiframe":false,"supersubs":{"minWidth":"12","maxWidth":"27","extraWidth":1}}},{"id":"1","sf":{"delay":"0","animation":{"opacity":"show","height":"show"},"speed":"\u0027slow\u0027","autoArrows":true,"dropShadows":true,"disableHI":false},"plugins":{"touchscreen":{"mode":"always_active"},"supposition":false,"bgiframe":false}}],"node":{"nid":"2182051","type":"csm_review","type_name":"Review","title":"CSM Review of 2181956 - Ready Player One","entertainment_product":{"nid":"2181956","type":"csm_book","type_name":"Book","title":"Ready Player One"},"coming_soon":"0","review_date":"20110917","is_learning_rating":false,"is_common_sense_award":false}});</script>
      <!--[if lt IE 9]>
    <script src="/sites/all/themes/zen/js/html5-respond.js"></script>
    <![endif]-->
  </head>
<body class="html not-front not-logged-in no-sidebars page-node page-node- page-node-2182051 node-type-csm-review section-book-reviews page-panels published commonsense regular" >
        <p id="skip-link">
      <a href="#content" class="element-invisible element-focusable">Skip to Content</a>
    </p>
    <div id="body-wrapper">
    <div id="wrapper" class="wrapper">
  
  <div id="header-fixed">
    <div id="strip">
        <div class="region region-strip">
    <div id="block-menu-menu-top-bar-nav" class="block block-menu first last odd" role="navigation">

      
  <ul class="menu"><li class="menu__item is-leaf first leaf"><a href="/" title="Common Sense Media: Ratings, reviews, and advice" class="menu__link main active">For Parents</a></li>
<li class="menu__item is-leaf leaf"><a href="https://www.commonsense.org/education" title="Common Sense Education: Resources for digital teaching" class="menu__link education">For Educators</a></li>
<li class="menu__item is-leaf last leaf"><a href="/kids-action" title="Common Sense Kids Action: Advocacy opportunities for families" class="menu__link kids-action">For Advocates</a></li>
</ul><div class="clear"></div>
</div>
  </div>
    </div><!-- /strip -->
    
    <header id="header" role="banner">
      <div id="mobile-menu-button" class="icon-menu"></div>

                  <div id="site-logo">
        <a href="/" title="Click to go back to the homepage" rel="home" class="header__logo" id="logo">
          <div class="header-logo logo-section-media"></div>
        </a>
      </div>
      
              
  <span typeof="schema:Organization" vocab="http://schema.org/">
    <meta property="url" content="https://www.commonsensemedia.org" />
    <meta property="logo" content="https://www.commonsensemedia.org/sites/all/themes/commonsense/images/logo-commonsense.png" />
  </span>      
        <div class="header__region region region-header">
    <div id="block-views-exp-site-search-search-pane" class="block block-views first odd">

      
  <form action="/" method="get" id="views-exposed-form-site-search-search-pane" accept-charset="UTF-8"><div><div class="views-exposed-form">
  <div class="views-exposed-widgets clearfix">
          <div id="edit-search-api-views-fulltext-wrapper" class="views-exposed-widget views-widget-filter-search_api_views_fulltext">
                        <div class="views-widget">
          <div class="form-item form-type-textfield form-item-search-api-views-fulltext">
 <input class="form-control form-text form-autocomplete" type="text" id="edit-search-api-views-fulltext" name="search_api_views_fulltext" value="" size="30" maxlength="128" /><input type="hidden" id="edit-search-api-views-fulltext-autocomplete" value="https://www.commonsensemedia.org/index.php?q=ajax/search/autocomplete" disabled="disabled" class="autocomplete" />
</div>
        </div>
              </div>
                    <div class="views-exposed-widget views-submit-button">
      <input class="btn form-submit" type="submit" id="edit-submit-site-search" name="" value="Search" />    </div>
      </div>
</div>
</div></form>
  <div class="mobile-browse-list"><h3>Or browse by category:</h3><ul class="categories row"><li class="0 first"><a href="/movie-reviews" class="btn btn--reverse">Movies</a></li>
<li class="1"><a href="/tv-reviews" class="btn btn--reverse">TV shows</a></li>
<li class="2"><a href="/book-reviews" class="btn btn--reverse">Books</a></li>
<li class="3"><a href="/app-reviews" class="btn btn--reverse">Apps</a></li>
<li class="4"><a href="/game-reviews" class="btn btn--reverse">Games</a></li>
<li class="5 last"><a href="/blog" class="btn btn--reverse">Parenting</a></li>
</ul><div class="mobile-browse-foot"><p>See top picks for your kid in Common Sense Media Plus. <a href="/plus" class="link link--reverse">Join now</a></p></div></div></div>
<div id="block-superfish-3" class="block block-superfish last even">

      
  <ul id="superfish-3" class="menu sf-menu sf-user-menu sf-horizontal sf-style-none"><li id="menu-1064-3" class="first sf-depth-1 sf-no-children"><a href="/user/login?destination=node/2182051" title="Go to my account" class="sf-depth-1">Sign in</a></li><li id="menu-119306-3" class="middle sf-depth-1 sf-no-children desktop-hidden donate-link"><a href="/donate" class="sf-depth-1">Donate</a></li><li id="menu-119307-3" class="last sf-depth-1 sf-no-children"><a href="https://www.commonsensemedia.org/plus" class="btn btn--secondary sf-depth-1">Become a member</a></li></ul>
</div>
  </div>

      <div id="mobile-search-button">
        <a href="/search" class="icon-search"></a>
      </div>
    </header>

    <div id="mobile-search"></div>

    <div id="navigation">
        <div class="region region-navigation">
    <div id="block-superfish-1" class="block block-superfish first last odd">

      
  <ul id="superfish-1" class="menu sf-menu sf-main-menu sf-horizontal sf-style-none"><li id="menu-117757-1" class="first sf-depth-1 menuparent"><a href="/movie-reviews" class="sf-depth-1 menuparent">Movies &amp; TV</a><ul><li id="menu-117758-1" class="first sf-depth-2 menuparent"><a href="/movie-reviews" class="sf-depth-2 menuparent">Movie and TV Reviews and Lists</a><ul><li id="menu-117759-1" class="first sf-depth-3 sf-no-children"><a href="/reviews/category/movie/status/theaters-4535" class="sf-depth-3">New in Theaters</a></li><li id="menu-117762-1" class="middle sf-depth-3 sf-no-children"><a href="/movie-reviews" class="sf-depth-3">Movie Reviews</a></li><li id="menu-117764-1" class="middle sf-depth-3 sf-no-children"><a href="/tv-reviews" class="sf-depth-3">TV Reviews</a></li><li id="menu-117761-1" class="middle sf-depth-3 sf-no-children"><a href="/movie-lists" class="sf-depth-3">Best Movie Lists</a></li><li id="menu-117763-1" class="middle sf-depth-3 sf-no-children"><a href="/tv-lists" class="sf-depth-3">Best TV Lists</a></li><li id="menu-117765-1" class="last sf-depth-3 sf-no-children"><a href="/youtube-reviews" class="sf-depth-3">YouTube Channel Reviews</a></li></ul></li><li id="menu-117834-1" class="middle sf-depth-2 menuparent"><a href="/seal" class="sf-depth-2 menuparent">The Common Sense Seal</a><ul><li id="menu-117835-1" class="firstandlast sf-depth-3 sf-no-children column-mobile"><span class="item-content"><a href="/blog/what-to-watch-read-and-play-while-your-kids-are-stuck-indoors" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/blog/csm-blog/blog_2.jpg?itok=3DgG4eec" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="A stylized illustration of a family with a tablet, book, and game controller between them. " title=" A stylized illustration of a family with a tablet, book, and game controller between them. " /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/blog/csm-blog/blog_2.jpg?itok=3DgG4eec" width="218" height="123" alt="A stylized illustration of a family with a tablet, book, and game controller between them. " title=" A stylized illustration of a family with a tablet, book, and game controller between them. " /></noscript><span class="link-title">What to Watch, Read, and Play While Your Kids Are Stuck Indoors</span></a></span></li></ul></li><li id="menu-117836-1" class="last sf-depth-2 menuparent"><a href="/best-for-character-development-lists" class="sf-depth-2 menuparent">Editors&#039; Top Picks</a><ul><li id="menu-117837-1" class="firstandlast sf-depth-3 sf-no-children"><span class="item-content"><a href="/best-for-character-development-lists" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-buildcharacter_436x246-opt.jpg?itok=LKn2XaE0" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Three books art images" title="Go to our Best for Character Development list" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-buildcharacter_436x246-opt.jpg?itok=LKn2XaE0" width="218" height="123" alt="Three books art images" title="Go to our Best for Character Development list" /></noscript><span class="link-title">Find movies and TV shows that build character</span></a></span></li></ul></li></ul></li><li id="menu-117766-1" class="middle sf-depth-1 menuparent"><a href="/book-reviews" class="sf-depth-1 menuparent">Books</a><ul><li id="menu-117770-1" class="first sf-depth-2 menuparent"><a href="/book-reviews" class="sf-depth-2 menuparent">Book Reviews and Lists</a><ul><li id="menu-117767-1" class="first sf-depth-3 sf-no-children"><a href="/book-lists" class="sf-depth-3">Best Book Lists</a></li><li id="menu-117768-1" class="last sf-depth-3 sf-no-children"><a href="/book-reviews" class="sf-depth-3">Book Reviews</a></li></ul></li><li id="menu-117838-1" class="middle sf-depth-2 menuparent"><a href="/blog/how-to-raise-a-reader" class="sf-depth-2 menuparent">Article about books</a><ul><li id="menu-117839-1" class="firstandlast sf-depth-3 sf-no-children"><span class="item-content"><a href="/blog/how-to-raise-a-reader" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-raisereader_436x246-opt.jpg?itok=Rj5idsL8" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Mom and daughter reading on the couch" title="Click to see tips on raising a reader" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-raisereader_436x246-opt.jpg?itok=Rj5idsL8" width="218" height="123" alt="Mom and daughter reading on the couch" title="Click to see tips on raising a reader" /></noscript><span class="link-title">10 tips for getting kids hooked on books</span></a></span></li></ul></li><li id="menu-117840-1" class="last sf-depth-2 menuparent"><a href="/reading/is-it-ok-for-kids-to-read-books-outside-their-reading-levels" class="sf-depth-2 menuparent">Expert Answers from Our Editors</a><ul><li id="menu-117841-1" class="firstandlast sf-depth-3 sf-no-children"><span class="item-content"><a href="/reading/is-it-ok-for-kids-to-read-books-outside-their-reading-levels" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-kidsreadinglevels_436x246-opt.jpg?itok=aJ0fiLz6" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Young boy reading in a chair" title="Click for advice on kids reading outside their reading level " /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-kidsreadinglevels_436x246-opt.jpg?itok=aJ0fiLz6" width="218" height="123" alt="Young boy reading in a chair" title="Click for advice on kids reading outside their reading level " /></noscript><span class="link-title">Expert answers: Is it OK for kids to read books outside their reading levels?</span></a></span></li></ul></li></ul></li><li id="menu-117769-1" class="middle sf-depth-1 menuparent"><a href="/app-reviews" class="sf-depth-1 menuparent">Apps &amp; Games</a><ul><li id="menu-117771-1" class="first sf-depth-2 menuparent"><a href="/app-reviews" class="sf-depth-2 menuparent">App and Game Reviews and Lists</a><ul><li id="menu-117772-1" class="first sf-depth-3 sf-no-children"><a href="/app-lists" class="sf-depth-3">Best App Lists</a></li><li id="menu-117773-1" class="middle sf-depth-3 sf-no-children"><a href="/app-reviews" class="sf-depth-3">App Reviews</a></li><li id="menu-117774-1" class="middle sf-depth-3 sf-no-children"><a href="/game-lists" class="sf-depth-3">Best Game Lists</a></li><li id="menu-117775-1" class="last sf-depth-3 sf-no-children"><a href="/game-reviews" class="sf-depth-3">Game Reviews</a></li></ul></li><li id="menu-117846-1" class="middle sf-depth-2 menuparent"><a href="/website-lists" class="sf-depth-2 menuparent">Website Reviews and Lists</a><ul><li id="menu-117776-1" class="first sf-depth-3 sf-no-children"><a href="/website-lists" class="sf-depth-3">Best Website Lists</a></li><li id="menu-117777-1" class="middle sf-depth-3 sf-no-children"><a href="/website-reviews" class="sf-depth-3">Website Reviews</a></li><li id="menu-117779-1" class="middle sf-depth-3 sf-no-children"><a href="/best-for-learning-lists" class="sf-depth-3">Best for Learning Lists</a></li><li id="menu-117778-1" class="last sf-depth-3 sf-no-children"><a href="/guide/special-needs" class="sf-depth-3">Special Needs Apps</a></li></ul></li><li id="menu-117842-1" class="middle sf-depth-2 menuparent"><a href="/learning-with-technology" class="sf-depth-2 menuparent">Learning with Technology</a><ul><li id="menu-117843-1" class="firstandlast sf-depth-3 sf-no-children"><span class="item-content"><a href="/learning-with-technology" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-learningwithtech_436x246-opt.jpg?itok=IOM4udzz" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Family watching boy play on tablet" title="Click for tips on learning with technology" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-learningwithtech_436x246-opt.jpg?itok=IOM4udzz" width="218" height="123" alt="Family watching boy play on tablet" title="Click for tips on learning with technology" /></noscript><span class="link-title">Use tech to foster a love of learning</span></a></span></li></ul></li><li id="menu-117844-1" class="last sf-depth-2 menuparent"><a href="/video/what-is" class="sf-depth-2 menuparent">What Is Videos</a><ul><li id="menu-117845-1" class="firstandlast sf-depth-3 sf-no-children"><span class="item-content"><a href="/video/what-is" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-whatis_436x246-opt.jpg?itok=fvgIpj9N" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Snapchat logo" title="Watch out videos on what Snapchat, Facebook, etc. are" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-whatis_436x246-opt.jpg?itok=fvgIpj9N" width="218" height="123" alt="Snapchat logo" title="Watch out videos on what Snapchat, Facebook, etc. are" /></noscript><span class="link-title">What is ... ?</span></a></span></li></ul></li></ul></li><li id="menu-117780-1" class="middle sf-depth-1 menuparent"><a href="/parent-concerns" class="sf-depth-1 menuparent">Parents Need to Know</a><ul><li id="menu-117783-1" class="first sf-depth-2 menuparent column-title column-mobile"><a href="/parent-concerns" class="sf-depth-2 menuparent">By Age</a><ul><li id="menu-117884-1" class="first sf-depth-3 sf-no-children"><a href="/blog/preschoolers" class="sf-depth-3">Preschoolers (2-4)</a></li><li id="menu-117885-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/little-kids" class="sf-depth-3">Little Kids (5-7)</a></li><li id="menu-117886-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/big-kids" class="sf-depth-3">Big Kids (8-9)</a></li><li id="menu-117887-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/tweens" class="sf-depth-3">Tweens (10-12)</a></li><li id="menu-117888-1" class="last sf-depth-3 sf-no-children"><a href="/blog/teens" class="sf-depth-3">Teens (13+)</a></li></ul></li><li id="menu-117790-1" class="middle sf-depth-2 menuparent column-title column-mobile"><a href="/parent-concerns" class="sf-depth-2 menuparent">By Topic</a><ul><li id="menu-117784-1" class="first sf-depth-3 sf-no-children"><a href="/cellphone-parenting" class="sf-depth-3">Cellphones</a></li><li id="menu-117785-1" class="middle sf-depth-3 sf-no-children"><a href="/screen-time" class="sf-depth-3">Screen Time</a></li><li id="menu-117787-1" class="middle sf-depth-3 sf-no-children"><a href="/social-media" class="sf-depth-3">Social Media</a></li><li id="menu-117786-1" class="middle sf-depth-3 sf-no-children"><a href="/privacy-and-internet-safety" class="sf-depth-3">Privacy and Online Safety</a></li><li id="menu-117798-1" class="middle sf-depth-3 sf-no-children"><a href="/learning-with-technology" class="sf-depth-3">Learning with Technology</a></li><li id="menu-117794-1" class="middle sf-depth-3 sf-no-children"><a href="/violence-in-the-media" class="sf-depth-3">Violence in the Media</a></li><li id="menu-117788-1" class="last sf-depth-3 sf-no-children"><a href="/parent-concerns" class="sf-depth-3">More ...</a></li></ul></li><li id="menu-117796-1" class="middle sf-depth-2 menuparent column-title column-mobile"><a href="/blog" class="sf-depth-2 menuparent">Parents&#039; Ultimate Guide to ...</a><ul><li id="menu-117919-1" class="first sf-depth-3 sf-no-children"><a href="/blog/parents-ultimate-guide-to-fortnite" class="sf-depth-3">Fortnite</a></li><li id="menu-117791-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/parents-ultimate-guide-to-youtube" class="sf-depth-3">YouTube</a></li><li id="menu-117792-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/parents-ultimate-guide-to-snapchat" class="sf-depth-3">Snapchat</a></li><li id="menu-117793-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/parents-ultimate-guide-to-tiktok" class="sf-depth-3">TikTok</a></li><li id="menu-117795-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/parents-ultimate-guide-to-roblox-0" class="sf-depth-3">Roblox</a></li><li id="menu-117797-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/parents-ultimate-guide-to-youtube-kids" class="sf-depth-3">YouTube Kids</a></li><li id="menu-118105-1" class="middle sf-depth-3 sf-no-children"><a href="/blog/parents-ultimate-guide-to-parental-controls" class="sf-depth-3">Parental Controls</a></li><li id="menu-117961-1" class="last sf-depth-3 sf-no-children"><a href="/parents-ultimate-guides" class="sf-depth-3">More ...</a></li></ul></li><li id="menu-117781-1" class="last sf-depth-2 menuparent column-title"><a href="/blog" class="sf-depth-2 menuparent">Articles</a><ul><li id="menu-117782-1" class="first sf-depth-3 sf-no-children column-mobile"><span class="item-content"><a href="/blog/help-your-family-de-stress-during-coronavirus-uncertainty" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/blog/csm-blog/familywell-being-blog-03_0.jpg?itok=uFmvnGk2" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Illustrated image of family hugging" title=" Illustrated image of family hugging" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/blog/csm-blog/familywell-being-blog-03_0.jpg?itok=uFmvnGk2" width="218" height="123" alt="Illustrated image of family hugging" title=" Illustrated image of family hugging" /></noscript><span class="link-title">Help Your Family De-Stress During Coronavirus Uncertainty</span></a></span></li><li id="menu-117889-1" class="middle sf-depth-3 sf-no-children mobile-hidden"><a href="/blog" class="sf-depth-3">All Articles</a></li><li id="menu-118101-1" class="last sf-depth-3 sf-no-children mobile-hidden column-mobile"><a href="/family-media-agreement" class="sf-depth-3">Family Media Agreement</a></li></ul></li></ul></li><li id="menu-117805-1" class="middle sf-depth-1 menuparent"><a href="/latino" class="sf-depth-1 menuparent">Latino</a><ul><li id="menu-117806-1" class="first sf-depth-2 menuparent"><a href="/latino" class="sf-depth-2 menuparent">Menu for Latino Content</a><ul><li id="menu-117807-1" class="first sf-depth-3 sf-no-children"><a href="/latino" class="sf-depth-3">Inicio</a></li><li id="menu-117808-1" class="middle sf-depth-3 sf-no-children"><a href="/espanol/blog" class="sf-depth-3">Artículos en español</a></li><li id="menu-117809-1" class="middle sf-depth-3 sf-no-children"><a href="/video/espanol" class="sf-depth-3">Videos en español</a></li><li id="menu-117811-1" class="middle sf-depth-3 sf-no-children"><a href="/latino/nuestras-resenas" class="sf-depth-3">Nuestras reseñas</a></li><li id="menu-117812-1" class="middle sf-depth-3 sf-no-children"><a href="/latino/nuestra-mision" class="sf-depth-3">Nuestra misión</a></li><li id="menu-117813-1" class="middle sf-depth-3 sf-no-children"><a href="/latino/en-las-noticias" class="sf-depth-3">En las noticias</a></li><li id="menu-117814-1" class="middle sf-depth-3 sf-no-children"><a href="/about-us/supporters/latino-partners" class="sf-depth-3">Colaboradores</a></li><li id="menu-117815-1" class="middle sf-depth-3 sf-no-children"><a href="/latino/educacion" class="sf-depth-3">Recursos educativos</a></li><li id="menu-117810-1" class="last sf-depth-3 sf-no-children"><a href="/blog/latino" class="sf-depth-3">Latino Articles in English</a></li></ul></li><li id="menu-117848-1" class="middle sf-depth-2 menuparent"><a href="/latino" class="sf-depth-2 menuparent">Latest Latino Blog Post</a><ul><li id="menu-117849-1" class="firstandlast sf-depth-3 sf-no-children column-mobile"><span class="item-content"><a href="/espanol/blog/actividades-y-eventos-gratuitos-para-hacer-con-los-ninos-en-casa" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/blog/csm-blog/freeonlineeventsactivitieskidshome-blog-option3.jpg?itok=b0SyJSN2" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Two kids sitting on the floor using a tablet surrounded by art supples" title=" Two kids sitting on the floor using a tablet surrounded by art supples" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/blog/csm-blog/freeonlineeventsactivitieskidshome-blog-option3.jpg?itok=b0SyJSN2" width="218" height="123" alt="Two kids sitting on the floor using a tablet surrounded by art supples" title=" Two kids sitting on the floor using a tablet surrounded by art supples" /></noscript><span class="link-title">Actividades y eventos gratuitos para hacer con los niños en casa</span></a></span></li></ul></li><li id="menu-117850-1" class="last sf-depth-2 menuparent"><a href="/latino" class="sf-depth-2 menuparent">Latest Latino Video</a><ul><li id="menu-117851-1" class="firstandlast sf-depth-3 sf-no-children column-mobile"><span class="item-content"><a href="/recursos-para-las-familias-durante-la-pandemia-del-coronavirus" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/thumbnail-corona.jpg?itok=QVg5FnVR" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/thumbnail-corona.jpg?itok=QVg5FnVR" width="218" height="123" alt="" /></noscript><span class="link-title">Recursos para las familias durante la pandemia del Coronavirus</span></a></span></li></ul></li></ul></li><li id="menu-117816-1" class="middle sf-depth-1 sf-no-children"><a href="/research" class="sf-depth-1">Research</a></li><li id="menu-117817-1" class="middle sf-depth-1 menuparent"><a href="/about-us/our-mission" class="sf-depth-1 menuparent">About Us</a><ul><li id="menu-117818-1" class="first sf-depth-2 menuparent"><a href="/about-us/our-mission" class="sf-depth-2 menuparent">Learn about Common Sense</a><ul><li id="menu-117819-1" class="first sf-depth-3 sf-no-children"><a href="/about-us/our-mission" class="sf-depth-3">About Us</a></li><li id="menu-117877-1" class="middle sf-depth-3 sf-no-children"><a href="https://www.commonsense.org/our-impact/" class="sf-depth-3">Our Impact</a></li><li id="menu-117820-1" class="middle sf-depth-3 sf-no-children"><a href="/meet-our-team" class="sf-depth-3">Meet Our Team</a></li><li id="menu-117822-1" class="middle sf-depth-3 sf-no-children"><a href="/meet-our-team/our-board" class="sf-depth-3">Board of Directors</a></li><li id="menu-1165-1" class="last sf-depth-3 sf-no-children"><a href="/meet-our-team/our-board#/advisors" class="sf-depth-3">Board of Advisors</a></li></ul></li><li id="menu-117847-1" class="middle sf-depth-2 menuparent"><a href="/about-us/our-mission" class="sf-depth-2 menuparent">More About Us Links</a><ul><li id="menu-117821-1" class="first sf-depth-3 sf-no-children"><a href="/about-us/our-mission/about-our-ratings" class="sf-depth-3">How We Rate</a></li><li id="menu-117826-1" class="middle sf-depth-3 sf-no-children"><a href="/donate" class="sf-depth-3">Donate</a></li><li id="menu-117918-1" class="middle sf-depth-3 sf-no-children"><a href="/offices" class="sf-depth-3">Regional Offices</a></li><li id="menu-117827-1" class="middle sf-depth-3 sf-no-children"><a href="/common-sense-events" class="sf-depth-3">Events</a></li><li id="menu-119732-1" class="last sf-depth-3 sf-no-children"><a href="https://www.donotsell.org" class="sf-depth-3">CCPA: Protect Your Privacy</a></li></ul></li><li id="menu-117852-1" class="middle sf-depth-2 menuparent"><a href="/about-us/our-mission" class="sf-depth-2 menuparent">Donate to Common Sense</a><ul><li id="menu-117853-1" class="firstandlast sf-depth-3 sf-no-children"><span class="item-content"><a href="/donate" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-donate_436x246-opt.jpg?itok=A4-4pnUY" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="Young girl hugging her mom" title="Donate to Common Sense!" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/megamenu-donate_436x246-opt.jpg?itok=A4-4pnUY" width="218" height="123" alt="Young girl hugging her mom" title="Donate to Common Sense!" /></noscript><span class="link-title">We're a nonprofit. Support our work!</span></a></span></li></ul></li><li id="menu-117879-1" class="last sf-depth-2 menuparent"><a href="/about-us/our-mission" class="sf-depth-2 menuparent">Common Sense&#039;s Impact</a><ul><li id="menu-117880-1" class="firstandlast sf-depth-3 sf-no-children"><span class="item-content"><a href="https://www.donotsell.org" class="link"><img class="lazy-megamenu lazy" data-src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/ccpa_menu.jpg?itok=O3Z3k2K4" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="218" height="123" alt="App icons" title="App icons" /><noscript><img class="lazy-megamenu" typeof="Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/megamenu_image/public/megamenu/ccpa_menu.jpg?itok=O3Z3k2K4" width="218" height="123" alt="App icons" title="App icons" /></noscript><span class="link-title">CCPA: Protect your family's data privacy under new California law. </span></a></span></li></ul></li></ul></li><li id="menu-119740-1" class="last sf-depth-1 sf-no-children"><a href="/resources-for-families-during-the-coronavirus-pandemic" class="sf-depth-1">Coronavirus Resources</a></li></ul>
</div>
  </div>
    </div><!-- /#navigation -->
  </div>

  <div id="page" class="page-wrapper">
    <div id="nav-overlay"></div>
    <div id="mainpage">
      <div id="main">

        
        
        <div id="content" class="column" role="main">
                    
          <a id="main-content"></a>

          
          
                                        
          
          



<div class="panel-csm-review clearfix panel-display" >
  <div class="panel-content-top-wrapper clearfix">
    <div class="panel-content-top panel-panel clearfix">
      <div class="inside">
        <div class="panel-pane pane-node-title csm_book"  >
  
      
  
  <div class="pane-content">
    <h1>Ready Player One</h1>
  </div>

  
  </div>
<div class="panel-pane pane-node-author"  >
  
        <span class="pane-title">
      Book review by     </span>
    
  
  <div class="pane-content">
    <a href="/users/michael-berry/bio" title="View Michael Berry&#039;s bio" class="username" about="/users/michael-berry/bio" typeof="sioc:UserAccount" property="foaf:name">Michael Berry</a>, Common Sense Media  </div>

  
  </div>
      </div>

      <div class="panel-content-top-main panel-panel">
        <div class="inside"><div class="panel-pane pane-entity-field pane-node-field-product-image"  >
  
      
  
  <div class="pane-content">
    <div class="field field-name-field-product-image field-type-image field-label-hidden"><div class="field-items"><div class="field-item even"><img typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/ready-player-one-cover1.jpg?itok=eUlLVE3A" width="170" height="255" alt="Ready Player One Book Poster Image" title="Ready Player One Book Poster Image" /></div></div></div>  </div>

  
  </div>

<div class="sense-pane panel-pane pane-entity-field pane-node-field-review-recommended-age" >

      <h2 class="pane-title">Common Sense says</h2>
  
  <div class="pane-content">
    <div class="field field-name-field-review-recommended-age field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="csm-green-age"><span class="checkmark-icon"></span>age 15+</div></div></div></div>  </div>


</div>


<div class="sense-pane panel-pane pane-entity-field pane-node-field-stars-rating" >

      <a href="#csm-tooltip-about-our-ratings" class="csm-tooltip-trigger" data-about-our-ratings-title=""><span>(i)</span></a>  
  <div class="pane-content">
    <div class="field field-name-field-stars-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even">
<div property="itemReviewed" typeof="schema:Thing" vocab="http://schema.org/">
  <meta property="name" content="Ready Player One" />
</div>
<div property="author" typeof="schema:Person" vocab="http://schema.org/">
  <meta property="name" content="Common Sense Media" />
</div>
<div property="reviewRating" typeof="schema:Rating" vocab="http://schema.org/">
  <meta property="ratingValue" content="5" />
</div>
<a property="url" href="/book-reviews/ready-player-one">
  <meta property="name" content="Ready Player One" />
</a>
<meta property="reviewBody" content="&lt;p&gt;Parents need to know that this humorous science fiction thriller deals with a high-stakes online contest that mixes puzzles with video game violence. Set in a depressed future United States, where most people escape into virtual reality, it features a bunch of tough-talking teens fighting to keep their online playground out of the hands of an evil corporation.&lt;/p&gt;
" />
<meta property="description" content="Exciting, funny, futuristic thriller about online games." />
<div class="ratings-small star rating-5 field_stars_rating csm_review"></div>
</div></div></div>  </div>


</div>

<div class="panel-pane pane-entity-field pane-node-field-one-liner"  >
  
      
  
  <div class="pane-content">
    <div class="field field-name-field-one-liner field-type-text field-label-hidden"><div class="field-items"><div class="field-item even">Exciting, funny, futuristic thriller about online games.</div></div></div>  </div>

  
  </div>
<div class="panel-pane pane-product-subtitle"  >
  
      
  
  <div class="pane-content">
    <div class="product-subtitle csm_book"><div class="item-list"><ul><li class="first"><a href="/search/Ernest%20Cline">Ernest Cline</a></li>
<li><a href="/reviews/category/book/genre/science-fiction-293">Science Fiction</a></li>
<li class="last">2011</li>
</ul></div></div>  </div>

  
  </div>
<div class="panel-pane pane-review-tools"  >
  
      
  
  <div class="pane-content">
    <div class="tool flag-tool"><span class="flag-wrapper flag-flag-favorites"><a href="/user/register?destination=node/2182051" class="flag flag-action"><span class="text">Save</span></a></span></div><div class="tool user-review-tool"><a href="/user/register?destination=/node/add/csm-user-review%3Fnid%3D2182051&amp;source=add-user-review">Rate book</a></div><div class="tool share-links-tool"><a href="?width=660&amp;height=420&amp;inline=true#mobile-fixed-social-icons" class="share-overlay colorbox-inline">Share</a></div><div class="tool buy-links-tool"><a href="#buy-links-overlay" class="buy-link-tool" data-nid="2182051">Read or buy</a></div>  </div>

  
  </div>
<div class="panel-pane pane-entity-field pane-node-field-term-review-tags"  >
  
      
  
  <div class="pane-content">
    <div class="field field-name-field-term-review-tags field-type-taxonomy-term-reference field-label-hidden"><div class="field-items"><div class="field-item even"><span class="csm-review-term-tid"><span class="name">Popular with kids</span></span><span class="csm-review-term-tid"><span class="name">Parents recommend</span></span></div></div></div>  </div>

  
  </div>
</div>
      </div>
      <div class="panel-content-top-right panel-panel">
        <div class="inside"><div class="panel-pane pane-user-review-statistics stats-adult stats-adult"  >
  
        <h2 class="pane-title">
      Parents say    </h2>
    
  
  <div class="pane-content">
    
<div class="user-review-statistics adult">
<div class="stat-wrapper age">age 14+</div><div class="ratings-small star rating-4 field-stars-rating csm-review"></div><div class="see-all">Based on <a href="/book-reviews/ready-player-one/user-reviews/adult" class="link-all-user-reviews adult">29 reviews</a></div>
</div>  </div>

  
  </div>
<div class="panel-pane pane-user-review-statistics stats-child stats-child"  >
  
        <h2 class="pane-title">
      Kids say    </h2>
    
  
  <div class="pane-content">
    
<div class="user-review-statistics child">
<div class="stat-wrapper age">age 13+</div><div class="ratings-small star rating-5 field-stars-rating csm-review"></div><div class="see-all">Based on <a href="/book-reviews/ready-player-one/user-reviews/child" class="link-all-user-reviews child">70 reviews</a></div>
</div>  </div>

  
  </div>
<div class="panel-pane pane-digital-links"  id="buy-links-list" >
  
      
  
  <div class="pane-content">
    <div class="buy-links"><a href="/book-reviews/ready-player-one" class="buy-button active" data-nid="2182051">Get it now</a><div class="buy-links-wrapper"><p class="searching">Searching for streaming and purchasing options ...</p></div></div><div class="buy-link-disclaimer"><p>Common Sense is a nonprofit organization. Your purchase helps us remain independent and ad-free.</p></div><div class="buy-links-panel" id="buy-links-overlay"><div class="buy-links"><h3 class="buy-text">Get it now on</h3><div class="buy-links-wrapper"><p class="searching">Searching for streaming and purchasing options ...</p></div></div><div class="buy-link-disclaimer"><p>Common Sense is a nonprofit organization. Your purchase helps us remain independent and ad-free.</p></div></div>  </div>

  
  </div>
</div>
      </div>
    </div>

    <div class="panel-content-top-bottom panel-panel clearfix">
      <div class="inside"></div>
    </div>
  </div>

  <div class="center-wrapper">
    <div class="inside-center-wrapper">
      <div class="panel-content-mid panel-panel clearfix">
        <div class="inside"></div>

        <div class="panel-content-mid-main panel-panel">
          <div class="inside"><div class="panel-pane pane-entity-field pane-node-field-collection-content-grid"  >
  
        <h2 class="pane-title">
      A lot or a little?    </h2>
    
  
  <div class="pane-content">
    <h4 class="subhead">The parents' guide to what's in this book.</h4><div class="field-collection-container clearfix"><div class="field field-name-field-collection-content-grid field-type-field-collection field-label-hidden"><div class="field-items"><div class="field-item even"><div class="field-collection-view clearfix view-mode-full" id="content-grid-item-educational"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477075" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-1 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type educational"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Educational Value</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>The narrative is filled with trivia about the 1980s and the early days of computer gaming.</p>
</div></div></div>  </div>
</div>
</div></div><div class="field-item odd"><div class="field-collection-view clearfix view-mode-full" id="content-grid-item-message"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477077" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-3 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type message"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Positive Messages</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>The protagonist learns that he must rely on the help of others if he has any chance of winning the contest. He also discovers the pleasures of life outside a computer simulation.</p>
</div></div></div>  </div>
</div>
</div></div><div class="field-item even"><div class="field-collection-view clearfix view-mode-full" id="content-grid-item-role_model"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477078" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-4 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type role_model"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Positive Role Models &amp; Representations</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>Protagonist Wade and his online cohorts are brave and resourceful, determined to keep the OASIS gaming world free for all citizens.</p>
</div></div></div>  </div>
</div>
</div></div><div class="field-item odd"><div class="field-collection-view clearfix view-mode-full field-collection-view-final" id="content-grid-item-violence"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477080" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-3 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type violence plus"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Violence</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>The villains blow up the trailer park where the protagonist's aunt lives, but the protagonist learns the news second-hand. A secondary character is thrown out a window, but the act is not depicted.</p>
</div></div></div>  </div>
</div>
</div></div><div class="field-item even"><div class="field-collection-view clearfix view-mode-full" id="content-grid-item-sex"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477079" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-1 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type sex plus"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Sex</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>Some flirting and speculation of what the real bodies of the players might look like. In one chapter, there's mention of blow-up sex dolls, online brothels, and masturbation. </p>
</div></div></div>  </div>
</div>
</div></div><div class="field-item odd"><div class="field-collection-view clearfix view-mode-full" id="content-grid-item-language"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477076" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-4 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type language plus"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Language</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>The gamers engage in "trash talk" during their encounters and use variations of "f--k."</p>
</div></div></div>  </div>
</div>
</div></div><div class="field-item even"><div class="field-collection-view clearfix view-mode-full" id="content-grid-item-consumerism"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477073" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-2 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type consumerism"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Consumerism</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>Most characters in this futuristic world have very few material possessions, but many gamers try to save enough money to afford expensive computer peripherals. The online world is full of consumer items that can be purchased with virtual credits.</p>
</div></div></div>  </div>
</div>
</div></div><div class="field-item odd"><div class="field-collection-view clearfix view-mode-full" id="content-grid-item-drugs"><div class="entity entity-field-collection-item field-collection-item-field-collection-content-grid clearfix" about="/field-collection/field-collection-content-grid/477074" typeof="">
  <div class="content">
    <div class="field field-name-field-content-grid-rating field-type-list-integer field-label-hidden"><div class="field-items"><div class="field-item even"><div class="content-grid-rating content-grid-1 field_content_grid_rating field_collection_content_grid"></div></div></div></div><div class="field field-name-field-content-grid-type field-type-list-text field-label-hidden field-content-grid-type drugs plus"><div class="field-items"><div class="field-item even"><span class="sprite-cover">Drinking, Drugs &amp; Smoking</span></div></div></div><div class="field field-name-field-content-grid-rating-text field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>Alcohol use and smoking are lightly depicted in some of the online settings.</p>
</div></div></div>  </div>
</div>
</div></div></div></div><div class="foot"><p><a href="/plus" class="link">Set limits for violence and more with Plus</a></p></div></div>  </div>

  
  </div>
<div class="shutter-summary-pane panel-pane pane-entity-field pane-node-field-parents-need-to-know with-foot" >
      <h2 class="pane-title">What parents need to know</h2>
  
  <div class="pane-content">
    <div class="inner-wrapper">
    <div class="field field-name-field-parents-need-to-know field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>Parents need to know that this humorous science fiction thriller deals with a high-stakes online contest that mixes puzzles with video game violence. Set in a depressed future United States, where most people escape into virtual reality, it features a bunch of tough-talking teens fighting to keep their online playground out of the hands of an evil corporation.</p>
</div></div></div>    </div>

    <div class="shutter-summary">

      <div class="foot"><p><strong>Wondering if Ready Player One is OK for your kid?</strong></p><p>Set preferences and get age-appropriate recommendations with Common Sense Media Plus. <a href="/plus" class="link link--cta">Join now</a></p></div>
      <a href="#" aria-label="Continue reading about what parents need to know" class="more">Continue reading</a>
      <a href="#" class="less hide">Show less</a>
    </div>
  </div>
</div>
<div class="panel-pane pane-custom pane-2 csm-review-subscribe-link show-mobile pane-csm-review-subscribe"  >
  
        <h2 class="pane-title">
      Stay up to date on new reviews.    </h2>
    
  
  <div class="pane-content">
    Get full reviews, ratings, and advice delivered weekly to your inbox. 
<a href="/newsletters" class="csm-button" target="_blank">Subscribe</a>  </div>

  
  </div>
<div class="panel-pane pane-panels-mini pane-reviews-user-reviews"  >
  
        <h2 class="pane-title">
      User Reviews    </h2>
    
  
  <div class="pane-content">
    <div class="panel-display panel-1col clearfix" id="mini-panel-reviews_user_reviews">
  <div class="panel-panel panel-col">
    <div><div id="tabs-reviews-user-reviews-middle"><div class="item-list"><ul class="resp-tabs-list"><li class="tabs tab--parents-say first" aria-label="Parent user reviews">Parents say</li>
<li class="tabs tab--kids-say last" aria-label="Kid user reviews">Kids say</li>
</ul></div><div class="resp-tabs-container"><div id="tabs-reviews-user-reviews-middle-1"><div class="panel-pane pane-views-panes pane-user-reviews-view-user-reviews-block-pane"  >
  
      
  
  <div class="pane-content">
    <div class="view view-user-reviews-view view-id-user_reviews_view view-display-id-user_reviews_block_pane view-dom-id-cfffc9c7a8ed1b62c7618f2f20e5e415">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first clearfix">
    
<div class="user-review-meta">
  <span class="views-field views-field-uid-1 user-one-liner">Adult</span>      <span class="views-field views-field-name">Written by<a href="/users/mellypie76" title="View user profile." class="username" xml:lang="" about="/users/mellypie76" typeof="sioc:UserAccount" property="foaf:name" datatype="">mellypie76</a></span>    <span class="views-field views-field-created">August 20, 2017</span></div>
<div class="user-review-content">
  <div class="views-field views-field-field-review-recommended-age rating-field"><div class="csm-green-age"><span class="checkmark-icon"></span>age 18+</div></div>  <div class="views-field views-field-field-stars-rating rating-field"><div class="ratings-small star rating-4 field-stars-rating csm-user-review"></div></div>
  <div class="review-wrapper">
          <h4 class="views-field views-field-field-user-review-title user-review-title"><a href="/book-reviews/ready-player-one/user-reviews/adult">Far too much language, even for older teens</a></h4>    
    
    
    <div class="user-review-ops">
              <div class="other-ops-wrapper">
          <span class="flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-5754286">
      <a href="/flag/confirm/flag/flag_abuse_node/5754286?destination=node/2182051" title="" class="flag flag-action flag-link-confirm" rel="nofollow"><span class="text">Report this review</span></a><span class="flag-throbber">&nbsp;</span>
    </span>
      </div>
            </div>
  </div>
</div>
  </div>
  <div class="views-row views-row-2 views-row-even views-row-last clearfix">
    
<div class="user-review-meta">
  <span class="views-field views-field-uid-1 user-one-liner">Parent of a 5, 8,  and 12-year-old</span>      <span class="views-field views-field-name">Written by<a href="/users/emily55555" title="View user profile." class="username" xml:lang="" about="/users/emily55555" typeof="sioc:UserAccount" property="foaf:name" datatype="">Emily55555</a></span>    <span class="views-field views-field-created">November 21, 2015</span></div>
<div class="user-review-content">
  <div class="views-field views-field-field-review-recommended-age rating-field"><div class="csm-green-age"><span class="checkmark-icon"></span>age 14+</div></div>  <div class="views-field views-field-field-stars-rating rating-field"><div class="ratings-small star rating-4 field-stars-rating csm-user-review"></div></div>
  <div class="review-wrapper">
          <h4 class="views-field views-field-field-user-review-title user-review-title"><a href="/book-reviews/ready-player-one/user-reviews/adult">Tech nerds will absolutely love it </a></h4>    
          <div class="views-field views-field-field-user-review-review user-review-text">I read this and it has a lot of language that is inappropriate for most tweens. Also has sexual content not described in this review. Masturbation and other ref... <a href="/book-reviews/ready-player-one/user-reviews/adult" class="views-more-link">Continue reading</a></div>    
    
    <div class="user-review-ops">
              <div class="other-ops-wrapper">
          <span class="flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-5262816">
      <a href="/flag/confirm/flag/flag_abuse_node/5262816?destination=node/2182051" title="" class="flag flag-action flag-link-confirm" rel="nofollow"><span class="text">Report this review</span></a><span class="flag-throbber">&nbsp;</span>
    </span>
      </div>
            </div>
  </div>
</div>
  </div>
    </div>
  
  
  
  
      <div class="view-footer">
      <p><span class="wrapper-write"><a href="/user/register?destination=/node/add/csm-user-review%3Fnid%3D2182051&amp;source=add-user-review" class="csm-button">Add your rating</a></span><span class="wrapper-see-all">See all <a href="/book-reviews/ready-player-one/user-reviews/adult" class="see-all">29 parent reviews</a>.</span></p>    </div>
  
  
</div>  </div>

  
  </div>
</div><div id="tabs-reviews-user-reviews-middle-2"><div class="panel-pane pane-views-panes pane-user-reviews-view-user-reviews-block-pane"  >
  
      
  
  <div class="pane-content">
    <div class="view view-user-reviews-view view-id-user_reviews_view view-display-id-user_reviews_block_pane view-dom-id-f157d56d2b7b072682fc598d595fda30">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first clearfix">
    
<div class="user-review-meta">
  <span class="views-field views-field-uid-1 user-one-liner">Kid, 11 years old</span>    <span class="views-field views-field-created">July 14, 2014</span></div>
<div class="user-review-content">
  <div class="views-field views-field-field-review-recommended-age rating-field"><div class="csm-green-age"><span class="checkmark-icon"></span>age 13+</div></div>  <div class="views-field views-field-field-stars-rating rating-field"><div class="ratings-small star rating-5 field-stars-rating csm-user-review"></div></div>
  <div class="review-wrapper">
          <h4 class="views-field views-field-field-user-review-title user-review-title"><a href="/book-reviews/ready-player-one/user-reviews/child">A geeks' dream (but anyone would love it:)</a></h4>    
          <div class="views-field views-field-field-user-review-review user-review-text">When I finished Ready Player One I was stunned. It had everything that a good book should have; plot twists, fore shadowing, characters with personality, action... <a href="/book-reviews/ready-player-one/user-reviews/child" class="views-more-link">Continue reading</a></div>    
    
    <div class="user-review-ops">
              <div class="other-ops-wrapper">
          <span class="flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-4932681">
      <a href="/flag/confirm/flag/flag_abuse_node/4932681?destination=node/2182051" title="" class="flag flag-action flag-link-confirm" rel="nofollow"><span class="text">Report this review</span></a><span class="flag-throbber">&nbsp;</span>
    </span>
      </div>
            </div>
  </div>
</div>
  </div>
  <div class="views-row views-row-2 views-row-even views-row-last clearfix">
    
<div class="user-review-meta">
  <span class="views-field views-field-uid-1 user-one-liner">Teen, 13 years old</span>      <span class="views-field views-field-name">Written by<a href="/users/thedude57447434" title="View user profile." class="username" xml:lang="" about="/users/thedude57447434" typeof="sioc:UserAccount" property="foaf:name" datatype="">Thedude57447434</a></span>    <span class="views-field views-field-created">September 11, 2013</span></div>
<div class="user-review-content">
  <div class="views-field views-field-field-review-recommended-age rating-field"><div class="csm-green-age"><span class="checkmark-icon"></span>age 13+</div></div>  <div class="views-field views-field-field-stars-rating rating-field"><div class="ratings-small star rating-5 field-stars-rating csm-user-review"></div></div>
  <div class="review-wrapper">
          <h4 class="views-field views-field-field-user-review-title user-review-title"><a href="/book-reviews/ready-player-one/user-reviews/child">My review</a></h4>    
          <div class="views-field views-field-field-user-review-review user-review-text">This is a must read for anyone who is interested in the 1980&#039;s the movies the music the video games everything is to the T and I liked it a very Orwellian... <a href="/book-reviews/ready-player-one/user-reviews/child" class="views-more-link">Continue reading</a></div>    
    
    <div class="user-review-ops">
              <div class="other-ops-wrapper">
          <span class="flag-wrapper flag-flag-abuse-node flag-flag-abuse-node-4399876">
      <a href="/flag/confirm/flag/flag_abuse_node/4399876?destination=node/2182051" title="" class="flag flag-action flag-link-confirm" rel="nofollow"><span class="text">Report this review</span></a><span class="flag-throbber">&nbsp;</span>
    </span>
      </div>
            </div>
  </div>
</div>
  </div>
    </div>
  
  
  
  
      <div class="view-footer">
      <p><span class="wrapper-write"><a href="/user/register?destination=/node/add/csm-user-review%3Fnid%3D2182051&amp;source=add-user-review" class="csm-button">Add your rating</a></span><span class="wrapper-see-all">See all <a href="/book-reviews/ready-player-one/user-reviews/child" class="see-all">70 kid reviews</a>.</span></p>    </div>
  
  
</div>  </div>

  
  </div>
</div></div></div></div>
  </div>
</div>
  </div>

  
  </div>
<div class="shutter-summary-pane panel-pane pane-entity-field pane-node-field-what-is-story" >
      <h2 class="pane-title">What's the story?</h2>
  
  <div class="pane-content">
    <div class="inner-wrapper">
    <div class="field field-name-field-what-is-story field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>Like nearly everyone on the depleted, depressed Planet Earth, high school student Wade Watts dreams of winning the untold billions at stake in a contest devised by James Halliday, late inventor of OASIS, the immersive virtual utopia that allows anyone to plug in and leave the real world behind. Obsessed with Reagan-era pop culture and technology, Halliday creates a series of puzzles that can only be solved by someone with an encyclopedic knowledge of science fiction, player-vs.-player fighting strategies, and the software mogul's own personal history. As the stakes grow higher and players begin to die in the real world, Wade must decide whether he can trust anyone else in his quest for the ultimate prize.</p>
</div></div></div>    </div>

    <div class="shutter-summary">

      
      <a href="#" aria-label="Continue reading what's the story" class="more">Continue reading</a>
      <a href="#" class="less hide">Show less</a>
    </div>
  </div>
</div>
<div class="shutter-summary-pane panel-pane pane-entity-field pane-node-field-any-good" >
      <h2 class="pane-title">Is it any good?</h2>
  
  <div class="pane-content">
    <div class="inner-wrapper">
    <div class="field field-name-field-any-good field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>Layered with inside jokes and sly references that will appeal to a wide range of readers, READY PLAYER ONE is a smart, funny thriller that both celebrates and critiques online culture. The author is accomplished at developing suspense even though much of the narrative is set in virtual reality. The puzzles are intriguing, the action is intense, and the payoff at the end is worth all the buildup.</p>
</div></div></div>    </div>

    <div class="shutter-summary">

      
      <a href="#" aria-label="Continue reading is it any good" class="more">Continue reading</a>
      <a href="#" class="less hide">Show less</a>
    </div>
  </div>
</div>
<div class="shutter-summary-pane panel-pane pane-entity-field pane-node-field-family-topics" >
      <h2 class="pane-title">Talk to your kids about ...</h2>
  
  <div class="pane-content">
    <div class="inner-wrapper">
    <div class="field field-name-field-family-topics field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><div class="item-list"><ul class="textformatter-list"><li class="first"><p>Families can talk about making predictions of the future based on current trends. Does the setting of the book seem plausible?  What assumptions is the author making about changes in politics and economics between now and 2044?</p>
</li>
<li><p>What are the advantages and the disadvantages of having so much information available 24/7? How might near-ubiquitous social media affect our culture?</p>
</li>
<li><p>The protagonist, Wade Watts, spends a lot of time hiding his location and true identity. How do his precautions compare to the strategies you use to work online safely?</p>
</li>
<li class="last"><p>Do you think the contest in the novel could really be solved by one person working entirely alone? What are the advantages or disadvantages of working as a team?</p>
</li>
</ul></div></div></div></div>    </div>

    <div class="shutter-summary">

      
      <a href="#" aria-label="Continue reading talk to your kids about" class="more">Continue reading</a>
      <a href="#" class="less hide">Show less</a>
    </div>
  </div>
</div>
<div class="shutter-summary-pane panel-pane pane-product-details" >
      <h2 class="pane-title">Book details</h2>
  
  <div class="pane-content">
    <div class="inner-wrapper">
    <div class="item-list"><ul id="review-product-details-list"><li class="0 first"><strong class="label">Author:</strong> <a href="/search/Ernest%20Cline" property="author" typeof="schema:Person" vocab="http://schema.org"><meta property="name" content="Ernest Cline" />Ernest Cline</a></li>
<li class="1"><strong class="label">Genre:</strong> <a href="/reviews/category/book/genre/science-fiction-293">Science Fiction</a></li>
<li class="themes"><strong class="label">Topics:</strong> <a href="/reviews/category/book/topic/stem-87792">STEM</a></li>
<li class="types"><strong class="label">Book type:</strong> <a href="/search?f%5B0%5D=field_reference_review_ent_prod%253Afield_term_book_type%3A144">Fiction</a></li>
<li class="publishers"><strong class="label">Publisher:</strong> <a href="/search?f%5B0%5D=field_reference_review_ent_prod%253Afield_term_book_publishers%3A374" property="publisher" typeof="schema:Organization" vocab="http://schema.org"><meta property="name" content="Crown Publishing Group" />Crown Publishing Group</a></li>
<li class="2"><strong class="label">Publication date:</strong> August 16, 2011</li>
<li class="3"><strong class="label">Number of pages:</strong> 376</li>
<li class="4 last"><strong class="label">Last updated:</strong> March 29, 2019</li>
</ul></div>    </div>

    <div class="shutter-summary">

      
      <a href="#" aria-label="Continue reading about the book details" class="more">Continue reading</a>
      <a href="#" class="less hide">Show less</a>
    </div>
  </div>
</div>
</div>
        </div>
        <div class="panel-content-mid-right panel-panel">
          <div class="inside"><div class="panel-pane pane-views-panes pane-review-character-strength-terms-review-themes-pane"  >
  
        <h2 class="pane-title">
      Themes &amp; Topics    </h2>
    
  
  <div class="pane-content">
    <div class="view view-review-character-strength-terms view-id-review_character_strength_terms view-display-id-review_themes_pane view-dom-id-c74ec3db6bdbc94349b54a27d3b59a40">
            <div class="view-header">
      <p>Browse titles with similar subject matter.</p>
    </div>
  
  
  
      <div class="view-content">
            <div class="slick slick--view--review-character-strength-terms slick--view--review-character-strength-terms--review-themes-pane slick--skin--default slick--optionset--carousel-two-items unslick" id="slick-views-review-character-strength-terms-1">
  
                              
  <div class="views-field views-field-field-term-image">        <a href="/reviews/category/book/topic/STEM-87792" class="css-link"></a><img typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/term_image_128w/public/term-images/themes/stem-theme.jpg?itok=5Zb6MoEa" width="128" height="147" alt="Click to see more titles about STEM" title="Click to see more titles about STEM" />  </div>  
          <div class="name-wrapper">    
  <div class="views-field views-field-name-1">        <span class="field-content">STEM</span>  </div>  
  <div class="views-field views-field-nothing-2">        <span class="field-content">See all</span>  </div>  
          </div>              
                      
  </div>
      </div>
  
  
  
  
  
  
</div>  </div>

  
  </div>
<div class="panel-pane pane-entity-field pane-node-field-top-picks-header"  >
  
        <h2 class="pane-title">
      For kids who love science fiction    </h2>
    
  
  <div class="pane-content">
    <div class="field field-name-field-top-picks-header field-type-text field-label-hidden"><div class="field-items"><div class="field-item even"></div></div></div>  </div>

  
  </div>
<div class="panel-pane pane-entity-field pane-node-field-top-picks"  >
  
      
  
  <div class="pane-content">
    <div class="field field-name-field-top-picks field-type-entityreference field-label-hidden"><div class="field-items"><div class="field-item even"><div class="review-other-top-picks-list"><a href="/lists/science-fiction-books">Science Fiction Books</a></div></div><div class="field-item odd"><div class="review-other-top-picks-list"><a href="/lists/science-fiction-tv">Science Fiction TV</a></div><a href="/book-lists" id="reviews-more-top-picks-lists">See all recommended book lists</a></div></div></div>  </div>

  
  </div>
<div class="panel-pane pane-views-panes pane-review-other-choices-view-review-other-choices-pane"  >
  
        <h2 class="pane-title">
      Our editors recommend    </h2>
    
  
  <div class="pane-content">
    <div class="view view-review-other-choices-view view-id-review_other_choices_view view-display-id-review_other_choices_pane view-dom-id-d4d92e5b1b7a100bf5269b599a6ade9e">
        
  
  
      <div class="view-content">
            <div class="slick slick--view--review-other-choices-view slick--view--review-other-choices-view--review-other-choices-pane slick--skin--default slick--optionset--carousel-one-item slick--slider slick--float slick--ondemand" id="slick-views-review-other-choices-view-2">
      <div id="slick-views-review-other-choices-view-2-slider" class="slick__slider" data-slick="{&quot;mobileFirst&quot;:true,&quot;useTransform&quot;:true}">
  
          <div class="slick__slide slide slide--0">      <div class="slide__content">              
  <div class="views-field views-field-field-product-image">        <a href="/book-reviews/time-riders"><img class="lazy" data-srcset="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_mobile_aspect_switcher/public/product-images/csm-book/time-riders.jpg?itok=xPwEHyyE 481w, https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/time-riders.jpg?itok=ZrvO_ADR 768w, https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/time-riders.jpg?itok=ZrvO_ADR 970w" typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="100" height="150" alt="Time Riders Book Poster Image" title="Time Riders Book Poster Image" /><noscript><img typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/time-riders.jpg?itok=ZrvO_ADR" width="100" height="150" alt="Time Riders Book Poster Image" title="Time Riders Book Poster Image" /></noscript></a>  </div>  
  <div class="views-field views-field-title">        <span class="field-content csm_book"><a href="/book-reviews/time-riders">Time Riders</a></span>  </div>  
  <div class="views-field views-field-field-one-liner">        Time-traveling thriller puts three teens in NYC on 9/11.  </div>  
  <div class="views-field views-field-field-review-recommended-age">        <div class="csm-green-age"><span class="checkmark-icon"></span>age 12+</div>  </div>            
                </div>  </div>          <div class="slick__slide slide slide--1">      <div class="slide__content">              
  <div class="views-field views-field-field-product-image">        <a href="/book-reviews/unwind-unwind-dystology-book-1"><img class="lazy" data-srcset="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_mobile_aspect_switcher/public/product-images/csm-book/7882-orig.jpg?itok=rre7BsbN 481w, https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/7882-orig.jpg?itok=DKfTXD2t 768w, https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/7882-orig.jpg?itok=DKfTXD2t 970w" typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="100" height="150" alt="Unwind: Unwind Dystology, Book 1 Book Poster Image" title="Unwind: Unwind Dystology, Book 1 Book Poster Image" /><noscript><img typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/7882-orig.jpg?itok=DKfTXD2t" width="100" height="150" alt="Unwind: Unwind Dystology, Book 1 Book Poster Image" title="Unwind: Unwind Dystology, Book 1 Book Poster Image" /></noscript></a>  </div>  
  <div class="views-field views-field-title">        <span class="field-content csm_book"><a href="/book-reviews/unwind-unwind-dystology-book-1">Unwind: Unwind Dystology, Book 1</a></span>  </div>  
  <div class="views-field views-field-field-one-liner">        Shocking sci-fi gives teens plenty to get wound up about.  </div>  
  <div class="views-field views-field-field-review-recommended-age">        <div class="csm-green-age"><span class="checkmark-icon"></span>age 13+</div>  </div>            
                </div>  </div>          <div class="slick__slide slide slide--2">      <div class="slide__content">              
  <div class="views-field views-field-field-product-image">        <a href="/book-reviews/the-knife-of-never-letting-go-chaos-walking-book-1"><img class="lazy" data-srcset="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_mobile_aspect_switcher/public/product-images/csm-book/9358-orig.jpg?itok=2RA5jkkP 481w, https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/9358-orig.jpg?itok=HHSRHxnA 768w, https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/9358-orig.jpg?itok=HHSRHxnA 970w" typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/transparent.gif" width="100" height="150" alt="The Knife of Never Letting Go (Chaos Walking, Book 1) Book Poster Image" title="The Knife of Never Letting Go (Chaos Walking, Book 1) Book Poster Image" /><noscript><img typeof="foaf:Image" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher/public/product-images/csm-book/9358-orig.jpg?itok=HHSRHxnA" width="100" height="150" alt="The Knife of Never Letting Go (Chaos Walking, Book 1) Book Poster Image" title="The Knife of Never Letting Go (Chaos Walking, Book 1) Book Poster Image" /></noscript></a>  </div>  
  <div class="views-field views-field-title">        <span class="field-content csm_book"><a href="/book-reviews/the-knife-of-never-letting-go-chaos-walking-book-1">The Knife of Never Letting Go (Chaos Walking, Book 1)</a></span>  </div>  
  <div class="views-field views-field-field-one-liner">        Exciting but violent dystopian thriller for teens.  </div>  
  <div class="views-field views-field-field-review-recommended-age">        <div class="csm-green-age"><span class="checkmark-icon"></span>age 14+</div>  </div>            
                </div>  </div>    
      </div>
    <nav class="slick__arrow">
      <button type="button" data-role="none" class="slick-prev" aria-label="See previous review our editors recommend">Previous</button>            <button type="button" data-role="none" class="slick-next" aria-label="See next review our editors recommend">Next</button>    </nav>
  </div>
      </div>
  
  
  
  
  
  
</div>  </div>

  
  </div>
<div class="panel-pane pane-views-panes pane-review-top-advice-articles-list"  >
  
        <h2 class="pane-title">
      Top advice and articles    </h2>
    
  
  <div class="pane-content">
    <div class="view view-review-top-advice-articles view-id-review_top_advice_articles view-display-id-list view-dom-id-651f2a207377c5ce4f792f8e0587d8fa">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
      
  <span class="views-field views-field-title">        <span class="field-content"><a href="/blog/how-comics-helped-my-kid-love-reading">How Comics Helped My Kid Love Reading</a></span>  </span>  </div>
    </div>
  
  
  
  
  
  
</div>  </div>

  
  </div>
<div class="panel-pane pane-custom pane-3 review-disclaimer"  >
  
      
  
  <div class="pane-content">
    <p>Common Sense Media's unbiased ratings are created by expert reviewers and aren't influenced by the product's creators or by any of our funders, affiliates, or partners.</p>
<p><a class="csm-button reversed" href="/about-us/our-mission/about-our-ratings">See how we rate</a></p>
  </div>

  
  </div>
</div>
        </div>
      </div>

      <div class="panel-content-mid-bottom panel-panel clearfix">
        <div class="inside"><div class="panel-pane pane-block pane-csm-ui-about-buy-buttons tool-tip-pane"  id="csm-tooltip-about-buy-buttons" >
  
      
  
  <div class="pane-content">
    <div class="tool-top-overlay"><h2 class="pane-title">About these links</h2><p>Common Sense Media, a nonprofit organization, earns a small affiliate fee from Amazon or iTunes when you use our links to make a purchase. Thank you for your support.<br /></p><p class="more"><a href="/affiliate-links">Read more</a></p></div>  </div>

  
  </div>
<div class="panel-pane pane-custom pane-1 tool-tip-pane"  id="csm-tooltip-about-our-ratings" >
  
      
  
  <div class="pane-content">
    <div class="tool-top-overlay">
<p>Our ratings are based on child development best practices. We display the minimum age for which content is developmentally appropriate. The star rating reflects overall quality.</p>
<p class="more"><a href="/about-us/our-mission/about-our-ratings" target="_blank">Learn how we rate</a></p>
</div>
  </div>

  
  </div>
<div class="panel-pane pane-social-sharing-icons-favorites"  id="mobile-fixed-social-icons" >
  
      
  
  <div class="pane-content">
    <div class="social-sharing-icons social-sharing-icons-favorites"><script type="text/plain" class="optanon-category-C0003">
      document.getElementById('csm-social-button-consent-wrapper').innerHTML = '<!-- facebook -->    <span class="zocial-item facebook-item"><a title="Share this page on Facebook" href="#" class="social-facebook-icon zocial icon facebook" target="_blank" rel="noopener"></a><a title="Share this page on Facebook" href="#" class="social-facebook-icon label">Facebook</a></span><!-- twitter -->    <span class="zocial-item twitter-item"><a title="Tweet this page" href="#" class="social-twitter-icon zocial icon twitter" target="_blank" rel="noopener"></a><a title="Tweet this page" href="#" class="social-twitter-icon label">Twitter</a></span>';
      </script><span id="csm-social-button-consent-wrapper"></span><!-- pinterest -->
    <span class="zocial-item pinterest-item"><a title="Pin this page on Pinterest" href="#" class="social-pinterest-icon zocial icon pinterest" target="_blank" rel="noopener" data-pin-do="buttonPin" data-pin-config="above"></a><a title="Pin this page on Pinterest" href="#" class="social-pinterest-icon label">Pinterest</a></span>

    <!-- email -->
    <span class="zocial-item email-item"><a title="Email this page" href="#" class="social-email-icon zocial icon email"></a><a title="Email this page" href="#" class="social-email-icon label">Email</a></span>

    <!-- print -->
    <span class="zocial-item"><a title="Print this page" href="#" class="social-print-icon icon-printer-outline zocial icon print"></a><a title="Print this page" href="#" class="social-print-icon icon-printer-outline label">Print</a></span>

    </div>  </div>

  
  </div>
</div>
      </div>
    </div>
  </div>

</div>
                  </div><!-- /#content -->
      </div><!-- /#main -->
    </div><!-- /#mainpage -->
  </div><!-- /#page -->
  <div class="push"></div> <!-- /.push -->
</div><!-- /#wrapper -->

<footer class="mainfooter">
  
  <div id="footerwrapper">
      <footer id="footer" class="region region-footer">
    <div id="block-csm-ui-site-footer-paragraph" class="block block-csm-ui first odd">

      
  
<div>Common Sense is the nation's leading nonprofit organization dedicated to improving the lives of kids and families by providing the trustworthy information, education, and independent voice they need to  thrive in the 21st century.</div>
<div>Headquartered in San Francisco, with offices in London, Los Angeles, New York, Phoenix, and Washington, D.C.</div>
</div>
<div id="block-menu-menu-global-footer" class="block block-menu even" role="navigation">

      
  <ul class="menu"><li class="menu__item is-expanded first expanded"><h2 class="footer-title">Learn More</h2><span class="footer-sideline"></span><ul class="menu"><li class="menu__item is-leaf first leaf"><a href="/about-us/our-mission" class="menu__link">About Us</a></li>
<li class="menu__item is-leaf leaf"><a href="https://www.commonsense.org/our-impact/" class="menu__link">Our Impact</a></li>
<li class="menu__item is-leaf leaf"><a href="/meet-our-team" class="menu__link">Meet Our Team</a></li>
<li class="menu__item is-leaf leaf"><a href="/about-us/jobs" class="menu__link">Careers</a></li>
<li class="menu__item is-leaf leaf"><a href="/meet-our-team/our-board" class="menu__link">Board of Directors</a></li>
<li class="menu__item is-leaf leaf"><a href="/meet-our-team/our-board#/advisors" class="menu__link">Board of Advisors</a></li>
<li class="menu__item is-leaf leaf"><a href="/about-us/our-partners" class="menu__link">Partners</a></li>
<li class="menu__item is-leaf leaf"><a href="/about-us/news/press-releases" class="menu__link">Press Room</a></li>
<li class="menu__item is-leaf leaf"><a href="/common-sense-annual-report" class="menu__link">Annual Report</a></li>
<li class="menu__item is-leaf last leaf help-center"><a href="https://commonsense.force.com/membersupport/s/" class="menu__link">Help Center</a></li>
</ul><div class="clear"></div></li>
<li class="menu__item is-expanded expanded"><h2 class="footer-title">Our Programs</h2><span class="footer-sideline"></span><ul class="menu"><li class="menu__item is-leaf first leaf"><a href="https://www.commonsensemedia.org" class="menu__link">Common Sense Media</a></li>
<li class="menu__item is-leaf leaf"><a href="https://www.commonsense.org/education/" class="menu__link">Common Sense Education</a></li>
<li class="menu__item is-leaf leaf"><a href="/kids-action" class="menu__link">Common Sense Kids Action</a></li>
<li class="menu__item is-leaf leaf"><a href="https://www.commonsense.org/education/digital-citizenship" class="menu__link">Digital Citizenship Program</a></li>
<li class="menu__item is-leaf leaf"><a href="/latino" class="menu__link">Latino Program</a></li>
<li class="menu__item is-leaf leaf"><a href="https://privacy.commonsense.org/" class="menu__link">Privacy Program</a></li>
<li class="menu__item is-leaf last leaf"><a href="/research" class="menu__link">Research Program</a></li>
</ul><div class="clear"></div></li>
<li class="menu__item is-expanded expanded"><h2 class="footer-title">Get Involved</h2><span class="footer-sideline"></span><ul class="menu"><li class="menu__item is-leaf first leaf"><a href="/donate" class="menu__link">Donate</a></li>
<li class="menu__item is-leaf leaf"><a href="https://www.commonsensemedia.org/plus" class="menu__link">Join as a Parent</a></li>
<li class="menu__item is-leaf leaf"><a href="https://www.commonsense.org/education/user/register" class="menu__link">Join as an Educator</a></li>
<li class="menu__item is-leaf leaf"><a href="https://www.commonsensemedia.org/user/register?destination=kids-action" class="menu__link">Join as an Advocate</a></li>
<li class="menu__item is-leaf last leaf"><a href="https://www.donotsell.org" class="menu__link">Enact Your CCPA Rights</a></li>
</ul><div class="clear"></div></li>
<li class="menu__item is-expanded last expanded help-center"><h2 class="footer-title">Help Center</h2><span class="footer-sideline"></span><ul class="menu"><li class="menu__item is-leaf first last leaf"><a href="https://commonsense.force.com/membersupport/s" class="menu__link">Help Center</a></li>
</ul><div class="clear"></div></li>
</ul><div class="clear"></div>
</div>
<div id="block-csm-ui-site-footer-social-links" class="block block-csm-ui odd">

      
  
<div class="inner-wrapper">
  <h2 id="connect-header">Follow Common Sense Media</h2>
  <div id="connect-social-links" class="social-links clearfix">
    <div class="social-link-wrapper clearfix">
      
        <div class="social-item facebook first">
          <div id="OptIn-social-item-0" class="facebook first"></div>
        </div>
        <script type="text/plain" class="optanon-category-C0003">
        document.getElementById('OptIn-social-item-0').innerHTML = '<a href="https://www.facebook.com/commonsensemedia" class="zocial icon facebook first loaded" target="_blank" rel="noopener noreferrer"></a>';
        </script>
      

        <div class="social-item twitter">
          <div id="OptIn-social-item-1" class="twitter"></div>
        </div>
        <script type="text/plain" class="optanon-category-C0003">
        document.getElementById('OptIn-social-item-1').innerHTML = '<a href="https://twitter.com/commonsense" class="zocial icon twitter loaded" target="_blank" rel="noopener noreferrer"></a>';
        </script>
      

<div class="social-item instagram">
  <div class="instagram"><a href="https://www.instagram.com/commonsenseorg" class="zocial icon instagram" target="_blank" rel="noopener noreferrer"></a></div>
</div>


<div class="social-item youtube">
  <div class="youtube"><a href="https://www.youtube.com/user/CommonSenseMedia/featured" class="zocial icon youtube" target="_blank" rel="noopener noreferrer"></a></div>
</div>


<div class="social-item linkedin">
  <div class="linkedin"><a href="https://www.linkedin.com/company/common-sense-media" class="zocial icon linkedin" target="_blank" rel="noopener noreferrer"></a></div>
</div>

    </div>
  </div>
  <div class="clearfix"></div>
</div>

</div>
<div id="block-csm-ui-site-footer-site-search" class="block block-csm-ui even">

      
  
<div class="title">Search Common Sense Media</div>
<form name="footer-site-search" accept-charset="UTF-8" action="/search" method="POST">
  <input class="form-text" name="search-string" maxlength="128" placeholder="Find movies, books, and more ..." size="30" type="text" value="" aria-label="Find movies, books, and more ...">
  <input class="form-submit" type="submit" value="o">
</form>

</div>
<div id="block-csm-ui-site-footer-newsletter" class="block block-csm-ui odd">

      
  
<div class="sign-up-container">
  <div class="title">Subscribe to our newsletters</div>
  <div>
    <input class="form-text" maxlength="100" name="mail" placeholder="Add your email to get started." size="40" type="text" value="" aria-label="Add your email to get started.">
  </div>
  <button class="im-in">I'm in</button>
</div>

</div>
<div id="block-csm-ui-site-footer-copyright" class="block block-csm-ui last even">

      
  
<div>
  <div class="privacy-container">
    <div>
      <span><a href="/about-us/our-mission/privacy-policy">Privacy</a></span>
      <span><!-- OneTrust Cookies Settings button start -->
<button id="ot-sdk-btn" class="ot-sdk-show-settings"> Cookie Settings</button>
<!-- OneTrust Cookies Settings button end --></span>
      <span><a href="/about-us/our-mission/site-terms-use">Terms of use</a></span>
      <span><a href="/about-us/our-mission/community-guidelines">Community guidelines</a></span>
    </div>
    <div class="copy">&copy; Common Sense Media. All rights reserved. Common Sense and other associated names and logos are trademarks of Common Sense Media, a 501(c)(3) nonprofit organization (FEIN: 41-2024986).</div>
  </div>
</div>

</div>
  </footer>
  </div>

    <div class="region region-bottom">
    <div id="block-csm-ui-sticky-banner-dwellness-block" class="block block-csm-ui first odd block-csm-ui-sticky-banner-block">

      
  
<div class="bg"></div>
<div class="box-wrapper">
  <div class="box">
    <a href="#" class="close"><span>close(x)</span></a>
    <div class="signup-text"><span class="text"><a class="box" href="/resources-for-families-during-the-coronavirus-pandemic"><em>Get resources for navigating coronavirus closures.</em></a></span>
<a href="/resources-for-families-during-the-coronavirus-pandemic" class="button">Start here</a></div>
  </div>
</div>

</div>
<div id="block-csm-user-age-stage-selector-block" class="block block-csm-user last even">

        <h2 class="block__title block-title">Personalize your media recommendations.</h2>
    
  <form action="/user/register" method="get" id="csm-user-age-stage-selector-form-block" accept-charset="UTF-8"><div><input type="hidden" name="destination" value="recommendations" />
<input type="hidden" name="origin" value="node/6087334" />
<input type="hidden" name="skip_profile" value="1" />
<div class="instructions">How old is your kid?</div><div class="form-item form-type-select form-item-child-age">
 <select id="edit-age-stage-block" name="child_age" class="form-select"><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option></select>
</div>
<input class="btn btn--cta form-submit" type="submit" id="edit-age-stage-selector-submit-block" name="op" value="Let&#039;s go!" /><div class="reminder"><em>You'll have a chance to add more kids later.</em></div><div class="signup">Have an account? <a href="/user/login?destination=recommendations/watch" class="link--cta">Sign in</a></div><input type="hidden" name="form_build_id" value="form-XwzXr8GkIy4RI0GPnZJiF8RRD3Nn4CzFgNOQ3oTe0Vo" />
<input type="hidden" name="form_id" value="csm_user_age_stage_selector_form_block" />
</div></form>
</div>
  </div>
</footer><!-- /.mainfooter -->
    <div class="region region-page-bottom">
    
<!-- Begin Informize javascript code. -->
<script id="_informizely_script_tag" type="text/plain" class="optanon-category-C0003">
var IzWidget = IzWidget || {};
(function (d) {
  window.setTimeout(function() {
  var scriptElement = d.createElement('script');
  scriptElement.type = 'text/javascript'; scriptElement.async = true;
  scriptElement.src = "https://insitez.blob.core.windows.net/site/7ce7f683-82c0-46f7-85d3-de63c9754a25.js";
  var node = d.getElementById('_informizely_script_tag'); node.parentNode.insertBefore(scriptElement, node);
}, 300);
})(document);
</script>
<script type="text/plain" class="optanon-category-C0003">
var IzWidget = IzWidget || {};
IzWidget["insitez.ready"] = function (api) {
if (Drupal.settings.csm_informizely != undefined) {
  api.set("custom", { "country": Drupal.settings.csm_informizely.user.location.country });
}
};
</script>
<noscript><a href="https://www.informizely.com/">Informizely customer feedback surveys</a></noscript>
<!-- End Informizely code. -->
        </div>
<script src="https://d344emq0b7u044.cloudfront.net/sites/default/files/advagg_js/js__vrlPi_qHu66dr1pynuVckGwq3jrQIowgkBWnuMVc5Bg__NYwxZRYlbqALu9hRYQ_zusuRMatpQxK5waT6edv1zEE__fyJTdxdGUft3sQBhzxFVLle0XfxV8p67ahXnLMprbms.js"></script>
<script></script><script type="text/plain" class="optanon-category-C0002">
(function () {
window.setTimeout(function() {
var e = document.createElement('script'); e.async = true;
e.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.lightboxcdn.com/vendor/7d157562-fcf8-41c7-a361-88eb2165c02b/lightbox_inline.js?mb=' + (new Date().getTime());
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
}, 500);
})();
</script><script></script>
<script></script><script type="text/plain" class="optanon-category-C0002">
(function() {
window.setTimeout(function() {
var sz = document.createElement('script'); sz.async = true;
sz.src = '//siteimproveanalytics.com/js/siteanalyze_6149791.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sz, s);
}, 500);
})();
</script><script></script>
  </div> <!-- end body-wrapper -->
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"22bc04bf17","applicationID":"185559085","transactionName":"MgBWbBRUCEtTAU1eDQtKdVsSXAlWHRJYUAc6CFVWB1IDSm0MVlMHOhNdXRFqFllVBw==","queueTime":0,"applicationTime":1860,"atts":"HkdVGlxOG0U=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
` };

			let cheerThis = cheerio.load(res.body);
			let currBook = {};
			currBook.title = cheerThis('.pane-node-title.csm_book').text();
			let ageNonParsed = cheerThis('.csm-green-age').text().split(' ')[1]
			ageNonParsed = ageNonParsed.substring(0,ageNonParsed.length-4);
			currBook.ageRating = Number(ageNonParsed);		
			currBook.stars = Number(cheerThis('.ratings-small.star.field_stars_rating.csm_review')[0].attribs['class'].match(/[0-5]/)[0]);
			currBook.desc = cheerThis('.panel-pane.pane-entity-field.pane-node-field-one-liner').text();
			currBook.author = cheerThis('.product-subtitle.csm_book>.item-list>ul>li.first').text();
			currBook.authorFirstName = currBook.author.split(' ')[0];
			currBook.authorSurname = currBook.author.split(' ')[1];
			currBook.genre = cheerThis('.product-subtitle.csm_book>.item-list>ul>li:nth-child(2)').text();
			currBook.releaseDate = cheerThis('.product-subtitle.csm_book>.item-list>ul>li.last').text();
			currBook.parentAgeRating = chopOffTail(cheerThis('.user-review-statistics.adult>.stat-wrapper.age').text().split(' ')[1],1); // age rating, according to parents
		
			currBook.parentStars = Number(cheerThis('.user-review-statistics.adult>.ratings-small.star.field-stars-rating.csm-review')[0].attribs['class'].match(/[0-5]/)[0]); // stars, according to parents
			currBook.kidsAgeRating = chopOffTail(cheerThis('.user-review-statistics.child>.stat-wrapper.age').text().split(' ')[1],1);// age rating, according to kids
			currBook.kidsStars = Number(cheerThis('.user-review-statistics.child>.ratings-small.star.field-stars-rating.csm-review')[0].attribs['class'].match(/[0-5]/)[0]);// stars, according to kids
			currBook.eduValNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[0].attribs['class'].match(/[0-5]/)[0]) // educational value
			
			let y = cheerThis('.field-name-field-content-grid-rating-text').text().split('\n')

			
			currBook.eduValDesc = y[0];
			currBook.posMsgNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[1].attribs['class'].match(/[0-5]/)[0])//positive messages
			currBook.posMsgDesc = y[1];
			currBook.roleModelNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[2].attribs['class'].match(/[0-5]/)[0])// role models & representations
			currBook.roleModelDesc = y[2];
			currBook.violenceNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[3].attribs['class'].match(/[0-5]/)[0])// violence
			currBook.violenceDesc = y[3];
			currBook.sexNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[4].attribs['class'].match(/[0-5]/)[0])// sexy time
			currBook.sexDesc = y[4];
			currBook.consNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[6].attribs['class'].match(/[0-5]/)[0])// consumerism
			currBook.consDesc = y[6];
			currBook.drugsNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[7].attribs['class'].match(/[0-5]/)[0])// drinking, drugs & smoking
			currBook.drugsDesc = y[7];
			currBook.langNum = Number(cheerThis('.content-grid-rating.field_content_grid_rating.field_collection_content_grid')[5].attribs['class'].match(/[0-5]/)[0]) // bad words
			currBook.langDesc = y[5];
			for (let b in currBook) {
				if (currBook[b].toString() === currBook[b]) {
					currBook[b] = currBook[b].trim();
				}
				if (Number(currBook[b]) == currBook[b]) {
					currBook[b] = Number(currBook[b]);
				}
			}
			books.push(currBook);
			console.log("Scraped "+currBook.title);
			
			
			
