const {Stack} = require("./Stack.js");

function parenthesisChecker(sta, str){
    for(i = 0; i < str.length; i++){
        if(str[i] == "[" || str[i] == '{' || str[i] == "(") {
            sta.push(str[i]);
        }else if(str[i] == "]"){
            if(sta.peek() == "["){
                sta.pop()
            }
        }else if(str[i] == ")"){
            if(sta.peek() == "("){
                sta.pop()
            }
        }else if(str[i] == "}"){
            if(sta.peek() == "{"){
                sta.pop()
            }
        }
    }

    return sta.length() == 0;
}


sta = new Stack();
console.log(parenthesisChecker(sta, "([]"));