
//document.getElementById("kepekHely").innerHTML="alma"

let sz=""
let szamlalo=1

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(i+" "+j)
        sz+=`<img id="${szamlalo}" onmouseover="szegelyRajzol(this.id)" onmouseleave="szegelyLevesz(this.id)" onclick="nagyit(this.id)" src="a${szamlalo}.jpg" alt="" style="width:50px;margin:5px">`
        szamlalo++
    }
    sz+=`<br>`
}

document.getElementById("kepekHely").innerHTML = sz

let megoldas=""
let aktualisSzam=-1
let elozo=-1
let ossz=0
let helyes=0

function nagyit(id){
    //alert(id)
    aktualisSzam=id
    if (elozo!=-1){
    document.getElementById(elozo).style.filter="invert(0%)"
    document.getElementById(elozo).style.border="2px solid black"
}
    document.getElementById(id).style.filter="invert(100%)"
    
    document.getElementById("nagyKep").innerHTML=`<img src="a${id}.jpg" alt="" style="width:100px">`
    elozo=id

    //tonbből kiszedni a adat
    //bekever
    //gombra ra
    megoldas=nevekTomb[id-1].megoldas
    let keveres=[]
    keveres.push(nevekTomb[id-1].megoldas)
    keveres.push(nevekTomb[id-1].tipp1)
    keveres.push(nevekTomb[id-1].tipp2)
    keveres.push(nevekTomb[id-1].tipp3)
    console.log(keveres)
    for (let i = 0; i < 100; i++) {
        let rSzam=Math.floor(Math.random()*4)
        let rSzam2=Math.floor(Math.random()*4)
        let csere = keveres[rSzam]
        keveres[rSzam] = keveres[rSzam2]
        keveres[rSzam2] = csere
    }

    document.getElementById("ki").innerHTML=`Ki ez az arc"<br>
    <button onclick="gombKatt('${keveres[0]}')">${keveres[0]}</button>
    <button onclick="gombKatt('${keveres[1]}')">${keveres[1]}</button>
    <button onclick="gombKatt('${keveres[2]}')">${keveres[2]}</button>
    <button onclick="gombKatt('${keveres[3]}')">${keveres[3]}</button>`
   
}

function szegelyRajzol(id){
    document.getElementById(id).style.border='1px solid blue'
}

function szegelyLevesz(id){
    document.getElementById(id).style.border='none'
}
    
function gombKatt(aktualis){
    if (megoldas==aktualis){
        helyes++;
        ossz++;
        alert("Helyes")
        if (aktualisSzam==nevekTomb.length-1)
            aktualisSzam=0
        else
            aktualisSzam++
        
    }
        
    else
        alert("haha")
    ossz++;
}

document.getElementById("pontHelye").innerHTML=`Pontok: ${helyes}/${ossz} ${100*helyes/osszes}%`
