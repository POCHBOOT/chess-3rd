
let board=document.querySelector(".board");
let bg=[128,0];
let toggle=function(arr){
    let a=arr[0];
    let b=arr[1];
    arr[0]=b;
    arr[1]=a
}
let players=["white","black"];
 let cplayer="white";
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        board.innerHTML+=`<div class="inner" id="G${(i*8)+j}" style="top:${i*(125/10)}%; left:${j*(125/10)}%; background-color:rgb(${bg[1]},128,${bg[1]});"></div>`;
        toggle(bg);
        if((j+1)%8==0){
            toggle(bg);
        };
    };
};
let l3w=[];
let l3b=[];
let l3wp=[];
let l3bp=[];
function reser(){
document.querySelector("#G0").innerHTML=`<img  class="black rook unmoved" src="black rook.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G1").innerHTML=`<img  class="black knight" src="black knight.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G2").innerHTML=`<img  class="black bishop" src="black bishop.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G3").innerHTML=`<img  class="black queen" src="black queen.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G4").innerHTML=`<img  class="black king unmoved" src="black king.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G5").innerHTML=`<img  class="black bishop" src="black bishop.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G6").innerHTML=`<img  class="black knight" src="black knight.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G7").innerHTML=`<img  class="black rook unmoved" src="black rook.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G8").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G9").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G10").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G11").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G12").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G13").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G14").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G15").innerHTML=`<img  class="black pawn" src="black pawn.png" alt="black-king" width="10%" height="10%"></img>`;
document.querySelector("#G63").innerHTML=`<img  class="white rook unmoved" src="white rook.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G62").innerHTML=`<img  class="white knight" src="white knight.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G61").innerHTML=`<img  class="white bishop" src="white bishop.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G59").innerHTML=`<img  class="white queen" src="white queen.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G60").innerHTML=`<img  class="white king unmoved" src="white king.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G58").innerHTML=`<img  class="white bishop" src="white bishop.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G57").innerHTML=`<img  class="white knight" src="white knight.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G56").innerHTML=`<img  class="white rook unmoved" src="white rook.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G55").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G54").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G53").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G52").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G51").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G50").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G49").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
document.querySelector("#G48").innerHTML=`<img  class="white pawn" src="white pawn.png" alt="white-king" width="10%" height="10%"></img>`;
for(let i=16;i<48;i++){
    let id="#G"+i
    document.querySelector(id).innerHTML="";
}
l3bp=[];
l3wp=[];
l3w=[];
l3b=[];

}
reser();

let pz=[];
let pws=[];
function pc(){
   pz=[];
   for(let z=0;z<x.length;z++){
if(x[z].children.length>0){
    if(x[z].children[0].classList.contains("black")){
        pz.push(z)
    }
}
}
return pz;
}
function pk(){
    pws=[];
    for(let z=0;z<x.length;z++){
 if(x[z].children.length>0){
     if(x[z].children[0].classList.contains("white")){
         pws.push(z)
     }
 }
 }
 return pws;
 }
 function sr(arr1,arr2){
let dum=[];
if(arr1.length<1){
    return [];
}
for(let b=0;b<arr2.length;b++){
    if(arr1.includes(arr2[b])){
        dum.push(arr2[b])
    }
}
return dum;
 }
 function compw(arr1){
    let bp=pc();
    let wp=pk();
let mr1=sr(bp,arr1);
let sr1=sr(wp,arr1);
/*if(ranks[7].includes(sr1[sr1.length-1])){
    sr1.pop();
    }*/
    /*let r=sr1.indexOf(60);
sr1.splice(r,1)*/
sr1=sr1.filter(cc => cc!=60 && cc!=63);
if(mr1.length>0){
    bp=Math.max(...mr1);
}
if(sr1.length>0){
    wp=Math.max(...sr1);
}
if(mr1.length==0){
    return false;
}
if(sr1.length==0 && mr1.length==0){
    return false;
}
if(sr1.length==0 && mr1.length>0){
    
    return true;
}
if(bp>wp){
    
    return true;
}else{
    return false;
}
 }
 
 function compb(arr1){
    let bp=pc();
    let wp=pk();
let mr1=sr(bp,arr1);
let sr1=sr(wp,arr1);
/*if(ranks[0].includes(mr1[mr1.length-1])){
    mr1.pop();
    }*/
    /*let r=sr1.indexOf(4);
sr1.splice(r,1)*/
mr1=mr1.filter(cc => cc!=4 && cc!=7);
if(mr1.length>0){
    bp=Math.min(...mr1);
}
if(sr1.length>0){
    wp=Math.min(...sr1);
}
if(sr1.length==0){
    
    return false;
}
if(sr1.length==0 && mr1.length==0){
    
    return false;
}
if(sr1.length>0 && mr1.length==0){
  
    return true;
}
if(wp<bp){
 
    return true;
}else{
    return false;
}
 }
 function gn(arr1){
    let bp=pc();
    let wp=pk();
let mr1=sr(bp,arr1);
let sr1=sr(wp,arr1);
/*if(ranks[7].includes(sr1[sr1.length-1])){
sr1.pop();
}*/
sr1=sr1.filter(cc => cc!=60 && cc!=63);
if(mr1.length>0){
    bp=Math.max(...mr1);
}else if(mr1.length==0){
   bp=0;
  
}
if(sr1.length>0){
    wp=Math.max(...sr1);
}else if(sr1.length==0){
    wp=0
    
}
if(bp>wp){
   
    return bp;
}
if(wp>bp){
 
    return wp;
}
 }
 function gnb(arr1){
    let bp=pc();
    let wp=pk();
let mr1=sr(bp,arr1);
let sr1=sr(wp,arr1);
/*if(ranks[7].includes(sr1[sr1.length-1])){
sr1.pop();
}*/
mr1=mr1.filter(cc => cc!=4 && cc!=7);
if(mr1.length>0){
    bp=Math.min(...mr1);
}else if(mr1.length==0){
   bp=63;
  
}
if(sr1.length>0){
    wp=Math.min(...sr1);
}else if(sr1.length==0){
    wp=63
    
}
if(bp<wp){
   
    return bp;
}
if(wp<bp){
 
    return wp;
}
 }
/*
make 
white pcs
blackdiag white diag

*/ 
let wnsc=[55,54,52,51,50,43,44,45,46,47];
let wpsc=[55,54,53,52,51]
let bnsc=[23,22,21,20,19,15,14,12,11,10];
let bpsc=[15,14,12,11,10,13]
function castle(){
    let d;
    let n;
if(cplayer=="white"){
   
    if(x[60].children.length>0 && x[60].children[0].classList.contains("unmoved")){
        if(x[63].children.length>0 && x[63].children[0].classList.contains("unmoved")){
if(x[61].children.length==0 && x[62].children.length==0){
  d=compw(files[4]);
   n=gn(files[4]);
   if(d){
    if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(files[5]);
   n=gn(files[5]);
   if(d){
    if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(files[6]);
   n=gn(files[6]);
   if(d){
    if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(ranks[7]);
   n=gn(ranks[7]);
   if(d){
    if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(diagwtl[6]);
   n=gn(diagwtl[6]);
   if(d){
    if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(diagbtl[6]);
   n=gn(diagbtl[6]);
   if(d){
    if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(diagbtl[5]);
   n=gn(diagbtl[5]);
   if(d){
    if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(diagwbl[2]);
   n=gn(diagwbl[2]);
   if(d){
    if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(diagbbl[3]);
   n=gn(diagbbl[3]);
   if(d){
    if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   d=compw(diagbbl[2]);
   n=gn(diagbbl[2]);
   if(d){
    if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
        return;
    }
   }
   let k=pc()
   d=sr(k,wnsc)
   for(let v=0;v<d.length;v++){
    if(x[d[v]].children[0].classList.contains("knight") ){
        return;
    }
   }
   d=sr(k,[52])
   if(d.length>0 && x[d[0]].children[0].classList.contains("king")){
    return;
   }
   d=sr(k,wpsc)
   for(let v=0;v<d.length;v++){
    if(x[d[v]].children[0].classList.contains("pawn") ){
        return;
    }
   }
    if(confirm("castle short")){
       
        l3bp=[];
        l3wp=[];
        l3w=[];
        l3b=[];
        x[60].children[0].classList.remove("unmoved");
        x[63].children[0].classList.remove("unmoved");
    x[62].innerHTML=x[60].innerHTML;
    x[61].innerHTML=x[63].innerHTML;
    x[60].innerHTML="";
    x[63].innerHTML="";
    x[cp].classList.remove("selected");
for(let j=0;j<ps.length;j++){
    x[ps[j]].classList.remove("possible-moves");
}
players[0]=players[1];
players[1]=cplayer;
cplayer=players[0];


      piece=undefined;
    called=true;
 
      call();
      return;
}
        }
    }
    if(x[56].children.length>0 && x[56].children[0].classList.contains("unmoved")){
        if(x[57].children.length==0 && x[58].children.length==0  && x[59].children.length==0){
            if(confirm("castle long")){
                l3bp=[];
        l3wp=[];
        l3w=[];
        l3b=[];
            x[60].children[0].classList.remove("unmoved");
            x[56].children[0].classList.remove("unmoved");
            x[58].innerHTML=x[60].innerHTML;
            x[59].innerHTML=x[56].innerHTML;
            x[60].innerHTML="";
            x[56].innerHTML="";
            x[57].innerHTML="";
            x[cp].classList.remove("selected");
        for(let j=0;j<ps.length;j++){
            x[ps[j]].classList.remove("possible-moves");
        }
        players[0]=players[1];
        players[1]=cplayer;
        cplayer=players[0];
        
        
              piece=undefined;
            called=true;
         
              call();
              return;
        }
    }
}
}
}
if(cplayer=="black"){
    if(x[4].children.length>0 && x[4].children[0].classList.contains("unmoved")){
        if(x[7].children.length>0 && x[7].children[0].classList.contains("unmoved")){
if(x[5].children.length==0 && x[6].children.length==0){
    d=compb(files[4]);
    n=gnb(files[4]);
    if(d){
     if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(files[5]);
    n=gnb(files[5]);
    if(d){
     if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(files[6]);
    n=gnb(files[6]);
    if(d){
     if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(ranks[0]);
    n=gnb(ranks[0]);
    if(d){
     if(x[n].children[0].classList.contains("rook") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(diagwtl[2]);
    n=gnb(diagwtl[2]);
    if(d){
     if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(diagwtl[3]);
    n=gnb(diagwtl[3]);
    if(d){
     if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(diagbtl[2]);
    n=gnb(diagbtl[2]);
    if(d){
     if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(diagwbl[5]);
    n=gnb(diagwbl[5]);
    if(d){
     if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(diagbbl[6]);
    n=gnb(diagbbl[6]);
    if(d){
     if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    d=compb(diagwbl[6]);
    n=gnb(diagwbl[6]);
    if(d){
     if(x[n].children[0].classList.contains("bishop") || x[n].children[0].classList.contains("queen")){
         return;
     }
    }
    let kk=pk()
    d=sr(kk,bnsc)
    for(let v=0;v<d.length;v++){
     if(x[d[v]].children[0].classList.contains("knight") ){
         return;
     }
    }
    d=sr(kk,[12])
    if(d.length>0 && x[d[0]].children[0].classList.contains("king")){
     return;
    }
    d=sr(kk,bpsc)
    for(let v=0;v<d.length;v++){
     if(x[d[v]].children[0].classList.contains("pawn") ){
         return;
     }
    }
    if(confirm("castle short")){
        l3bp=[];
        l3wp=[];
        l3w=[];
        l3b=[];
        x[4].children[0].classList.remove("unmoved");
        x[7].children[0].classList.remove("unmoved");
    x[6].innerHTML=x[4].innerHTML;
    x[5].innerHTML=x[7].innerHTML;
    x[4].innerHTML="";
    x[7].innerHTML="";
    x[cp].classList.remove("selected");
for(let j=0;j<ps.length;j++){
    x[ps[j]].classList.remove("possible-moves");
}
players[0]=players[1];
players[1]=cplayer;
cplayer=players[0];


      piece=undefined;
    called=true;
 
      call();
      return;
}
        }
    }
    if(x[0].children.length>0 && x[0].children[0].classList.contains("unmoved")){
        if(x[1].children.length==0 && x[2].children.length==0  && x[3].children.length==0){
            if(confirm("castle long")){
                l3bp=[];
        l3wp=[];
        l3w=[];
        l3b=[];
            x[4].children[0].classList.remove("unmoved");
            x[0].children[0].classList.remove("unmoved");
            x[2].innerHTML=x[4].innerHTML;
            x[3].innerHTML=x[0].innerHTML;
            x[0].innerHTML="";
            x[4].innerHTML="";
            x[1].innerHTML="";
            x[cp].classList.remove("selected");
        for(let j=0;j<ps.length;j++){
            x[ps[j]].classList.remove("possible-moves");
        }
        players[0]=players[1];
        players[1]=cplayer;
        cplayer=players[0];
        
        
              piece=undefined;
            called=true;
         
              call();
              return;
        }
    }
}
}
}
}
let btw=document.getElementById("white");
btw.addEventListener("click",castle);
let btb=document.getElementById("black");
btb.addEventListener("click",castle);

 function adder(arr,v){
    let dum=[...arr];
for(let i=0;i<arr.length;i++){
   dum[i]+=v;
};
return dum;
 }
 function rchange(arr,s,e){
    let sr;
    let er;
for(let i=0;i<arr.length;i++){
if(arr[i].includes(s)){
    sr=i;
}
if(arr[i].includes(e)){
    er=i;
}
}
return er-sr;
 }
 
/*
white pawn:-8
black pawn:+8
center cases
king:-+(9,8,7,1)
bottom right:-(9,8,1)
bottom left:+(1),-(8,7)
top right:-(1),+(7,8)
top left:+(1,8,9)
left edge:-(7,8),+(1,8,9)
right edge:+(7,8),-(1,8,9)
top edge:+(1,7,8,9),-(1)
bottom edge:+(1,7,8,9),-(1)

bishop:+-((7,9)*1,2,...7)
-(7)*1,2,,7
rchange=-i
fchange=+i
-9
rchange=-i
fchange=-i
+7
rchange=+i
fchange=-i
+9
rchange=+i
fchange=+i
knight:+-(17,15,10,6)
-6 rc=-1,fc=+2
+6 rc=1,fc=-2
-10 rc=-1,fc=-2
+10 rc=1,fc =2
-17 rc=-2,fc=-1
-15 rc=-2,fc=1
rook:+-(1to7,(1to7)*8)

queen:rook + bishop
*/ 

let x=document.querySelector(".board").children;

let lefte=[];
for(let i=0;i<8;i++){
    lefte.push(i*8);
};
let righte=[];
for(let i=0;i<8;i++){
    righte.push(7+(i*8));
}
let tope=[];
for(let i=0;i<8;i++){
    tope.push(i);
}
let ranks=[];
for(let i=0;i<8;i++){
    ranks.push(adder(tope,i*8))
}
let files=[];
for(let i=0;i<8;i++){
    files.push(adder(lefte,i))
}
let diagwtl=[[0],[2,9,16],[4,11,18,25,32],[6,13,20,27,34,41,48],[15,22,29,36,43,50,57],[31,38,45,52,59],[47,54,61],[63]];
let diagbtl=[[1,8],[3,10,17,24],[5,12,19,26,33,40],[7,14,21,28,35,42,49,56],[23,30,37,44,51,58],[39,46,53,60],[55,62]];
let diagwbl=[[57,48],[59,50,41,32],[61,52,43,34,25,16],[63,54,45,36,27,18,9,0],[47,38,29,20,11,2],[31,22,13,4],[15,6]];
let diagbbl=[[56],[58,49,40],[60,51,42,33,24],[62,53,44,35,26,17,8],[55,46,37,28,19,10,1],[39,30,21,12,3],[23,14,5],[7]];
/*for(let i=1;i<4;i++){
    let pa=[];
    let cn=0;
  while(pa.length<(i*2)+1){
    pa.push((i*2)+(cn*7))
cn++

    }
    cn=0;
    diagw.push(pa);
}
for(let i=0;i<4;i++){
    let pa=[];
    let cn=0;
    let sa=7;
  while(sa>0){
    pa.push(files[7][1+(i*2)]+(cn*7))
cn++
    }
    sa-=2;
    cn=0;
    if(pa.length>1){
    diagw.push(pa);
    }
}*/
    


let cp;
let piece;
let ps=[];
let cs=[];

let ccp;
function call(){
for(let i=0;i<x.length;i++){
   
    if(x[i].children.length>0){
        
        function caller(){
          
           
           piece= x[i].children[0].classList;
           if(document.getElementsByClassName("cap").length>0){
           if(!piece.contains(cplayer) && x[i].classList.contains("cap")){
         
            
            if(l3b.length==3 && cplayer=="black"){
                l3b.shift()
            }
            if(l3w.length==3 && cplayer=="white"){
                l3w.shift()
            }
            if(cplayer=="black"){
                l3b.push(i)
            }else{
                l3w.push(i)
            }
            if(l3bp.length==3 && cplayer=="black"){
                l3bp.shift()
            }
            if(l3wp.length==3 && cplayer=="white"){
                l3wp.shift()
            }
            if(cplayer=="black"){
                l3bp.push(ccp)
            }else{
                l3wp.push(ccp)
            }
            if(x[cp].children[0].classList.contains("unmoved")){
                x[cp].children[0].classList.remove("unmoved")
            }
            x[i].classList.remove("cap");
            if(x[cp].children[0].classList.contains("pawn")){
                if(ranks[0].includes(i) || ranks[7].includes(i)){
        if(confirm( "to queen")==true){
            x[i].innerHTML=`<img  class="${cplayer} queen" src="${cplayer} queen.png" alt="white-king" width="10%" height="10%"></img>`;
        }else if(confirm("to knight")==true){
            x[i].innerHTML=`<img  class="${cplayer} knight" src="${cplayer} knight.png" alt="white-king" width="10%" height="10%"></img>`;
        }else if(confirm("to bishop")==true){
            x[i].innerHTML=`<img  class="${cplayer} bishop" src="${cplayer} bishop.png" alt="white-king" width="10%" height="10%"></img>`;
        }else if(confirm("to rook")==true){
            x[i].innerHTML=`<img  class="${cplayer} rook" src="${cplayer} rook.png" alt="white-king" width="10%" height="10%"></img>`;
        }else{
            x[i].innerHTML=`<img  class="${cplayer} queen" src="${cplayer} queen.png" alt="white-king" width="10%" height="10%"></img>`;
        }
        x[cp].innerHTML="";
        x[cp].classList.remove("selected");
        for(let j=0;j<ps.length;j++){
            x[ps[j]].classList.remove("possible-moves");
        }
        if(document.getElementsByClassName("king").length==1){
   
            window.alert(`${cplayer} wins `)
      reser();
      if(cplayer=="white"){
        players[0]=players[1];
        players[1]=cplayer;
        cplayer=players[0];
        }
        //call();
        //return;
    }
        players[0]=players[1];
        players[1]=cplayer;
        cplayer=players[0];
        
        //cp=undefined;
              piece=undefined;
            called=true;
         
              call();
              return;
    }
}
           //x[i].classList.remove("cap");

x[i].innerHTML=x[cp].innerHTML;
document.querySelector(".selected").innerHTML="";

for(let j=0;j<ps.length;j++){
    x[ps[j]].classList.remove("possible-moves");
}
if(document.getElementsByClassName("king").length==1){
   
        window.alert(`${cplayer} wins `)
 reser()
 if(cplayer=="white"){
    players[0]=players[1];
    players[1]=cplayer;
    cplayer=players[0];
    }
   // call();
   // return;
}
players[0]=players[1];
players[1]=cplayer;
cplayer=players[0];


      piece=undefined;
    called=true;
    return;
          
}  
        }
        if(document.getElementsByClassName("cap").length>0){
document.getElementsByClassName("cap")[0].classList.remove("cap")
        }
      
         if(cs.length>0){
          
           /* for(let j=0;j<res.length;j++){
             res[j].classList.remove("possible-moves")
            }*/
            let pm=document.getElementsByClassName("possible-moves");
            for(let i=0;i<ps.length;i++){
                x[ps[i]].classList.remove("possible-moves");
            }
            cs[0].classList.remove("selected");
           cs.shift();
         }
            cp=i;
           
            x[i].classList.add("selected");
            cs.push(x[i]);
           
            if(piece.contains("king")){
                skm();
            };
            if(piece.contains("pawn")){
                spm();
            };
            if(piece.contains("knight")){
                snm();
            };
            if(piece.contains("rook")){
                srm();
            };
            if(piece.contains("bishop")){
                sbm();
            };
            if(piece.contains("queen")){
                sqm();
            };

        }
        x[i].children[0].addEventListener("click",caller)
     
      
    }
}
}
call();
window.addEventListener("click",function(){
    document.querySelector("#test").innerHTML=cs.length;
})
let called=false;

for(let i=0;i<x.length;i++){
    function move(){
        if(x[i].classList.contains("possible-moves")){
            if(document.getElementsByClassName("special").length>0){
                if(x[cp].children[0].classList.contains("pawn")){
               // document.getElementsByClassName("special")[0].classList.remove("special")
                if(x[i-8].classList.contains("special") || x[i+8].classList.contains("special")){
                if(cplayer=="black"){
                    if(i==cp+9 || i==cp+7){
                   x[i-8].innerHTML="";
                    }
                }
                if(cplayer=="white"){
                    if(i==cp-9 || i==cp-7){
                   x[i+8].innerHTML="";
                    }
                }
            }
        }
                document.getElementsByClassName("special")[0].classList.remove("special")
            
            }
            if(x[cp].children[0].classList.contains("pawn")){
                if(cp-i==16 || i-cp==16){
                    if(cplayer=="black"){
                    x[i].classList.add("special")
                    }if(cplayer=="white"){
                        x[i].classList.add("special")
                    }
                }
            }
            if(l3bp.length==3 && cplayer=="black"){
                l3bp.shift()
            }
            if(l3wp.length==3 && cplayer=="white"){
                l3wp.shift()
            }
            if(cplayer=="black"){
                l3bp.push(ccp)
            }else{
                l3wp.push(ccp)
            }
            if(l3b.length==3 && cplayer=="black"){
                l3b.shift()
            }
            if(l3w.length==3 && cplayer=="white"){
                l3w.shift()
            }
            if(cplayer=="black"){
                l3b.push(i)
            }else{
                l3w.push(i)
            }

            if(x[cp].children[0].classList.contains("unmoved")){
                x[cp].children[0].classList.remove("unmoved")
            }
        if(x[cp].children[0].classList.contains("pawn")){
        if(ranks[0].includes(i) || ranks[7].includes(i)){
if(confirm( "to queen")==true){
    x[i].innerHTML=`<img  class="${cplayer} queen" src="${cplayer} queen.png" alt="white-king" width="10%" height="10%"></img>`;
}else if(confirm("to knight")==true){
    x[i].innerHTML=`<img  class="${cplayer} knight" src="${cplayer} knight.png" alt="white-king" width="10%" height="10%"></img>`;
}else if(confirm("to bishop")==true){
    x[i].innerHTML=`<img  class="${cplayer} bishop" src="${cplayer} bishop.png" alt="white-king" width="10%" height="10%"></img>`;
}else if(confirm("to rook")==true){
    x[i].innerHTML=`<img  class="${cplayer} rook" src="${cplayer} rook.png" alt="white-king" width="10%" height="10%"></img>`;
}else{
    x[i].innerHTML=`<img  class="${cplayer} queen" src="${cplayer} queen.png" alt="white-king" width="10%" height="10%"></img>`;
}
x[cp].innerHTML="";
x[cp].classList.remove("selected");
for(let j=0;j<ps.length;j++){
    x[ps[j]].classList.remove("possible-moves");
}
players[0]=players[1];
players[1]=cplayer;
cplayer=players[0];

//cp=undefined;
      piece=undefined;
    called=true;
 
      call();
      return;
        }
    }
   
x[i].innerHTML=x[cp].innerHTML;
x[cp].innerHTML="";
x[cp].classList.remove("selected");
for(let j=0;j<ps.length;j++){
    x[ps[j]].classList.remove("possible-moves");
}
players[0]=players[1];
players[1]=cplayer;
cplayer=players[0];
};
//cp=undefined;
      piece=undefined;
    called=true;
    if(l3bp.length==3 && l3wp.length==3){
 if(l3bp[0]==l3bp[2] && l3b[0]==l3b[2]){
    if(l3wp[0]==l3wp[2] && l3w[0]==l3w[2]){
        window.alert("draw by repetition");
        reser();
        if(cplayer=="black"){
            players[0]=players[1];
            players[1]=cplayer;
            cplayer=players[0];
            }
    }
 }
}
      call();
    }
    x[i].addEventListener("click",move);
    
}


let skm=function(){
   if(piece.contains(cplayer)){
  ccp="king";
    let arr=[1,7,8,9];
   ps=[];
  
    for(let i=0;i<arr.length;i++){
        if( cp+arr[i]<64){
      
            ps.push(cp+arr[i]);
        
    };
        if(cp-arr[i]>=0){
           
                ps.push(cp-arr[i]);
            
        };
    };
    for(let i=0;i<ps.length;i++){
        x[ps[i]].classList.add("possible-moves");
    }
    if(lefte.includes(cp)){
        if(cp==0){
        x[ps[1]].classList.remove("possible-moves");
       // ps.shift();
         } else if(ps.length==7){
            x[ps[1]].classList.remove("possible-moves");
            x[ps[2]].classList.remove("possible-moves");
         }else if(ps.length==8){
            x[ps[1]].classList.remove("possible-moves");
            x[ps[2]].classList.remove("possible-moves");
            x[ps[7]].classList.remove("possible-moves");
         }else if(ps.length==6){
            x[ps[1]].classList.remove("possible-moves");
            x[ps[2]].classList.remove("possible-moves");
            x[ps[5]].classList.remove("possible-moves");
         }
      
    }else if(righte.includes(cp)){
        if(cp==63){
            x[ps[1]].classList.remove("possible-moves");
           // ps.shift();
             } else if(ps.length==7){
                x[ps[0]].classList.remove("possible-moves");
                x[ps[3]].classList.remove("possible-moves");
             }else if(ps.length==8){
                x[ps[0]].classList.remove("possible-moves");
                x[ps[3]].classList.remove("possible-moves");
                x[ps[6]].classList.remove("possible-moves");
             }else if(ps.length==6){
                x[ps[0]].classList.remove("possible-moves");
                x[ps[3]].classList.remove("possible-moves");
                x[ps[5]].classList.remove("possible-moves");
             }

    }
    for(let i=0;i<ps.length;i++){
        if(x[ps[i]].children.length>0){
            if(x[ps[i]].children[0].classList.contains(cplayer)){
            x[ps[i]].classList.remove("possible-moves");
            }else if(!x[ps[i]].children[0].classList.contains(cplayer) && x[ps[i]].classList.contains("possible-moves")){
                x[ps[i]].classList.add("cap")
                //x[ps[i]].children[0].addEventListener("click",capture)
            }
        }
    }
}
}

function sbm(){
    if(piece.contains(cplayer)){
        ccp="bishop"+cp;
   let ar=[7,9];
   let m;
    ps=[];
    let dun=[];
    let Ps=[];
    let ns=[];
    let pn=[];
    let nn=[];
    for(let i=0;i<ar.length;i++){
        for (let j=1;j<8;j++){
            m=ar[i]*j;
if((cp+m)<64){
if(ar[i]==7){
    if(rchange(ranks,cp,cp+m)==j && rchange(files,cp,cp+m)==-j){
      Ps.push(cp+m)
        //ps.push(cp+m)
    }

}
if(ar[i]==9){
    if(rchange(ranks,cp,cp+m)==j && rchange(files,cp,cp+m)==j){
        pn.push(cp+m)
       // ps.push(cp+m)
    }
}
}
if((cp-m)>=0){
    if(ar[i]==7){
        if(rchange(ranks,cp,cp-m)==-j && rchange(files,cp,cp-m)==+j){
            ns.push(cp-m);
           // ps.push(cp-m)
        }
    }
    if(ar[i]==9){
        if(rchange(ranks,cp,cp-m)==-j && rchange(files,cp,cp-m)==-j){
            nn.push(cp-m);
           // ps.push(cp-m)
        }
    }
}
        }
    }

for(let i=0;i<Ps.length;i++){
    if(x[Ps[i]].children.length>0){
Ps.splice(i+1);
    }}
    for(let i=0;i<ns.length;i++){
        if(x[ns[i]].children.length>0){
    ns.splice(i+1);
        }}
        
        for(let i=0;i<pn.length;i++){
            if(x[pn[i]].children.length>0){
        pn.splice(i+1);
            }}
            
            for(let i=0;i<nn.length;i++){
                if(x[nn[i]].children.length>0){
            nn.splice(i+1);
                }}
                ps=Ps.concat(pn,nn,ns)
                                
    for(let i=0;i<ps.length;i++){
        x[ps[i]].classList.add("possible-moves")
    }
for(let i=0;i<ps.length;i++){
    if(x[ps[i]].children.length>0){
        if(x[ps[i]].children[0].classList.contains(cplayer)){
            x[ps[i]].classList.remove("possible-moves");
            }
    else if(!x[ps[i]].children[0].classList.contains(cplayer) ){
        x[ps[i]].classList.add("cap")
        //x[ps[i]].children[0].addEventListener("click",capture)
    }
}
}

}
}
function srm(){
    //document.querySelector("#test").innerHTML=cp
   // document.querySelector("#test").innerHTML=yes;
   if( piece.contains(cplayer) ){
   ccp="rook"+cp;
    ps=[];
    let m;
    let mm;
    let mmmm;
    let mmm;
    let Pr=[];
    let nr=[];
    let pf=[];
    let nf=[];
    for(let i=1;i<8;i++){
m=cp+i;
mm=cp-i;
mmm=cp+(i*8);
mmmm=cp-(i*8);
document.querySelector("#test").innerHTML=rchange(ranks,cp,cp+1)==0 
        if((m)<64){
            if(rchange(ranks,cp,m)==0 ){
                pf.push(m)
                //ps.push(m);
            }
            if(rchange(files,cp,m)==0){
                pf.push(m)
               // ps.push(m);
            }
        }
       if(mm>=0){
            if(rchange(ranks,cp,mm)==0 || rchange(files,cp,mm)==0){
                nf.push(mm)
                //ps.push(mm);
            }
        }
        if((cp+(i*8))<64){
            if(rchange(ranks,cp,cp+(i*8))==0 || rchange(files,cp,cp+(i*8))==0){
                Pr.push(cp+(i*8))
               // ps.push(cp+(i*8));
            }
        }
        if(cp-(i*8)>=0){
            if(rchange(ranks,cp,cp-(i*8))==0 || rchange(files,cp,cp-(i*8))==0){
                nr.push(cp-(i*8))
                //ps.push(cp-(i*8));
            }
        }
    }
    for(let i=0;i<Pr.length;i++){
        if(x[Pr[i]].children.length>0){
    Pr.splice(i+1);
        }}
        for(let i=0;i<pf.length;i++){
            if(x[pf[i]].children.length>0){
        pf.splice(i+1);
            }}
            
            for(let i=0;i<nf.length;i++){
                if(x[nf[i]].children.length>0){
            nf.splice(i+1);
                }}
                
                for(let i=0;i<nr.length;i++){
                    if(x[nr[i]].children.length>0){
                nr.splice(i+1);
                    }}
                    ps=Pr.concat(pf,nf,nr)
                                    
    for(let i=0;i<ps.length;i++){
        x[ps[i]].classList.add("possible-moves")
    }
    for(let i=0;i<ps.length;i++){
        if(x[ps[i]].children.length>0){
            if(x[ps[i]].children[0].classList.contains(cplayer)){
                x[ps[i]].classList.remove("possible-moves");
                }
        else if(!x[ps[i]].children[0].classList.contains(cplayer) && x[ps[i]].classList.contains("possible-moves")){
            x[ps[i]].classList.add("cap")
            //x[ps[i]].children[0].addEventListener("click",capture)
        }
    }
}
}
}
function sqm(){
    if(piece.contains(cplayer) ){
        
   srm();
   if(piece.contains(cplayer)){
    ccp="queen"+cp;
    let ar=[7,9];
    let m;
    // ps=[];
    
     let Ps=[];
     let ns=[];
     let pn=[];
     let nn=[];
     for(let i=0;i<ar.length;i++){
         for (let j=1;j<8;j++){
             m=ar[i]*j;
 if((cp+m)<64){
 if(ar[i]==7){
     if(rchange(ranks,cp,cp+m)==j && rchange(files,cp,cp+m)==-j){
       Ps.push(cp+m)
         //ps.push(cp+m)
     }
 
 }
 if(ar[i]==9){
     if(rchange(ranks,cp,cp+m)==j && rchange(files,cp,cp+m)==j){
         pn.push(cp+m)
        // ps.push(cp+m)
     }
 }
 }
 if((cp-m)>=0){
     if(ar[i]==7){
         if(rchange(ranks,cp,cp-m)==-j && rchange(files,cp,cp-m)==+j){
             ns.push(cp-m);
            // ps.push(cp-m)
         }
     }
     if(ar[i]==9){
         if(rchange(ranks,cp,cp-m)==-j && rchange(files,cp,cp-m)==-j){
             nn.push(cp-m);
            // ps.push(cp-m)
         }
     }
 }
         }
     }
 
 for(let i=0;i<Ps.length;i++){
     if(x[Ps[i]].children.length>0){
 Ps.splice(i+1);
     }}
     for(let i=0;i<ns.length;i++){
         if(x[ns[i]].children.length>0){
     ns.splice(i+1);
         }}
         
         for(let i=0;i<pn.length;i++){
             if(x[pn[i]].children.length>0){
         pn.splice(i+1);
             }}
             
             for(let i=0;i<nn.length;i++){
                 if(x[nn[i]].children.length>0){
             nn.splice(i+1);
                 }}
               ps=  ps.concat(Ps,pn,nn,ns)
                                 
     for(let i=0;i<ps.length;i++){
         x[ps[i]].classList.add("possible-moves")
     }
 for(let i=0;i<ps.length;i++){
     if(x[ps[i]].children.length>0){
         if(x[ps[i]].children[0].classList.contains(cplayer)){
             x[ps[i]].classList.remove("possible-moves");
             }
     else if(!x[ps[i]].children[0].classList.contains(cplayer) ){
         x[ps[i]].classList.add("cap")
         //x[ps[i]].children[0].addEventListener("click",capture)
     }
 }
 }
 
    }
}
}
function snm(){
    if(piece.contains(cplayer) ){
        ccp="knight"+cp;
    ps=[];
    let arc=[6,10,15,17];
   
        if((cp+6)<64){

    if(rchange(ranks,cp,cp+6)==1 && rchange(files,cp,cp+6)==-2){
        ps.push(cp+6);
    }

}
if((cp+10)<64){

    if(rchange(ranks,cp,cp+10)==1 && rchange(files,cp,cp+10)==2){
        ps.push(cp+10);
    }
    
}
if((cp+15)<64){

    if(rchange(ranks,cp,cp+15)==2 && rchange(files,cp,cp+15)==-1){
        ps.push(cp+15);
    }
    
}
if((cp+17)<64){

    if(rchange(ranks,cp,cp+17)==2 && rchange(files,cp,cp+17)==1){
        ps.push(cp+17);
    }
    
}
            if((cp-6)>=0){
                if(rchange(ranks,cp,cp-6)==-1 && rchange(files,cp,cp-6)==2){
                    ps.push(cp-6);
                }
            
            }
            if((cp-10)>=0){
                if(rchange(ranks,cp,cp-10)==-1 && rchange(files,cp,cp-10)==-2){
                    ps.push(cp-10);
                }
                
            }
            if((cp-15)>=0){
                if(rchange(ranks,cp,cp-15)==-2 && rchange(files,cp,cp-15)==1){
                    ps.push(cp-15);
                }
                
            }
            if((cp-17)>=0){
                if(rchange(ranks,cp,cp-17)==-2 && rchange(files,cp,cp-17)==-1){
                    ps.push(cp-17);
                }
                
            }
        
    for(let i=0;i<ps.length;i++){
        x[ps[i]].classList.add("possible-moves")
    }
    for(let i=0;i<ps.length;i++){
        if(x[ps[i]].children.length>0){
            if(x[ps[i]].children[0].classList.contains(cplayer)){
                x[ps[i]].classList.remove("possible-moves");
                }
        else if(!x[ps[i]].children[0].classList.contains(cplayer) && x[ps[i]].classList.contains("possible-moves")){
            x[ps[i]].classList.add("cap")
            //x[ps[i]].children[0].addEventListener("click",capture)
        }
    }
}
}
}
function spm(){
ccp="pawn"+cp;
    ps=[];
    if(piece.contains("black") && cplayer=="black"){
        if(x[cp+8].children.length==0){
        ps.push(cp+8)
        }
        if(x[cp+7].children.length>0  && !lefte.includes(cp)){
           
            ps.push(cp+7)
        }
        if(!righte.includes(cp) && x[cp+9].children.length>0){
            ps.push(cp+9)
        }
        if(ranks[1].includes(cp) && x[cp+8].children.length==0){
            ps.push(cp+16)
        }
        if( x[cp-1].classList.contains("special") && !lefte.includes(cp)){
          
       
        ps.push(cp+7)
        }
        if(!righte.includes(cp) && x[cp+1].classList.contains("special") ){
          
          
            ps.push(cp+9)
        }
       
    }
    if(piece.contains("white") && cplayer=="white" ){
        if(x[cp-8].children.length==0){
        ps.push(cp-8)
        }
        if(x[cp-7].children.length>0  && !righte.includes(cp)){
            ps.push(cp-7)
        }
        if(!lefte.includes(cp)  && x[cp-9].children.length>0){
            ps.push(cp-9)
        }
        if(ranks[6].includes(cp) && x[cp-8].children.length==0){
            ps.push(cp-16)
        }
        if( x[cp+1].classList.contains("special") && !righte.includes(cp)){
          
       
            ps.push(cp-7)
            }
            if(!lefte.includes(cp) && x[cp-1].classList.contains("special") ){
              
              
                ps.push(cp-9)
            }
    }
   
    for(let i=0;i<ps.length;i++){
        x[ps[i]].classList.add("possible-moves");
        if(x[ps[i]].children.length>0){
            if(x[ps[i]].children[0].classList.contains(cplayer)){
                x[ps[i]].classList.remove("possible-moves");
            }
        
        if(!x[ps[i]].children[0].classList.contains(cplayer) && x[ps[i]].classList.contains("possible-moves")){
            x[ps[i]].classList.add("cap")
            //x[ps[i]].children[0].addEventListener("click",capture)
        }
    }
    }
    
    
}
/*window.addEventListener("click",function(){
  
   document.querySelector("#test").innerHTML=`${gnb(files[4])}k${gnb(files[5])}k${gnb(files[6])}k${gnb(ranks[0])}`;
  // document.querySelector("#test").innerHTML=`${gn(files[4])}`;
})*/
