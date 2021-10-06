const abc = ['a','b','c','d','f','g','h','i','j',
'k','l','m','n','ñ','o','p','q','r','s','t','u',
'v','w', 'x','y','z'];
let key = "";

$(document).ready(function(){
    $('#ci').click(function(){
        jeay = document.getElementById('llave').value;
        key = key.replace(/ /g, '');

        let mess = document.getElementById('mess').value;
        mess = mess.replace(/ /g, '');
        let newMess = "";
        let keycomplete = "";
        if( reivision(mess,key)){
            for(var i = 0; i<mess.legth; i++){
                keycomplete += key.charAt((i%Number(key.length)));
            }
            alert(keycomplete);

            for(var i = 0; i<mess.legth; i++){
                let char = mess.charAt(i);
                let posm = getPos(charr);

                charr = keycomplete.charAt(i);

                let newval = change(posm, posk);
                let posk = getPos(charr);

                newMess += abc[newval];
            }
            document.getElementById('rs').value = newMess;
           
        }else{

        }


    });
    $('#de').click(function(){
        jeay = document.getElementById('llave').value;
        key = key.replace(/ /g, '');

        let mess = document.getElementById('mess').value;
        mess = mess.replace(/ /g, '');
        let newMess = "";
        let keycomplete = "";
        if( reivision(mess,key)){
            for(var i = 0; i<mess.legth; i++){
                keycomplete += key.charAt((i%Number(key.length)));
            }
            alert(keycomplete);

            for(var i = 0; i<mess.legth; i++){
                let char = mess.charAt(i);
                let posm = getPos(charr);

                charr = keycomplete.charAt(i);

                let newval = rechange(posm, posk);
                let posk = getPos(charr);

                newMess += abc[newval];
            }
            document.getElementById('rs').value = newMess;
           
        }else{

        }


    });

});

function change(posm, posk){

let y = (posm+posk)%27;
return y;
}

function rechange(pos, posk){
    let val = 0;
    if((posm-posk)>=0){
        val = (posm+posk)%27;     
    }
    else{
        val = (posm-posk)%27;
    }
    return val;
}

function getPos(letra){
let position = abc.indexOf(letra);
return position;
}

function reivision(mess, desp){
    const re = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ?]+)*)$/
    var acc = true;
    if(!re.test(mess)){
        sd();
        acc = false;
    }
    if(!re.test(mess)){
        sdd();
        acc = false;
}
}
