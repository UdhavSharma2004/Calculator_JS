let urname=prompt("Hello! This Calculator is created by Udhav Sharma😎.\nThanks for using this product\nCan you please share you name->")
if(urname==null||urname==""){
urname="Mr. Anonymous"
}
document.getElementById("urnamei").innerText+="\n User : "+urname
let obj=document.getElementById("display")
    let count=0;
    let ans;
    function pro(value){
        if(obj.innerText=="0"){
            if(value=='a'){
                ans=0;
                obj.innerText=0;
                return;
            }
            if(value=='z'){
                obj.innerText+=0;
                obj.innerText+=0;
                ans+=00;
                return;
            }
            ans=value;
            obj.innerText=value;
            return;
        }
        if(value=='a'){
            ans=0
            obj.innerText=0;
            return;
        }
        if(value=='c'){
            obj.innerText=obj.innerText.slice(0, obj.innerText.length-1)
            ans=obj.innerText
            return;
        }
        if(value=='z'){
            obj.innerText+=0;
            obj.innerText+=0;
            ans+=00;
            return;
        }
        ans+=value
        obj.innerText+=value;
    }
    function equal(){
        let eq=obj.innerText.slice(0,1)
        if(eq=='='){
            ans=obj.innerText.slice(1, obj.innerText.length)
            ans= eval(ans)
        }
        else{
            ans=obj.innerText
       ans= eval(ans)
        }
        obj.innerText='='
        obj.innerText+=ans
    }