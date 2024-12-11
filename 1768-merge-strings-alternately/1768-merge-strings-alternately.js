/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  /*
  let i =0, j=0;
    let str="";
    while(i < word1.length && j < word2.length){
         str += (str.length%2==0)?word1[i++] :word2[j++] 
  
    }

    while( i < word1.length){
         str +=  word1[i++];
    }

    while(j<word2.length){
          str+= word2[j++];
    }

    return str;  
    */
    
    let maxlength = Math.max(word1.length,word2.length);
    let res = [];
    for(let i=0;i<maxlength;i++){
        res.push(word1[i])
        res.push(word2[i])
    }
    return res.join("")
};