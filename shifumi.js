/**
 * 
 */
score = [0,0]; 

document.getElementById("stoneBtn").addEventListener("click", function(){ play("stone"); });
document.getElementById("paperBtn").addEventListener("click", function(){ play("paper"); });
document.getElementById("scisorsBtn").addEventListener("click", function(){ play("scisors"); });


document.getElementById("stoneBtn").addEventListener("mouseover", function(){ console.log("on"); });
document.getElementById("stoneBtn").addEventListener("mouseover", function(){ document.getElementById("stoneBtn").style.border="2px solid"; });
document.getElementById("stoneBtn").addEventListener("mouseout",  function(){ console.log("off"); });
document.getElementById("stoneBtn").addEventListener("mouseout", function(){ document.getElementById("stoneBtn").style.border="0px"; });

document.getElementById("paperBtn").addEventListener("mouseover", function(){ document.getElementById("paperBtn").style.border="2px solid"; });
document.getElementById("paperBtn").addEventListener("mouseout", function(){ document.getElementById("paperBtn").style.border="0px"; });

document.getElementById("scisorsBtn").addEventListener("mouseover", function(){ document.getElementById("scisorsBtn").style.border="2px solid"; });
document.getElementById("scisorsBtn").addEventListener("mouseout", function(){ document.getElementById("scisorsBtn").style.border="0px"; });




function array_idx_of(array, val){
    for(var i=0; i<array.length; i++){
        if(val == array[i]) return i;
    }
    return -1;
}

function play(p_val) {
	var valpos = ["stone","paper","scisors"];
	var result_val =["nobody", "me", "you"];
	
	// validation de la valeur
	var p_idx = array_idx_of(valpos, p_val);
	if (p_idx < 0){
		console.log(p_val + " n'est pas une valeure possible.");
		return;
	}
	
	// computer val:
	var c_idx = Math.floor((Math.random() * valpos.length));
	var c_val = valpos[c_idx];
	
	var result_idx = (3 + c_idx - p_idx) % 3; 
	var result = result_val[result_idx];
	
	if (result_idx != 0){
		score[result_idx-1]++;
	}
	
	document.getElementById("message").innerHTML = "You played " + p_val.toUpperCase() + " and I played " + c_val.toUpperCase() + " => the winner is " + result.toUpperCase() ;
	document.getElementById("score").innerHTML = score[0] + " / " + score[1];
    
}
