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
        ans=obj.innerText
       obj.innerText= eval(ans)
    }