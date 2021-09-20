function findNguyenAm(){
    var str = document.getElementById("t1").value
    for(i=0; i < str.length; i++){
        if(str.charAt(i)=="e" || str.charAt(i)=="u" || str.charAt(i)=="o" || str.charAt(i)=="a" || str.charAt(i)=="i")
        return (" Nguyen am cua chuoi " + str + " tai vi tri " + (i+1));
    }
    return (" Khong tim thay nguyen am trong chuoi " + str);
}

function reverse(num){
    temp = num;
    while(num !=0){
        return num.reverse();
    }
}