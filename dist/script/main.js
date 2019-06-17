!function(e){var t,n=function(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}()+".mask",a=navigator.userAgent,i=/iphone/i.test(a),r=/android/i.test(a);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(a,o){var s,c,l,u,d;return!a&&this.length>0?e(this[0]).data(e.mask.dataName)():(o=e.extend({placeholder:e.mask.placeholder,completed:null},o),s=e.mask.definitions,c=[],l=d=a.length,u=null,e.each(a.split(""),function(e,t){"?"==t?(d--,l=e):s[t]?(c.push(RegExp(s[t])),null===u&&(u=c.length-1)):c.push(null)}),this.trigger("unmask").each(function(){function f(e){for(;d>++e&&!c[e];);return e}function p(e,t){var n,a;if(!(0>e)){for(n=e,a=f(t);d>n;n++)if(c[n]){if(!(d>a&&c[n].test(_[a])))break;_[n]=_[a],_[a]=o.placeholder,a=f(a)}h(),g.caret(Math.max(u,e))}}function m(e,t){var n;for(n=e;t>n&&d>n;n++)c[n]&&(_[n]=o.placeholder)}function h(){g.val(_.join(""))}function v(e){var t,n,a=g.val(),i=-1;for(t=0,pos=0;d>t;t++)if(c[t]){for(_[t]=o.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),c[t].test(n)){_[t]=n,i=t;break}if(pos>a.length)break}else _[t]===a.charAt(pos)&&t!==l&&(pos++,i=t);return e?h():l>i+1?(g.val(""),m(0,d)):(h(),g.val(g.val().substring(0,i+1))),l?t:u}var g=e(this),_=e.map(a.split(""),function(e){return"?"!=e?s[e]?o.placeholder:e:void 0}),b=g.val();g.data(e.mask.dataName,function(){return e.map(_,function(e,t){return c[t]&&e!=o.placeholder?e:null}).join("")}),g.attr("readonly")||g.one("unmask",function(){g.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){var e;clearTimeout(t),b=g.val(),e=v(),t=setTimeout(function(){h(),e==a.length?g.caret(0,e):g.caret(e)},10)}).bind("blur.mask",function(){v(),g.val()!=b&&g.change()}).bind("keydown.mask",function(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(n=(t=g.caret()).begin,0==(a=t.end)-n&&(n=46!==r?function(e){for(;--e>=0&&!c[e];);return e}(n):a=f(n-1),a=46===r?f(a):a),m(n,a),p(n,a-1),e.preventDefault()):27==r&&(g.val(b),g.caret(0,v()),e.preventDefault())}).bind("keypress.mask",function(t){var n,a,i,s=t.which,l=g.caret();t.ctrlKey||t.altKey||t.metaKey||32>s||s&&(0!=l.end-l.begin&&(m(l.begin,l.end),p(l.begin,l.end-1)),n=f(l.begin-1),d>n&&(a=String.fromCharCode(s),c[n].test(a)&&(function(e){var t,n,a,i;for(t=e,n=o.placeholder;d>t;t++)if(c[t]){if(a=f(t),i=_[t],_[t]=n,!(d>a&&c[a].test(i)))break;n=i}}(n),_[n]=a,h(),i=f(n),r?setTimeout(e.proxy(e.fn.caret,g,i),0):g.caret(i),o.completed&&i>=d&&o.completed.call(g))),t.preventDefault())}).bind(n,function(){setTimeout(function(){var e=v(!0);g.caret(e),o.completed&&e==g.val().length&&o.completed.call(g)},0)}),v()}))}})}(jQuery);let user_data={phone:!1,pass:!1};function class_modification(e,t,n){e.classList.contains(`form__input--${t}`)&&e.parentNode.classList.contains(`form__input-wrapper--${t}`)&&(e.classList.remove(`form__input--${t}`),e.parentNode.classList.remove(`form__input-wrapper--${t}`)),e.classList.add(`form__input--${n}`),e.parentNode.classList.add(`form__input-wrapper--${n}`)}function isFormValid(){let{phone:e,pass:t}=user_data,n=document.querySelector(".form__btn");n.disabled=!e||!t}isFormValid(),(()=>{let e=document.querySelector(".form__input--password");e.addEventListener("input",function(t){let n=t.target.value;n.length<5?(class_modification(e,"valid","invalid"),user_data.pass&&(user_data.pass=!1)):(user_data.pass=n,class_modification(e,"invalid","valid"));isFormValid()})})(),(()=>{let e=document.querySelector(".form__input--phone");$(".form__input--phone").mask("8 ( 999 ) 999-99-99"),e.addEventListener("blur",function(t){let n=t.target.value,a=function(e){let t=e,n=!0;return base.forEach(e=>{e==t&&(n=!1)}),n}(n);19==n.length&&a?(class_modification(e,"invalid","valid"),user_data.phone=n):(class_modification(e,"valid","invalid"),user_data.phone&&(user_data.phone=!1));isFormValid()})})();let base=["8 ( 411 ) 111-11-11","8 ( 999 ) 999-11-11","8 ( 888 ) 888-11-11"];(()=>{document.querySelector(".form__btn").addEventListener("click",function(e){e.preventDefault(),console.log("data has been sent successfully!")})})();