//onload
function onload() {
    setAttrSelectorStyles();
}


// set attribute selector styles
function setAttrSelectorStyles(){
    var c = document.getElementById("attrContainer");
    var all = c.querySelectorAll(".attr_div");

    all.forEach(function (e){
        e.style.borderColor = "black";
    });

    var sel = document.querySelector("select[name='attr_sel']");

    var eles = c.querySelectorAll(sel.value);
    eles.forEach(function (e) {
        e.style.borderColor = "blue";
    });
}

