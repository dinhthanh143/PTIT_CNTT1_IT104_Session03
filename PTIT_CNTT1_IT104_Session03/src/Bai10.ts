const filterDupes = (str:string):string =>{
    let newStr:string = ""
    for (let i =0; i<str.length; i++){
        if(!newStr.includes(str[i]!)) {
            newStr += str[i];
        }
    }
    return newStr;
}

const findBlank = (str:string):number =>{
    let count:number = 0
    for (let i =0; i<str.length; i++){
        if(str[i] === " "){
            count++
        }
    }
    return count
}
const findLongest = (arr:string):void =>{
    let newArr:string[] = []
    let blankCount = findBlank(arr!)
    for (let i =0; i<=blankCount; i++){
        newArr.push(filterDupes(arr.split(" ")[i]!))
    }
    let longestStr:string = newArr.reduce((a,b)=> b.length > a.length ? b:a)
    console.log(longestStr)
}
const sentence = "hello world apple banana orange pumpkin cucumber"
findLongest(sentence)




