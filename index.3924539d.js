var e=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),d=document.querySelector("table"),n=d.querySelector("tbody");e.addEventListener("click",function(){t.disabled=!1;var l=d.tBodies[0].rows.length,r=d.tBodies[0].rows[0].cells.length,o=document.createElement("tr");if(9===n.rows.length&&(e.disabled=!0),!(l>=10)){for(var c=0;c<r;c++){var a=document.createElement("td");o.appendChild(a)}n.appendChild(o)}}),l.addEventListener("click",function(){r.disabled=!1;var e=d.tBodies[0].rows[0].cells.length;if(9===e&&(l.disabled=!0),e>=10);else{var t=document.querySelectorAll("table tr"),n=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var s=a.value,u=document.createElement("td");s.appendChild(u)}}catch(e){o=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}}}),t.addEventListener("click",function(){e.disabled=!1,n.deleteRow(-1),n.rows.length<=2&&(t.disabled=!0)}),r.addEventListener("click",function(){l.disabled=!1;var e=d.tBodies[0].rows[0].cells.length,t=n.rows;e<=3&&(r.disabled=!0);for(var o=0;o<t.length;o++)t[o].deleteCell(-1)});
//# sourceMappingURL=index.3924539d.js.map
