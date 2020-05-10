function funcSearch(uid) {
    var keywords = document.getElementById("txtKeywords").value;
    if (keywords == null || Trim(keywords) == "" || keywords == "请输入搜索关键字！") {
        alert("请输入搜索关键字！");
        return false;
    }
    else {
        var url = "http://www.jdzj.com/shop/product_search.aspx?wj_Words=" + str2UTF8(keywords) + "&p_UserID=" + uid + "";
        window.location.href = url;
    }
}

function funcFocus(text) {
    if (text.value == "请输入搜索关键字！" || Trim(text.value) == "") {
        text.value = "";
    }
}

function funconmouseup(obj) {
    if (Trim(obj.value) == "") {
        obj.value = "请输入搜索关键字！";
    }
}

function Trim(str) {
    if (str.charAt(0) == " ") {
        str = str.slice(1);
        str = Trim(str);
    }
    return str;
}

function str2UTF8(str) {
    var bytes = new Array();
    var len, c;
    len = str.length;
    for (var i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x010000 && c <= 0x10FFFF) {
            bytes.push(((c >> 18) & 0x07) | 0xF0);
            bytes.push(((c >> 12) & 0x3F) | 0x80);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000800 && c <= 0x00FFFF) {
            bytes.push(((c >> 12) & 0x0F) | 0xE0);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000080 && c <= 0x0007FF) {
            bytes.push(((c >> 6) & 0x1F) | 0xC0);
            bytes.push((c & 0x3F) | 0x80);
        } else {
            bytes.push(c & 0xFF);
        }
    }
    return bytes;
}