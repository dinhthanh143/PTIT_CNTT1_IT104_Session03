const filterDupes = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (!newStr.includes(str[i])) {
            newStr += str[i];
        }
    }
    console.log(newStr);
};
filterDupes("banana");
filterDupes("hello world");
export {};
//# sourceMappingURL=Bai7.js.map