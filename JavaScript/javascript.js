var e = document.getElementById("ebox");
var ph = document.getElementById("phbox");
var pwd = document.getElementById("pwdbox");
var pwdc = document.getElementById("pwdcbox");
var em = document.getElementById("emailMessage");
var phm = document.getElementById("phMessage");
var pwdm = document.getElementById("pwdMessage");
var pwdcm = document.getElementById("pwdcMessage");
var ev, phv, pwdv, pwdcv;

function emailValidate() {
    // var eregexp = /^([\w]+)@([\w]+).([\w]{2,3})(.[\w]{2,3})?$/;
    var eregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (eregexp.test(e.value)) {
        em.innerHTML = "Valid";
        em.style.color = "green";
        ev = true;
    } else {
        em.innerHTML = "Email format should be in example@domain.xxx or example@domain.xxx.xxx";
        em.style.fontSize = "14px";
        em.style.color = "red";
        e.style.border = "2px solid red";
        ev = false;
    }
}

function phValidate() {
    var phregexp = /^([0-9]{3})([. -]?[0-9]{3})([. -]?[0-9]{4})$/;
    // var phregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phregexp.test(ph.value)) {
        phm.innerHTML = "Valid";
        phm.style.color = "green";
        phv = true;
    } else {
        phm.innerHTML = "Phone number format should be in XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX or XXXXXXXXXX";
        phm.style.fontSize = "14px";
        phm.style.color = "red";
        ph.style.border = "2px solid red";
        phv = false;
    }
}