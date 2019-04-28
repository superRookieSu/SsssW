  /* jshint esversion: 6 */ 

// change box-sizing
function box_sizing_changed(event) {
    var sel = event.currentTarget;
    var box = document.querySelector(".boxContainer > .box");
    box.style.boxSizing = sel.value;

    var s = document.querySelector("#boxSizingSpan");
    s.textContent = "box-sizing: " + sel.value;
}


//change overflow
function overflow_changed(event) {
    var sel = event.currentTarget;

    var c = document.querySelector(".overflow > code");
    c.textContent = "overflow: " + sel.value + ";";

    var o = document.querySelector(".overflow");
    o.style.overflow = sel.value;
}

//change background-clip
function background_clip_changed(event) {
     var sel = event.currentTarget;

     var c = document.querySelector(".background-clip > code");
    c.textContent = "background-clip: " + sel.value + ";";

    var d = document.querySelector(".background-clip");
    d.style.backgroundClip = sel.value;
}

//filter selected
function filterSelected(filter, selector) {
    var ele = document.querySelector(selector);
    ele.style.filter = filter;
    c = ele.querySelector("code");
    c.textContent = "filter:" + filter + ";";
}