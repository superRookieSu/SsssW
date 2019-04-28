  /* jshint esversion: 6 */ 



/*main load*/
  function onload_main() {
    loadGuidesConfig();

    //default
    var f = document.querySelector("#content_iframe");
    f.src = "welcome.html";
  }

// set iframe height
function onload_content() {
     var f = document.querySelector("#content_iframe");
   var bodyH = f.contentWindow.document.body.scrollHeight;
   var documentH = f.contentWindow.document.documentElement.scrollHeight;
    f.setAttribute("height", Math.max(bodyH, documentH));
}

//===========create guides catalog============

/*the path of config xml*/
let config_url = "source/guides_conf.xml";

// load config
function loadGuidesConfig() {
    fetch(config_url + "?t=" + Math.random())
    .then(function (response){
        return response.text();
    })
    .then(function (text){
        var parser = new DOMParser();
        var xml = parser.parseFromString(text, "application/xml");
        parseDetails(xml.children[0]);
    })
    .catch(function (err) {
        console.log(err, "shit!");
    });
}

// update guides use config xml
function parseDetails(xml) {
    var details, id, summary, folder, open;
    for (var i = 0; i < xml.children.length; i++) {
        details = xml.children[i];
        folder = details.nodeName;
        id = details.getAttribute("id");
        summary = details.getAttribute("summary");
        open = details.getAttribute("open");
        createDetails(id, summary, open);
        parseItems(details.children, folder, id);
    }
}

//parse items
function parseItems(items, folder, detailsId) {
    var item, href, desc;
    for (var i = 0; i < items.length; i++) {
        item = items[i];
        href = folder + "/" + item.getAttribute("name");
        desc = item.textContent;
        createLink(desc, href, detailsId);
    }
}

/*add details*/
function createDetails(id, summary, open = false) {
    var detailsContainer = document.querySelector(".column-container > .column-catalog");

    var d = document.createElement("details");
    d.open = open;
    d.id = id;

    var s = document.createElement("summary");
    s.textContent = summary;
    d.appendChild(s);

    var ol = document.createElement("ol");
    d.appendChild(ol);

    detailsContainer.appendChild(d);
}

/*add guide link*/
function createLink(text, url, detailsId) {
    var a = document.createElement("a");
    a.href = url;
    a.target = "content_iframe";
    a.textContent = text;

    var li = document.createElement("li");
    li.appendChild(a);

    var d = document.getElementById(detailsId);
    var ol = d.querySelector("details > ol");
    ol.appendChild(li);
}








