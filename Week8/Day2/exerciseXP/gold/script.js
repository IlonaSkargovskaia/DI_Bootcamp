let landscape = () => {

    let result = "";
   
    let flat = (x) => {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = (x) => {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\";
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
}
   
console.log(landscape());

// as for me this will be ____/''''\____ because at first we go to flat func and add to result ____, after we jump to mountain and line by line inside loop adding to result string ' 4 times, next we go to result outside loop and add \ and again call function flat 4 times




