
 const romanHash ={
    I: 1,
    V : 5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
};
const s = "MCICXXX";
function romanToInt(s){
    let a = 0;
    for(let i =0; i<s.length; i++){
        if(s[i] === "I" && s[i+1] === "V"){
            a+=4;
            i++;
        }else if(s[i]==="I" && s[i+1]==="X"){
            a+=9;
            i++;
        }else if(s[i]==="X" && s[i+1]==="L"){
            a+=40;
            i++;
        }else if(s[i]==="X" && s[i+1]==="C"){
            a+=90;
            i++;
        }else if(s[i]==="C" && s[i+1]==="D"){
            a+=400;
            i++;
        }else if(s[i]==="C" && s[i+1]==="M"){
            a+=900;
            i++;
        }
        else{
            a += romanHash[s[i]];
        }
    }
    return a;

}
console.log(romanToInt(s))