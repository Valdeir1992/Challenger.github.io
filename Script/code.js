
 const PATTERN_ENCRYPT = /[aeiou]/gm;
 const PATTERN_DESENCRYPT =/ai|enter|imes|ober|ufat/gm;

 let inputEnigme = document.querySelector('.enigme');
 let textInputEnigme = inputEnigme.querySelector('input');
 let inputBombe = document.querySelector('.theBombe');
 let textInputBombe = inputBombe.querySelector('input');
 let btnEncrypt = document.querySelector('button[name="encrypt"]');
 let btnDescrypt = document.querySelector('button[name="desencrypt"]');
 let btnCopy = document.querySelector('button[name="copy"]');

 btnEncrypt.onclick  = function(){ 
     if(textInputEnigme.value != ''){
        textInputBombe.value = Encrypt(textInputEnigme.value);   
     }
 }

 btnDescrypt.onclick = function(){
     if(textInputBombe.value != ''){
        textInputEnigme.value = Desencrypt(textInputBombe.value);
     }
 } 

 btnCopy.onclick = function(){
    if(textInputBombe.value != ''){
        textInputBombe.select();
       document.execCommand('copy');
    }
} 

 function Encrypt(text){
     let match = text.replace(PATTERN_ENCRYPT,function(letter){
        if(letter == 'a'){
            letter = 'ai';
        }else if(letter == 'e'){
            letter = 'enter';
        }else if(letter == 'i'){
            letter = 'imes';
        }else if(letter == 'o'){
            letter = 'ober';
        }else if(letter == 'u'){
            letter = 'ufat';
        }
        return letter;
     })
     return match;
 } 

 function Desencrypt(text){
    let match = text.replace(PATTERN_DESENCRYPT,function(subString){
       if(subString == 'ai'){
           subString = 'a';
       }else if(subString == 'enter'){
           subString = 'e';
       }else if(subString == 'imes'){
           subString = 'i';
       }else if(subString == 'ober'){
           subString = 'o';
       }else if(subString == 'ufat'){
           subString = 'u';
       }
       return subString;
    })
    return match;
}  