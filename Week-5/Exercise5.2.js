const isVowel = (char) => {
    return 'aeiou'.includes(char)
}

const vowelCount = (str) => {
    const vowelMap = new Map()
    for(let char of str){
        let loweChar = char.toLowerCase() 
        if(isVowel(loweChar)){
            if(vowelMap.has(loweChar)){
                vowelMap.set(loweChar,vowelMap.get(loweChar)+1)
            }else{
                vowelMap.set(loweChar, 1);
            }
        }
    }
    return vowelMap;
}


console.log(vowelCount('Aman Malhotra'))