(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{175:function(e,t,n){"use strict";n.r(t);n(1);var i=n(5),s=n(20),r=n(74),a=n.n(r),o=n(0),c=function(e){var t=e.data;return Object(o.jsx)("div",{className:"cell-container",children:Object(o.jsxs)("article",{className:"mini-post",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:t.link,children:t.title})}),Object(o.jsx)("time",{className:"published",children:a()(t.date).format("MMMM, YYYY")})]}),Object(o.jsx)("a",{href:t.link,className:"image",children:Object(o.jsx)("img",{src:"".concat("").concat(t.image),alt:t.title})}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:t.desc})})]})})},u=[{title:"Open Banking - Live Testing Service",subtitle:"A service that help Open Banking API and API develops get access to live bank accounts to help with testing. ",image:"/images/projects/consentwise.png",date:"2022-05-1",desc:" This service addresses and Open Banking industry wide problem - how to test your APP of API with real/live accounts. See http://qeetoto.com"},{title:"React Demo - Personal Profile",subtitle:"Developer on React, Auto hosted on Git Pages .",image:"/images/projects/personal-profile.png",date:"2022-04-1",desc:"Created this React personal profile using a template from forked from MICHAEL D`ANGELO. Create to demo speed I can pick up new technolgies. I learn through doing - typically by following in the footsteps of others so as to not re-invent the wheel."},{title:"Texas HedgeEm",subtitle:"A online, real-money gambling game based on Texas Holdem poker.",image:"/images/projects/texas-hedgeem.png",date:"2015-05-15",desc:"Designed, developed, implemented, branded, promoted and hosted Texas Hedge\u2019Em\xae an online card game based on the mathematically probability of events occurring. Submitted US Patent and secured UK Trade Mark. Presented to multiple C-level executives securing development on professional platform. Grossed \xa32m in placed bets in first year. The game is still enjoyed by players in many online casinos (see https://slotcatalog.com/en/slots/Texas-Hedge-Em for list).  Unfortunately, as great as this game is, I will not be retiring on it; the industry is fierce - read more in my post about this."},{title:"Schemation",subtitle:"CI/CD before this was even a thing",image:"/images/projects/schemation.jpg",date:"2002-05-15",desc:'Built a full CI/CD DevOps pipeline before this terms even existed.  The original product supported an 80+ development team that built the original .gov.uk website. Every developer had there own environment including an Oracle schema - which was quite novel at the time. Whilst the project was a technical success, it was a commercial failure as we the four founders spent too much effort on the tech and not enough on the commercials. We have retired the product now, but it is still available to anyone who asks. Fun fact: We called our early builds "Batman Builds" because they built over night! '}];t.default=function(){return Object(o.jsx)(s.a,{title:"Projects",description:"Learn about Simon Hewins's projects.",children:Object(o.jsxs)("article",{className:"post",id:"projects",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(i.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(e){return Object(o.jsx)(c,{data:e},e.title)}))]})})}},74:function(e,t,n){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",s="second",r="minute",a="hour",o="day",c="week",u="month",h="quarter",l="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:$,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+$(i,2,"0")+":"+$(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,u),r=n-s<0,a=t.clone().add(i+(r?-1:1),u);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:l,w:c,d:o,D:d,h:a,m:r,s:s,ms:i,Q:h}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",y={};y[b]=g;var j=function(e){return e instanceof D},M=function e(t,n,i){var s;if(!t)return b;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,s=o}return!i&&s&&(b=s),s||!i&&b},w=function(e,t){if(j(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},O=v;O.l=M,O.i=j,O.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=M(e.locale,null,!0),this.parse(e)}var $=g.prototype;return $.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(m);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},$.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},$.$utils=function(){return O},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},$.isAfter=function(e,t){return w(e)<this.startOf(t)},$.isBefore=function(e,t){return this.endOf(t)<w(e)},$.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(e,t){var n=this,i=!!O.u(t)||t,h=O.p(e),f=function(e,t){var s=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?s:s.endOf(o)},m=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case u:return i?f(1,g):f(0,g+1);case c:var b=this.$locale().weekStart||0,y=(p<b?p+7:p)-b;return f(i?$-y:$+(6-y),g);case o:case d:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case r:return m(v+"Seconds",2);case s:return m(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(e){return this.startOf(e,!1)},$.$set=function(e,t){var n,c=O.p(e),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[d]=h+"Date",n[u]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[r]=h+"Minutes",n[s]=h+"Seconds",n[i]=h+"Milliseconds",n)[c],m=c===o?this.$D+(t-this.$W):t;if(c===u||c===l){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(e,t){return this.clone().$set(e,t)},$.get=function(e){return this[O.p(e)]()},$.add=function(i,h){var d,f=this;i=Number(i);var m=O.p(h),p=function(e){var t=w(f);return O.w(t.date(t.date()+Math.round(e*i)),f)};if(m===u)return this.set(u,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===o)return p(1);if(m===c)return p(7);var g=(d={},d[r]=t,d[a]=n,d[s]=e,d)[m]||1,$=this.$d.getTime()+i*g;return O.w($,this)},$.subtract=function(e,t){return this.add(-1*e,t)},$.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=O.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,h=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].substr(0,r)},l=function(e){return O.s(r%12||12,e,"0")},d=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:O.s(o+1,2,"0"),MMM:h(n.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,c,2),ddd:h(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:O.s(r,2,"0"),h:l(1),hh:l(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(e,t){return t||m[e]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,d,f){var m,p=O.p(d),g=w(i),$=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=O.m(this,g);return b=(m={},m[l]=b/12,m[u]=b,m[h]=b/3,m[c]=(v-$)/6048e5,m[o]=(v-$)/864e5,m[a]=v/n,m[r]=v/t,m[s]=v/e,m)[p]||v,f?b:O.a(b)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return y[this.$L]},$.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=M(e,t,!0);return i&&(n.$L=i),n},$.clone=function(){return O.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),S=D.prototype;return w.prototype=S,[["$ms",i],["$s",s],["$m",r],["$H",a],["$W",o],["$M",u],["$y",l],["$D",d]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,D,w),e.$i=!0),w},w.locale=M,w.isDayjs=j,w.unix=function(e){return w(1e3*e)},w.en=y[b],w.Ls=y,w.p={},w}()}}]);
//# sourceMappingURL=7.fd8f2385.chunk.js.map