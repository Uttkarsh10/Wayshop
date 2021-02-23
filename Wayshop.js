var men  = document.getElementsByClassName("menbox");
var women  = document.getElementsByClassName("womenbox");
var bag  = document.getElementsByClassName("bagbox");
var watch  = document.getElementsByClassName("watchbox");

function displayAll(){
    men[0].style.display="";
    watch[0].style.display="";
    women[0].style.display="";
    bag[0].style.display="";
    document.getElementsByClassName("o")[0].style.backgroundColor="black";
    document.getElementsByClassName("o1")[0].style.backgroundColor="red";
    document.getElementsByClassName("o2")[0].style.backgroundColor="red";
}

function dispalyTopfea(){
    men[0].style.display="none";
    watch[0].style.display="none";
    women[0].style.display="";
    bag[0].style.display="";
    document.getElementsByClassName("o1")[0].style.backgroundColor="black";
    document.getElementsByClassName("o")[0].style.backgroundColor="red";
    document.getElementsByClassName("o2")[0].style.backgroundColor="red";
}

function displayBestseller(){
    women[0].style.display="none";
    bag[0].style.display="none";
    men[0].style.display="";
    watch[0].style.display="";
    document.getElementsByClassName("o2")[0].style.backgroundColor="black";
    document.getElementsByClassName("o1")[0].style.backgroundColor="red";
    document.getElementsByClassName("o")[0].style.backgroundColor="red";
}

function paraMouseOver(){
    document.getElementsByClassName("ww1")[0].style.color="red";
}
function onMouseout(){
    document.getElementsByClassName("ww1")[0].style.color="black";
}


function paraMouseOver2(){
    document.getElementsByClassName("ww2")[0].style.color="red";
}
function onMouseout2(){
    document.getElementsByClassName("ww2")[0].style.color="black";
}


function paraMouseOver3(){
    document.getElementsByClassName("ww3")[0].style.color="red";
}
function onMouseout3(){
    document.getElementsByClassName("ww3")[0].style.color="black";
}


function paraMouseOver4(){
    document.getElementsByClassName("ww4")[0].style.color="red";
}
function onMouseout4(){
    document.getElementsByClassName("ww4")[0].style.color="black";
}


function paraMouseOver5(){
    document.getElementsByClassName("ww5")[0].style.color="red";
}
function onMouseout5(){
    document.getElementsByClassName("ww5")[0].style.color="black";
}


function paraMouseOver6(){
    document.getElementsByClassName("ww6")[0].style.color="red";
}
function onMouseout6(){
    document.getElementsByClassName("ww6")[0].style.color="black";
}




function paraMouseOver7(){
    document.getElementsByClassName("g1")[0].style.backgroundColor="black";
}
function onMouseout7(){
    document.getElementsByClassName("g1")[0].style.backgroundColor="red";
}

function paraMouseOver8(){
    document.getElementsByClassName("g2")[0].style.backgroundColor="black";
}
function onMouseout8(){
    document.getElementsByClassName("g2")[0].style.backgroundColor="red";
}

function paraMouseOver9(){
    document.getElementsByClassName("g3")[0].style.backgroundColor="black";
}
function onMouseout9(){
    document.getElementsByClassName("g3")[0].style.backgroundColor="red";
}

function paraMouseOver10(){
    document.getElementsByClassName("g21")[0].style.backgroundColor="black";
}
function onMouseout10(){
    document.getElementsByClassName("g21")[0].style.backgroundColor="red";
}

function paraMouseOver11(){
    document.getElementsByClassName("g22")[0].style.backgroundColor="black";
}
function onMouseout11(){
    document.getElementsByClassName("g22")[0].style.backgroundColor="red";
}

function paraMouseOver12(){
    document.getElementsByClassName("g23")[0].style.backgroundColor="black";
}
function onMouseout12(){
    document.getElementsByClassName("g23")[0].style.backgroundColor="red";
}
