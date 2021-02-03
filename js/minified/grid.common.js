!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jqModal","./jqDnR"],e):e(jQuery)}(function(w){"use strict";w.extend(w.jgrid,{showModal:function(e){e.w.show()},closeModal:function(e){e.w.hide().attr("aria-hidden","true"),e.o&&e.o.remove()},hideModal:function(e,t){var i,a,o,r=!(!(t=w.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},t||{})).gb||"string"!=typeof t.gb||"#gbox_"!==t.gb.substr(0,6))&&w("#"+t.gb.substr(6))[0];if(t.onClose){var n=r?t.onClose.call(r,e):t.onClose(e);if("boolean"==typeof n&&!n)return}if(t.formprop&&r&&t.form&&(i=w(e)[0].style.height,n=w(e)[0].style.width,-1<i.indexOf("px")&&(i=parseFloat(i)),-1<n.indexOf("px")&&(n=parseFloat(n)),"edit"===t.form?(a="#"+w.jgrid.jqID("FrmGrid_"+t.gb.substr(6)),o="formProp"):"view"===t.form&&(a="#"+w.jgrid.jqID("ViewGrid_"+t.gb.substr(6)),o="viewProp"),w(r).data(o,{top:parseFloat(w(e).css("top")),left:parseFloat(w(e).css("left")),width:n,height:i,dataheight:w(a).height(),datawidth:w(a).width()})),w.fn.jqm&&!0===t.jqm)w(e).attr("aria-hidden","true").jqmHide();else{if(""!==t.gb)try{w(t.gb).find(".jqgrid-overlay").first().hide()}catch(e){}try{w(".jqgrid-overlay-modal").hide()}catch(e){}w(e).hide().attr("aria-hidden","true")}t.removemodal&&w(e).remove()},findPos:function(e){e=w(e).offset();return[e.left,e.top]},createModal:function(i,e,a,t,o,r,n){a=w.extend(!0,{},w.jgrid.jqModal||{},a);var l=this,d="rtl"===w(a.gbox).attr("dir"),s=w.jgrid.styleUI[a.styleUI||"jQueryUI"].modal,u=w.jgrid.styleUI[a.styleUI||"jQueryUI"].common,c=document.createElement("div");n=w.extend({},n||{}),c.className="ui-jqdialog "+s.modal,c.id=i.themodal;var f=document.createElement("div");f.className="ui-jqdialog-titlebar "+s.header,f.id=i.modalhead,w(f).append("<span class='ui-jqdialog-title'>"+a.caption+"</span>");var m=w("<a class='ui-jqdialog-titlebar-close "+u.cornerall+"'></a>").hover(function(){m.addClass(u.hover)},function(){m.removeClass(u.hover)}).append("<span class='"+u.icon_base+" "+s.icon_close+"'></span>");w(f).append(m),d?(c.dir="rtl",w(".ui-jqdialog-title",f).css("float","right"),w(".ui-jqdialog-titlebar-close",f).css("left","0.3em")):(c.dir="ltr",w(".ui-jqdialog-title",f).css("float","left"),w(".ui-jqdialog-titlebar-close",f).css("right","0.3em"));var p=document.createElement("div");w(p).addClass("ui-jqdialog-content "+s.content).attr("id",i.modalcontent),w(p).append(e),c.appendChild(p),w(c).prepend(f),!0===r?w("body").append(c):"string"==typeof r?w(r).append(c):w(c).insertBefore(t),w(c).css(n),void 0===a.jqModal&&(a.jqModal=!0);p={};w.fn.jqm&&!0===a.jqModal?(0===a.left&&0===a.top&&a.overlay&&(n=[],n=w.jgrid.findPos(o),a.left=n[0]+4,a.top=n[1]+4),p.top=a.top+"px",p.left=a.left):0===a.left&&0===a.top||(p.left=a.left,p.top=a.top+"px"),w("a.ui-jqdialog-titlebar-close",f).click(function(){var e=w("#"+w.jgrid.jqID(i.themodal)).data("onClose")||a.onClose,t=w("#"+w.jgrid.jqID(i.themodal)).data("gbox")||a.gbox;return l.hideModal("#"+w.jgrid.jqID(i.themodal),{gb:t,jqm:a.jqModal,onClose:e,removemodal:a.removemodal||!1,formprop:!a.recreateForm||!1,form:a.form||""}),!1}),0!==a.width&&a.width||(a.width=300),0!==a.height&&a.height||(a.height=200),a.zIndex||(g=w(t).parents("*[role=dialog]").first().css("z-index"),a.zIndex=g?parseInt(g,10)+2:950);var g=0;if(d&&p.hasOwnProperty("left")&&!r&&(g=w(a.gbox).outerWidth()-(isNaN(a.width)?0:parseInt(a.width,10))+12,p.left=parseInt(p.left,10)+parseInt(g,10)),p.hasOwnProperty("left")&&(p.left+="px"),w(c).css(w.extend({width:isNaN(a.width)?"auto":a.width+"px",height:isNaN(a.height)?"auto":a.height+"px",zIndex:a.zIndex,overflow:"hidden"},p)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":i.modalhead,"aria-hidden":"true"}),void 0===a.drag&&(a.drag=!0),void 0===a.resize&&(a.resize=!0),a.drag)if(w(f).css("cursor","move"),w.fn.tinyDraggable)w(c).tinyDraggable({handle:"#"+w.jgrid.jqID(f.id)});else try{w(c).draggable({handle:w("#"+w.jgrid.jqID(f.id))})}catch(e){}if(a.resize)if(w.fn.jqResize)w(c).append("<div class='jqResize "+s.resizable+" "+u.icon_base+" "+s.icon_resizable+"'></div>"),w("#"+w.jgrid.jqID(i.themodal)).jqResize(".jqResize",!!i.scrollelm&&"#"+w.jgrid.jqID(i.scrollelm));else try{w(c).resizable({handles:"se, sw",alsoResize:!!i.scrollelm&&"#"+w.jgrid.jqID(i.scrollelm)})}catch(e){}!0===a.closeOnEscape&&w(c).keydown(function(e){27===e.which&&(e=w("#"+w.jgrid.jqID(i.themodal)).data("onClose")||a.onClose,l.hideModal("#"+w.jgrid.jqID(i.themodal),{gb:a.gbox,jqm:a.jqModal,onClose:e,removemodal:a.removemodal||!1,formprop:!a.recreateForm||!1,form:a.form||""}))})},viewModal:function(e,t){var i,a="";if((t=w.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:w.jgrid.showModal,onHide:w.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},t||{})).gbox){var o=w("#"+t.gbox.substring(6))[0];try{a=w(o).jqGrid("getStyleUI",o.p.styleUI+".common","overlay",!1,"jqgrid-overlay-modal"),t.overlayClass=w(o).jqGrid("getStyleUI",o.p.styleUI+".common","overlay",!0)}catch(e){}}if(void 0===t.focusField&&(t.focusField=0),"number"==typeof t.focusField&&0<=t.focusField?t.focusField=parseInt(t.focusField,10):"boolean"!=typeof t.focusField||t.focusField?t.focusField=0:t.focusField=!1,w.fn.jqm&&!0===t.jqm)(t.jqM?w(e).attr("aria-hidden","false").jqm(t):w(e).attr("aria-hidden","false")).jqmShow();else if(""!==t.gbox&&(i=parseInt(w(e).css("z-index"))-1,t.modal?(w(".jqgrid-overlay-modal")[0]||w("body").prepend("<div "+a+"></div>"),w(".jqgrid-overlay-modal").css("z-index",i).show()):(w(t.gbox).find(".jqgrid-overlay").first().css("z-index",i).show(),w(e).data("gbox",t.gbox))),w(e).show().attr("aria-hidden","false"),0<=t.focusField)try{w(":input:visible",e)[t.focusField].focus()}catch(e){}},info_dialog:function(e,t,i,a){var o={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1e3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};w.extend(!0,o,w.jgrid.jqModal||{},{caption:"<b>"+e+"</b>"},a||{});var r=o.jqModal,n=this,e=w.jgrid.styleUI[o.styleUI||"jQueryUI"].modal,l=w.jgrid.styleUI[o.styleUI||"jQueryUI"].common;w.fn.jqm&&!r&&(r=!1);var d,s="";if(0<o.buttons.length)for(d=0;d<o.buttons.length;d++)void 0===o.buttons[d].id&&(o.buttons[d].id="info_button_"+d),s+="<a id='"+o.buttons[d].id+"' class='fm-button "+l.button+"'>"+o.buttons[d].text+"</a>";a="<div id='info_id'>";a+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+(isNaN(o.dataheight)?o.dataheight:o.dataheight+"px")+";"+("text-align:"+o.align+";")+"'>"+t+"</div>",a+=i?"<div class='"+e.content+"' style='text-align:"+o.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button "+l.button+"'>"+i+"</a>"+s+"</div>":""!==s?"<div class='"+e.content+"' style='text-align:"+o.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+s+"</div>":"",a+="</div>";try{"false"===w("#info_dialog").attr("aria-hidden")&&w.jgrid.hideModal("#info_dialog",{jqm:r}),w("#info_dialog").remove()}catch(e){}e=w(".ui-jqgrid").css("font-size")||"11px";w.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},a,o,"","",!0,{"font-size":e}),s&&w.each(o.buttons,function(e){w("#"+w.jgrid.jqID(this.id),"#info_id").on("click",function(){return o.buttons[e].onClick.call(w("#info_dialog")),!1})}),w("#closedialog","#info_id").on("click",function(){return n.hideModal("#info_dialog",{jqm:r,onClose:w("#info_dialog").data("onClose")||o.onClose,gb:w("#info_dialog").data("gbox")||o.gbox}),!1}),w(".fm-button","#info_dialog").hover(function(){w(this).addClass(l.hover)},function(){w(this).removeClass(l.hover)}),w.jgrid.isFunction(o.beforeOpen)&&o.beforeOpen(),w.jgrid.viewModal("#info_dialog",{onHide:function(e){e.w.hide().remove(),e.o&&e.o.remove()},modal:o.modal,jqm:r}),w.jgrid.isFunction(o.afterOpen)&&o.afterOpen();try{w("#info_dialog").focus()}catch(e){}},bindEv:function(e,t){w.jgrid.isFunction(t.dataInit)&&t.dataInit.call(this,e,t),t.dataEvents&&w.each(t.dataEvents,function(){void 0!==this.data?w(e).on(this.type,this.data,this.fn):w(e).on(this.type,this.fn)})},createEl:function(e,t,i,a,o){var r,n="",c=this;function f(i,e,t){var a=(a=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","oper"]).concat(["cacheUrlData","delimiter","separator"]);void 0!==t&&Array.isArray(t)&&w.merge(a,t),w.each(e,function(e,t){-1===w.inArray(e,a)&&w(i).attr(e,t)}),e.hasOwnProperty("id")||w(i).attr("id",w.jgrid.randId())}switch(e){case"textarea":n=document.createElement("textarea"),a?t.cols||w(n).css({width:"98%"}):t.cols||(t.cols=20),t.rows||(t.rows=2),("&nbsp;"===i||"&#160;"===i||1===i.length&&160===i.charCodeAt(0))&&(i=""),n.value=i,w(n).attr({role:"textbox",multiline:"true"}),f(n,t);break;case"checkbox":(n=document.createElement("input")).type="checkbox",t.value?(i===(r=t.value.split(":"))[0]&&(n.checked=!0,n.defaultChecked=!0),n.value=r[0],w(n).attr("offval",r[1])):((r=(i+"").toLowerCase()).search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==r?(n.checked=!0,n.defaultChecked=!0,n.value=i):n.value="on",w(n).attr("offval","off")),w(n).attr("role","checkbox"),f(n,t,["value"]);break;case"select":(n=document.createElement("select")).setAttribute("role","select");var l,d,s=[];if(!0===t.multiple?(l=!0,n.multiple="multiple",w(n).attr("aria-multiselectable","true")):l=!1,null!=t.dataUrl){var u=null,m=t.postData||o.postData;try{u=t.rowId}catch(e){}c.p&&c.p.idPrefix&&(u=w.jgrid.stripPref(c.p.idPrefix,u)),w.ajax(w.extend({url:w.jgrid.isFunction(t.dataUrl)?t.dataUrl.call(c,u,i,String(t.name)):t.dataUrl,type:"GET",dataType:"html",data:w.jgrid.isFunction(m)?m.call(c,u,i,String(t.name)):m,context:{elem:n,options:t,vl:i},success:function(e){var t,i,a=[],o=this.elem,r=this.vl,n=w.extend({},this.options),l=!0===n.multiple,d=!0===n.cacheUrlData,s="",u=[],e=w.jgrid.isFunction(n.buildSelect)?n.buildSelect.call(c,e):e;"string"==typeof e&&(e=w(w.trim(e)).html()),e&&(w(o).append(e),f(o,n,m?["postData"]:void 0),void 0===n.size&&(n.size=l?3:1),l?(a=r.split(","),a=w.map(a,function(e){return w.trim(e)})):a[0]=w.trim(r),w("option",o).each(function(e){t=w(this).text(),r=w(this).val(),d&&(s+=(0!==e?";":"")+r+":"+t),0===e&&o.multiple&&(this.selected=!1),w(this).attr("role","option"),(-1<w.inArray(w.trim(t),a)||-1<w.inArray(w.trim(r),a))&&(this.selected="selected",u.push(r))}),n.hasOwnProperty("checkUpdate")&&n.checkUpdate&&(c.p.savedData[n.name]=u.join(",")),d&&("edit"===n.oper?w(c).jqGrid("setColProp",n.name,{editoptions:{buildSelect:null,dataUrl:null,value:s}}):"search"===n.oper?w(c).jqGrid("setColProp",n.name,{searchoptions:{dataUrl:null,value:s}}):"filter"===n.oper&&w("#fbox_"+c.p.id)[0].p&&(l=w("#fbox_"+c.p.id)[0].p.columns,w.each(l,function(e){if(i=this.index||this.name,n.name===i)return this.searchoptions.dataUrl=null,this.searchoptions.value=s,!1}))),w(c).triggerHandler("jqGridAddEditAfterSelectUrlComplete",[o]))}},o||{}))}else if(t.value){void 0===t.size&&(t.size=l?3:1),l&&(s=i.split(","),s=w.map(s,function(e){return w.trim(e)})),"function"==typeof t.value&&(t.value=t.value());var p,g,h,F,v,b,j=void 0===t.separator?":":t.separator,y=void 0===t.delimiter?";":t.delimiter;if("string"==typeof t.value)for(p=t.value.split(y),d=0;d<p.length;d++)2<(g=p[d].split(j)).length&&(g[1]=w.map(g,function(e,t){if(0<t)return e}).join(j)),(h=document.createElement("option")).setAttribute("role","option"),h.value=g[0],h.innerHTML=g[1],n.appendChild(h),l||w.trim(g[0])!==w.trim(i)&&w.trim(g[1])!==w.trim(i)||(h.selected="selected"),l&&(-1<w.inArray(w.trim(g[1]),s)||-1<w.inArray(w.trim(g[0]),s))&&(h.selected="selected");else if("[object Array]"===Object.prototype.toString.call(t.value))for(F=t.value,d=0;d<F.length;d++)2===F[d].length&&(v=F[d][0],b=F[d][1],(h=document.createElement("option")).setAttribute("role","option"),h.value=v,h.innerHTML=b,n.appendChild(h),l||w.trim(v)!==w.trim(i)&&w.trim(b)!==w.trim(i)||(h.selected="selected"),l&&(-1<w.inArray(w.trim(b),s)||-1<w.inArray(w.trim(v),s))&&(h.selected="selected"));else if("object"==typeof t.value)for(v in F=t.value)F.hasOwnProperty(v)&&((h=document.createElement("option")).setAttribute("role","option"),h.value=v,h.innerHTML=F[v],n.appendChild(h),l||w.trim(v)!==w.trim(i)&&w.trim(F[v])!==w.trim(i)||(h.selected="selected"),l&&(-1<w.inArray(w.trim(F[v]),s)||-1<w.inArray(w.trim(v),s))&&(h.selected="selected"));f(n,t,["value"])}else f(n,t);break;case"image":case"file":(n=document.createElement("input")).type=e,f(n,t);break;case"custom":n=document.createElement("span");try{if(!w.jgrid.isFunction(t.custom_element))throw"e1";var x=t.custom_element.call(c,i,t);if(!x)throw"e2";x=w(x).addClass("customelement").attr({id:t.id,name:t.name}),w(n).empty().append(x)}catch(e){var y=w.jgrid.getRegional(c,"errors"),q=w.jgrid.getRegional(c,"edit");"e1"===e?w.jgrid.info_dialog(y.errcap,"function 'custom_element' "+q.msg.nodefined,q.bClose,{styleUI:c.p.styleUI}):"e2"===e?w.jgrid.info_dialog(y.errcap,"function 'custom_element' "+q.msg.novalue,q.bClose,{styleUI:c.p.styleUI}):w.jgrid.info_dialog(y.errcap,"string"==typeof e?e:e.message,q.bClose,{styleUI:c.p.styleUI})}break;default:q="button"===e?"button":"textbox";(n=document.createElement("input")).type=e,n.value=i,"button"!==e&&(a?t.size||w(n).css({width:"96%"}):t.size||(t.size=20)),w(n).attr("role",q),f(n,t)}return n},checkDate:function(e,t){var i={},a=-1!==(e=e.toLowerCase()).indexOf("/")?"/":-1!==e.indexOf("-")?"-":-1!==e.indexOf(".")?".":"/";if(e=e.split(a),3!==(t=t.split(a)).length)return!1;for(var o,r=-1,n=-1,l=-1,d=0;d<e.length;d++){var s=isNaN(t[d])?0:parseInt(t[d],10);i[e[d]]=s,-1!==(o=e[d]).indexOf("y")&&(r=d),-1!==o.indexOf("m")&&(l=d),-1!==o.indexOf("d")&&(n=d)}o="y"===e[r]||"yyyy"===e[r]?4:"yy"===e[r]?2:-1;var u;return-1!==r&&(a=i[e[r]].toString(),2===o&&1===a.length&&(o=1),a.length===o&&(0!==i[e[r]]||"00"===t[r])&&(-1!==l&&(!((a=i[e[l]].toString()).length<1||i[e[l]]<1||12<i[e[l]])&&(-1!==n&&!((a=i[e[n]].toString()).length<1||i[e[n]]<1||31<i[e[n]]||2===i[e[l]]&&i[e[n]]>((u=i[e[r]])%4!=0||u%100==0&&u%400!=0?28:29)||i[e[n]]>[0,31,29,31,30,31,30,31,31,30,31,30,31][i[e[l]]])))))},isEmpty:function(e){return!(void 0!==e&&!e.match(/^\s+$/)&&""!==e)},checkTime:function(e){if(!w.jgrid.isEmpty(e)){if(!(e=e.match(/^(\d{1,2}):(\d{2})([apAP][Mm])?$/)))return!1;if(e[3]){if(e[1]<1||12<e[1])return!1}else if(23<e[1])return!1;if(59<e[2])return!1}return!0},checkValues:function(e,t,i,a){var o,r,n,l,d,s=this,u=s.p.colModel,c=w.jgrid.getRegional(this,"edit.msg"),f=function(e){var t,i,e=e.toString();if(2<=e.length&&("-"===e[0]?(t=e[1],e[2]&&(i=e[2])):(t=e[0],e[1]&&(i=e[1])),"0"===t&&"."!==i))return!1;return"number"==typeof parseFloat(e)&&isFinite(e)};if(void 0===i)if("string"==typeof t){for(r=0,d=u.length;r<d;r++)if(u[r].name===t){o=u[r].editrules,null!=u[t=r].formoptions&&(n=u[r].formoptions.label);break}}else 0<=t&&(o=u[t].editrules);else o=i,n=void 0===a?"_":a;if(o){if(n=n||(null!=s.p.colNames?s.p.colNames[t]:u[t].label),!0===o.required&&w.jgrid.isEmpty(e))return[!1,n+": "+c.required,""];a=!1!==o.required;if(!0===o.number&&!(!1==a&&w.jgrid.isEmpty(e)||f(e)))return[!1,n+": "+c.number,""];if(void 0!==o.minValue&&!isNaN(o.minValue)&&parseFloat(e)<parseFloat(o.minValue))return[!1,n+": "+c.minValue+" "+o.minValue,""];if(void 0!==o.maxValue&&!isNaN(o.maxValue)&&parseFloat(e)>parseFloat(o.maxValue))return[!1,n+": "+c.maxValue+" "+o.maxValue,""];if(!0===o.email&&!(!1==a&&w.jgrid.isEmpty(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)))return[!1,n+": "+c.email,""];if(!0===o.integer&&(!1!=a||!w.jgrid.isEmpty(e))){if(!f(e))return[!1,n+": "+c.integer,""];if(e%1!=0||-1!==e.indexOf("."))return[!1,n+": "+c.integer,""]}if(!0===o.date&&!(!1==a&&w.jgrid.isEmpty(e)||(u[t].formatoptions&&u[t].formatoptions.newformat?(l=u[t].formatoptions.newformat,(f=w.jgrid.getRegional(s,"formatter.date.masks"))&&f.hasOwnProperty(l)&&(l=f[l])):l=u[t].datefmt||"Y-m-d",w.jgrid.checkDate(l,e))))return[!1,n+": "+c.date+" - "+l,""];if(!0===o.time&&!(!1==a&&w.jgrid.isEmpty(e)||w.jgrid.checkTime(e)))return[!1,n+": "+c.date+" - hh:mm (am/pm)",""];if(!0===o.url&&!(!1==a&&w.jgrid.isEmpty(e)||/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i.test(e)))return[!1,n+": "+c.url,""];if(!0===o.custom&&(!1!=a||!w.jgrid.isEmpty(e))){if(w.jgrid.isFunction(o.custom_func)){e=o.custom_func.call(s,e,n,t);return Array.isArray(e)?e:[!1,c.customarray,""]}return[!1,c.customfcheck,""]}}return[!0,"",""]},validateForm:function(e){for(var t,i=!0,a=0;a<e.elements.length;a++)if(t=e.elements[a],("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName||"SELECT"===t.nodeName)&&(void 0!==t.willValidate?("INPUT"===t.nodeName&&t.type!==t.getAttribute("type")&&t.setCustomValidity(w.jgrid.LegacyValidation(t)?"":"error"),t.reportValidity()):(t.validity=t.validity||{},t.validity.valid=w.jgrid.LegacyValidation(t)),!t.validity.valid)){i=!1;break}return i},LegacyValidation:function(e){var t=!0,i=e.value,a=e.getAttribute("type"),o="checkbox"===a||"radio"===a,r=e.getAttribute("required"),n=e.getAttribute("minlength"),l=e.getAttribute("maxlength"),a=e.getAttribute("pattern");return e.disabled||(t=(t=t&&(!r||o&&e.checked||!o&&""!==i))&&(o||(!n||i.length>=n)&&(!l||i.length<=l)))&&a&&(t=(a=new RegExp(a)).test(i)),t},buildButtons:function(e,i,a){var o;return w.each(e,function(e,t){t.id||(t.id=w.jgrid.randId()),t.position||(t.position="last"),t.side||(t.side="left"),o=t.icon?" fm-button-icon-"+t.side+"'><span class='"+a.icon_base+" "+t.icon+"'></span>":"'>",o="<a  data-index='"+e+"' id='"+t.id+"' class='fm-button "+a.button+o+t.text+"</a>","last"===t.position?i+=o:i=o+i}),i},setSelNavIndex:function(i,a){var e=w(".ui-pg-button",i.p.pager);w.each(e,function(e,t){if(a===t)return i.p.navIndex=e,!1}),w(a).attr("tabindex","0")},getFirstVisibleCol:function(e){for(var t=-1,i=0;i<e.p.colModel.length;i++)if(!0!==e.p.colModel[i].hidden){t=i;break}return t}})});