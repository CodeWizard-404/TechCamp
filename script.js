/*var bare = document.getElementById("bare");
var list = document.getElementById("list");
var menu = document.getElementById("menu");

bare.onclick = function () {
    if (list.style.right == "-350px") {
        list.style.right = "15px";
        menu.src = "images/close.png";
    } else {
        list.style.right = "-350px";
        menu.src = "images/menu.png";
    }
};

*/


var sidebar = document.querySelector('.sidebar');
var flesh = document.querySelector('.flesh');
flesh.onclick = function (){
    if (sidebar.className == 'sidebar'){
        sidebar.classList.add('open')
    }    
    else
        sidebar.classList.remove('open');
};


let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');

if(document.location.pathname.indexOf('index') >-1){
    a1.classList.add("act");
}else if(document.location.pathname.indexOf('Profile') >-1){
    a2.classList.add("act");
}else if(document.location.pathname.indexOf('courses') >-1){
    a3.classList.add("act");
}
    

let login = document.getElementById("login");
let blr = document.getElementById("blur");
let signup = document.getElementById("signup");
let msg = document.getElementById("msg");

function login_open() {
    login.classList.add("popup");
    blr.classList.add("blur");
    signup.classList.remove("popup");
}
function login_close() {
    login.classList.remove("popup");
    blr.classList.remove("blur");
}

function signup_open() {
    signup.classList.add("popup");
    blr.classList.add("blur");
    login.classList.remove("popup");
}
function signup_close() {
    signup.classList.remove("popup");
    blr.classList.remove("blur");
}

function sign_log_ok() {
    signup.classList.remove("popup");
    login.classList.remove("popup");
    blr.classList.add("blur");
    msg.classList.add("message");
}
function ok_click() {
    blr.classList.remove("blur");
    msg.classList.remove("message");
}


let wd = document.getElementById("wd");
let wdi = document.getElementById("wdi");
let gd = document.getElementById("gd");
let gdi = document.getElementById("gdi");
let sd = document.getElementById("sd");
let sdi = document.getElementById("sdi");
let md = document.getElementById("md");
let mdi = document.getElementById("mdi");
let da = document.getElementById("da");
let dai = document.getElementById("dai");
let es = document.getElementById("es");
let esi = document.getElementById("esi");
let cs = document.getElementById("cs");
let csi = document.getElementById("csi");
let gde = document.getElementById("gde");
let gdei = document.getElementById("gdei");

wdi.onmouseover = function sector_info_open1() {
    wd.classList.add("show");
};
wdi.onmouseout = function sector_info_close1() {
    wd.classList.remove("show");
};
gdi.onmouseover = function sector_info_open2() {
    gd.classList.add("show");
};
gdi.onmouseout = function sector_info_close2() {
    gd.classList.remove("show");
};
sdi.onmouseover = function sector_info_open3() {
    sd.classList.add("show");
};
sdi.onmouseout = function sector_info_close3() {
    sd.classList.remove("show");
};
mdi.onmouseover = function sector_info_open4() {
    md.classList.add("show");
};
mdi.onmouseout = function sector_info_close4() {
    md.classList.remove("show");
};
dai.onmouseover = function sector_info_open5() {
    da.classList.add("show");
};
dai.onmouseout = function sector_info_close5() {
    da.classList.remove("show");
};
esi.onmouseover = function sector_info_open6() {
    es.classList.add("show");
};
esi.onmouseout = function sector_info_close6() {
    es.classList.remove("show");
};
csi.onmouseover = function sector_info_open7() {
    cs.classList.add("show");
};
csi.onmouseout = function sector_info_close7() {
    cs.classList.remove("show");
};
gdei.onmouseover = function sector_info_open8() {
    gde.classList.add("show");
};
gdei.onmouseout = function sector_info_close8() {
    gde.classList.remove("show");
};


let ui = document.getElementById("ui");
let uii = document.getElementById("uii");
let api = document.getElementById("api");
let apii = document.getElementById("apii");
let db = document.getElementById("db");
let dbi = document.getElementById("dbi");
let lo = document.getElementById("lo");
let loi = document.getElementById("loi");
let ho = document.getElementById("ho");
let hoi = document.getElementById("hoi");

uii.onmouseover = function sector_info_open11() {
    ui.classList.add("show");
};
uii.onmouseout = function sector_info_close11() {
    ui.classList.remove("show");
};
apii.onmouseover = function sector_info_open22() {
    api.classList.add("show");
};
apii.onmouseout = function sector_info_close22() {
    api.classList.remove("show");
};
dbi.onmouseover = function sector_info_open33() {
    db.classList.add("show");
};
dbi.onmouseout = function sector_info_close33() {
    db.classList.remove("show");
};
loi.onmouseover = function sector_info_open44() {
    lo.classList.add("show");
};
loi.onmouseout = function sector_info_close44() {
    lo.classList.remove("show");
};
hoi.onmouseover = function sector_info_open55() {
    ho.classList.add("show");
};
hoi.onmouseout = function sector_info_close55() {
    ho.classList.remove("show");
};


document.querySelector("#search_input").addEventListener("input", filterlist);
var data_list = document.getElementById("data_list");

function filterlist() {
    var SearshInput = document.querySelector("#search_input");
    var filter = SearshInput.value.toLowerCase();
    var listItems = document.querySelectorAll(".search_data_list");

    listItems.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = "";
            data_list.classList.add("show");
        } else {
            item.style.display = "none";
        }
    });
    if (document.getElementById("search_input").value == "") {
        data_list.classList.remove("show");
    }
}
