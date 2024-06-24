// Couleur bouton like //
var likes=document.getElementsByClassName('like')

for(let i=0 ; i<likes.length ; i++){
 let like=likes[i]
 like.addEventListener('click',function() {
 if (like.style.color == "black")
      
    like.style.color ="red "

  else like.style.color="black"  
}
)
}


// addition quantité (button +)//
var quants=document.getElementsByClassName('Quant')
var pluss=document.getElementsByClassName('plus-btn')


for (let i=0 ; i<pluss.length ; i++ ) {
  let plus = pluss [i]
  plus.addEventListener('click', function() {
    quants[i].value++
  }
)
}


// minimiser quantité (button -)

var quants=document.getElementsByClassName('Quant')
var moinss=document.getElementsByClassName('minus-btn')

for ( let i = 0 ; i <moinss.length ; i++ ) {
    var moins = moinss [i]
    moins.addEventListener('click', function() {
  
      quants[i].value--
    }
  )
  }

//delete produit ( tout le row de produit)//
  var quants=document.getElementsByClassName('Quant')
  var deletes=document.getElementsByClassName('delete')

  for ( let i =0 ;i<deletes.length ;i++) {
   var delete = deletes [i]

   delete.addEventListener('click',function() {

     deletes[i].parentElement.remove 
   }
)
}



//somme final price//

var finalprices=document.getElementById('finalPrice')
var items=document.getElementsByClassName('item')

function somme() {
for( let i=0 ; i<items.length  ; i++){
s=0 
s=s+items[i].querySelector('.Quant') * item[i].querySelector('.price')
}
return (finalPrice=s)
}



















































/*
var likes =document.getElementsByClassName('like')
console.log(likes)

for (i = 0 ; i<likes.length ;i++) {
    let like=likes [i]
    like.addEventListener('click',function() {
        if (like.style.color=="black")
            like.style.color ="red"
        else like.style.color="black"
    })
}

let pluss=document.getElementsByClassName('plus-btn')
let quants=document.getElementsByClassName('Quant')
for (i = 0 ; i < pluss.length ; i++) {
    pluss[i].addEventListener('click',function()
{
quants[i].value++   
}
)
}

let minuss=document.getElementsByClassName('minus-btn')

for (i = 0 ; i < pluss.length ; i++)
    minuss[i].addEventListener('click',function()
{
    if(minus[i].nextElementSibling.value>1)
 minuss[i].nextElementSibling.value--    //next element ma3neha  elli ba3d el mois elli houwa num elli n7ebou na9sou fih //   
}
)


let deletes=document.getElementsByClassName('delete')
for (i = 0 ; i < pluss.length ; i++)
 deletes[i].parentElement.remove()     //parent  ma3neha haki row elli yachmalha el x (icone mta3 tafsi5)





let finalPrices = document.getElementById('finalPrice')
let items=document.getElementsByClassName('item')
function total () {
    s=0
   for  (let i=0 ; i<items.length ;i++) {
    s=s+items[i].querySelector('.Quant')*items[i].querySelector('.price').innerText
   }
   return(finalPrices.value=s)
}

*/












