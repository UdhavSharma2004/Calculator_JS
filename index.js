// let urname=prompt("Hello! This Calculator is created by Udhav Sharma😎.\nThanks for using this product\nCan you please share you name->")
urname = "Udhav";
if (urname == null || urname == "") {
    urname = "Unknown"
}
document.getElementById("urnamei").innerText += "\n User : " + urname
let obj = document.getElementById("display")
let count = 0;
let ans;

window.addEventListener("keydown", function (e) {
    if (e.key >= '0' && e.key <= '9') {
        pro(e.key)
    }
    if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
        pro(e.key)
    }
    if (e.key == 'Enter' || e.key == '=') {
        equal()
    }
    if (e.key == 'Backspace') {
        pro('c')
    }
    if (e.key == '.') {
        pro('.')
    }
    if (e.key == 'Delete') {
        pro('a')
    }
})

function pro(value) {
    if (obj.innerText == "0") {
        if (value == 'a') {
            ans = 0;
            obj.innerText = 0;
            return;
        }
        if (value == 'z') {
            obj.innerText += 0;
            obj.innerText += 0;
            ans += 00;
            return;
        }
        ans = value;
        obj.innerText = value;
        return;
    }
    if (value == 'a') {
        ans = 0
        obj.innerText = 0;
        return;
    }
    if (value == 'c') {
        obj.innerText = obj.innerText.slice(0, obj.innerText.length - 1)
        ans = obj.innerText
        return;
    }
    if (value == 'z') {
        obj.innerText += 0;
        obj.innerText += 0;
        ans += 00;
        return;
    }
    ans += value
    obj.innerText += value;
}
function equal() {
    let eq = obj.innerText.slice(0, 1)
    if (eq == '=') {
        ans = obj.innerText.slice(1, obj.innerText.length)
        ans = eval(ans)
    }
    else {
        ans = obj.innerText
        ans = eval(ans)
    }
    obj.innerText = '='
    obj.innerText += ans
}