/*
create css select
@container_selector : select container selector
@style_attribute : style attribute name
@target_selector : effect target element
@data : select values
 */
function createSelectForCSS(container_selector, style_attribute, target_selector, data) {
    var container = document.querySelector(container_selector);
    var div = document.createElement("div");
    container.appendChild(div);

    var val;
    var opt;
    var c = document.createElement("code");
    c.style.width = '160px';
    c.style.display = 'inline-block';
    // c.style.textAlign = 'right';
    c.textContent = style_attribute + ": ";
    div.appendChild(c);

    var s = document.createElement("select");
     s.setAttribute("class", "select_created_js");
    s.setAttribute("css-property", style_attribute);
    s.setAttribute("target-selector", target_selector);
   
    s.onchange = onCSSSelectChanged;
    for (var i = 0; i < data.length; i++) {
        val = data[i];
        opt = document.createElement("option");
        opt.valule = val;
        opt.textContent = val;
        s.appendChild(opt);
    }
    div.appendChild(s);
}
function onCSSSelectChanged(evt) {
    setCSSByCreatedSelect(evt.currentTarget);
}
function setCSSByCreatedSelect(sel) {
    var p = sel.getAttribute("css-property");
    var ts = sel.getAttribute("target-selector");
    var targes = document.querySelectorAll(ts);
    targes.forEach( function(element, index) {
        element.style[p] = sel.value;
    });
}
function setCSSByCreatedSelects() {
    document.querySelectorAll(".select_created_js").forEach( function(element, index) {
        setCSSByCreatedSelect(element);
    });
}
