(()=>{"use strict";const e=window.wp.i18n,t=e=>"#"===e[0]?document.getElementById(e.slice(1)):document.querySelectorAll(e),s={source:"",type:""},l=t("#tablepress_import-import-form"),i=t("#tables-import-file-upload"),r=t("#tables-import-file-upload-dropzone"),o=t("#tables-import-server"),n=t("#tables-import-existing-table");jSuites.dropdown(n,{autocomplete:!0,placeholder:n.options[0].textContent}),l.addEventListener("change",(()=>{s.source=document.querySelector("#row-import-source input:checked").value,s.type=document.querySelector("#row-import-type input:checked").value,l.classList.add("no-validation-highlighting"),o?.setCustomValidity(""),n.previousElementSibling.querySelector(".jdropdown-header").setCustomValidity(""),["file-upload","url","server","form-field"].forEach((e=>{t(`#row-import-source-${e}`).style.display=e===s.source?"table-row":"none",t(`#tables-import-${e}`).required=e===s.source})),t("#tables-import-url").type="url"===s.source?"url":"text";const e="add"===s.type||"file-upload"===s.source&&(1<i?.files?.length||1===i?.files?.length&&i?.files?.[0].name.endsWith(".zip"));n.disabled=e,n.previousElementSibling.classList.toggle("disabled",e)})),document.querySelector("#row-import-source input:checked").dispatchEvent(new Event("change",{bubbles:!0})),i.addEventListener("change",(function(t){t?.target?.files?.length>0?(r.innerHTML=`<span>${(0,e.sprintf)((0,e._n)("You have selected %1$d file:","You have selected %1$d files:",t.target.files.length,"tablepress"),t.target.files.length)}</span>`,[...t.target.files].forEach((e=>{const t=document.createElement("span");t.textContent=e.name,r.appendChild(t)}))):r.innerHTML=`<span>${(0,e.__)("Click to select a file, or drag it here.","tablepress")}</span>`})),i.addEventListener("dragenter",(function(){r.classList.add("dragover")})),i.addEventListener("dragleave",(function(){r.classList.remove("dragover")})),t("#import-submit-button").addEventListener("click",(()=>{l.classList.remove("no-validation-highlighting"),"server"===s.source&&o&&o.defaultValue===o.value&&o.setCustomValidity((0,e.__)("You must specify a path to a file on the server.","tablepress")),"replace"!==s.type&&"append"!==s.type||"file-upload"===s.source&&(1!==i?.files?.length||i?.files?.[0].name.endsWith(".zip"))||""===n.value&&n.previousElementSibling.querySelector(".jdropdown-header").setCustomValidity((0,e.__)("You must select a table.","tablepress"))}))})();