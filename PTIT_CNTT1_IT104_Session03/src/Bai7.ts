const filterDupes = (str:string):void =>{
    let newStr:string = ""
    for (let i =0; i<str.length; i++){
        if(!newStr.includes(str[i]!)) {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

filterDupes("banana")
filterDupes("hello world")