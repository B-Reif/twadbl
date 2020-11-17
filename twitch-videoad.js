twitch-videoad.js application/javascript
window.addEventListener("DOMContentLoaded", function() {
/*Black out and mute twitch ads, not a complete blocker.
Ublock Origin Settings -> Check I Am Advanced User -> Advanced Settings -> set userResourceLocation to the raw pastebin link
For commented non-obfuscated code see https://pastebin.com/vG8VPGjA
https://twitter.com/EthanShulman*/
  (function(){function e(){for(var b=document.querySelectorAll("span.tw-c-text-overlay"),d=!1,a=0;a<b.length;a++)if(b[a].attributes["data-test-selector"]){d=!0;break}if(d){if(!c)for(b=document.getElementsByTagName("video"),c=b.length?b:null,b.length&&(f=b[0].volume),a=0;a<b.length;a++)d=b[a],d.volume=0,d.style.filter="brightness(0%)"}else if(c){for(a=0;a<c.length;a++)c[a].volume=f,c[a].style.filter="";c=null}setTimeout(e,100)}var c=null,f=0;e()})();
 });
