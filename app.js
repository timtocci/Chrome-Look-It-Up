/** app.js */
var defaultentries = [
	{
	"menu":"dictionary.com",
	"active":1
	},{
	"menu":"merriam-webster.com-dict",
	"active":1
	},{
	"menu":"merriam-webster.com-thes",
	"active":1
	},{
	"menu":"thefreedictionary.com",
	"active":1
	},{
	"menu":"thesaurus.com",
	"active":1
	},{
	"menu":"urbandictionary.com",
	"active":1
	},{
	"menu":"wikipedia.org",
	"active":1
	},{
	"menu":"wiktionary.org",
	"active":1
	},{
	"menu":"yourdictionary.com",
	"active":1
	},
];
var entries = {};
if (!localStorage.getItem("entries")) {
	localStorage.setItem("entries", JSON.stringify(defaultentries));
}
entries = JSON.parse(localStorage.getItem("entries"));
function isActive(menu){
	console.log("isActive");
	var elen = entries.length;
	console.assert(!elen == 0);
	for(i=0;i<elen;i++){
		if(entries[i]["menu"] == menu){
			console.log(entries[i]["menu"]);
			if(entries[i]["active"] == 1){
				return true;
			}else{
				return false;
			}
		}
	}
}
function setActive(menu){
	console.log("setActive");
	var elen = entries.length;
	console.log(menu);
	console.assert(!elen == 0);
	for(i=0;i<elen;i++){
		if(entries[i]["menu"] == menu){
			entries[i]["active"] = 1;
		}
	}
	localStorage.setItem("entries", JSON.stringify(entries));
}
function setInactive(menu){
	console.log("setInactive");
	var elen = entries.length;
	console.log(menu);
	console.assert(!elen == 0);
	for(i=0;i<elen;i++){
		if(entries[i]["menu"] == menu){
			entries[i]["active"] = 0;
		}
	}
	localStorage.setItem("entries", JSON.stringify(entries));
}
/* Create the context menu */
var tm = chrome.contextMenus.create({"title": "Look-it-up", "contexts":["selection"]});
if(isActive("dictionary.com")){
	chrome.contextMenus.create({"title": "dictionary.com", "contexts":["selection"], "parentId": tm, "onclick": lookItUp1});
}
function lookItUp1(i, t){
	var createProperties = {url: "http://www.dictionary.com/cgi-bin/dict.pl?term=" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("merriam-webster.com-dict")){
	chrome.contextMenus.create({"title": "merriam-webster.com-dict", "contexts":["selection"], "parentId": tm, "onclick": lookItUp2});
}
function lookItUp2(i, t){
	var createProperties = {url: "http://www.merriam-webster.com/dictionary/" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("merriam-webster.com-thes")){
	chrome.contextMenus.create({"title": "merriam-webster.com-thes", "contexts":["selection"], "parentId": tm, "onclick": lookItUp3});
}
function lookItUp3(i, t){
	var createProperties = {url: "http://www.merriam-webster.com/thesaurus/" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("thefreedictionary.com")){
	chrome.contextMenus.create({"title": "thefreedictionary.com", "contexts":["selection"], "parentId": tm, "onclick": lookItUp4});
}
function lookItUp4(i, t){
	var createProperties = {url: "http://www.thefreedictionary.com/" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("thesaurus.com")){
	chrome.contextMenus.create({"title": "thesaurus.com", "contexts":["selection"], "parentId": tm, "onclick": lookItUp5});
}
function lookItUp5(i, t){
	var createProperties = {url: "http://thesaurus.com/search?q=" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("urbandictionary.com")){
	chrome.contextMenus.create({"title": "urbandictionary.com", "contexts":["selection"], "parentId": tm, "onclick": lookItUp6});
}
function lookItUp6(i, t){
	var createProperties = {url: "http://www.urbandictionary.com/define.php?term=" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("wikipedia.org")){
	chrome.contextMenus.create({"title": "wikipedia.org", "contexts":["selection"], "parentId": tm, "onclick": lookItUp7});
}
function lookItUp7(i, t){
	var createProperties = {url: "http://en.wikipedia.org/wiki/" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("wiktionary.org")){
	chrome.contextMenus.create({"title": "wiktionary.org", "contexts":["selection"], "parentId": tm, "onclick": lookItUp8});
}
function lookItUp8(i, t){
	var createProperties = {url: "http://en.wiktionary.org/wiki/" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}
if(isActive("yourdictionary.com")){
	chrome.contextMenus.create({"title": "yourdictionary.com", "contexts":["selection"], "parentId": tm, "onclick": lookItUp9});
}
function lookItUp9(i, t){
	var createProperties = {url: "http://www.yourdictionary.com/" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}