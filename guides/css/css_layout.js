//onload
function onload() {
    parseFlexStyle();
    parseAlignStyle();
}

//parse flex style;
function parseFlexStyle() {
    set_flex_style("flex-direction");
    set_flex_style("flex-wrap");
    set_flex_style("flex");
}

//set flex style;
function set_flex_style(flex_property) {
    var sel = document.querySelector("select[flex-property='"+ flex_property +"']");
    var val = sel.value;
    
    var selector = sel.getAttribute("target-selector");
    var eles = document.querySelectorAll(selector);
    eles.forEach(function(ele){
        ele.style[flex_property] = val;
    });

    var code = document.querySelector("code[flex-property='"+ flex_property +"']");
    code.textContent = flex_property + ": " + val + ";";
}

//parse align style;
function parseAlignStyle() {
    set_align_style("align-items");
    set_align_style("justify-content");
    set_align_style("align-self");
}


//set align container
function set_align_style(align_property) {
    var sel = document.querySelector("select[flex-property='"+ align_property +"']");
    var val = sel.value;
    
    var selector = sel.getAttribute("target-selector");
    var eles = document.querySelectorAll(selector);
    eles.forEach(function(ele){
        ele.style[align_property] = val;
    });

    var code = document.querySelector("code[flex-property='"+ align_property +"']");
    code.textContent = align_property + ": " + val + ";";
}




function createCSSSelect(containerSelector, styleName, targetSelector, data) {
    var container = document.querySelector(containerSelector);
    var val;
    var opt;
    var c = document.createElement("code");
    c.textContent = styleName + ": ";
    container.appendChild(c);

    var s = document.createElement("select");
    s.setAttribute("css-property", styleName);
    s.setAttribute("target-selector", targetSelector);
    s.onchange = onCSSSelectChanged;
    for (var i = 0; i < data.length; i++) {
        val = data[i];
        opt = document.createElement("option");
        opt.valule = val;
        opt.textContent = val;
        s.appendChild(opt);
    }
    container.appendChild(s);

    var br = document.createElement("br");
    container.appendChild(br);
}

function onCSSSelectChanged(evt) {
    var sel = evt.currentTarget;
    var p = sel.getAttribute("css-property");
    var ts = sel.getAttribute("target-selector");
    var t = document.querySelector(ts);
    t.style[p] = sel.value;
}




