const misImagenes =[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6e_sNN-lcE6vip_Ln8SPVEerm91zDV_W_w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6e_sNN-lcE6vip_Ln8SPVEerm91zDV_W_w&s',
    'https://attic.sh/7535a6vjnemrvghsv4obv5yk4f9p',
    'https://attic.sh/7535a6vjnemrvghsv4obv5yk4f9p',
    'https://attic.sh/x5f62nqzppvjogy7g1k2kkwslxo8',
    'https://attic.sh/x5f62nqzppvjogy7g1k2kkwslxo8',
    'https://attic.sh/wzdzdgxq8vige3vo9bynwb3cl48u',
    'https://attic.sh/wzdzdgxq8vige3vo9bynwb3cl48u',
    'https://attic.sh/6y0jyl2fv7hrew1fn31bl6el0v58',
    'https://attic.sh/6y0jyl2fv7hrew1fn31bl6el0v58',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-Ku_avIUQJJQs_uPAWYtbGZfZknOlzZNpA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-Ku_avIUQJJQs_uPAWYtbGZfZknOlzZNpA&s',
];

var clickeadas = [] //areglo para almacenar las cartas que se voltean

const imagenes = document.querySelectorAll(".image"); //selecciona todos los elementos de la clase

const back_cards = document.querySelectorAll(".back_card");

var lista = misImagenes.sort( // mezcla las imagenes aleatoriamente
    function (){
        return Math.random()-0.5; //random mezcla el arreglo
    }
)

for(let img=0; img<imagenes.length;img++){ // asigna las imagenes mezcladas a cada carta
    imagenes[img].src = lista[img];
};

back_cards.forEach(
    back_card => {
        back_card.addEventListener("click",flip_card) // se le asigna un evento click para voltear las cartas
    }
)

function flip_card(e){ // funcion que maneja el volteo de las cartas
    if(clickeadas.length<2){
        e.target.parentElement.classList.add("flipped"); // aca es para que muestre la imagen de la carta
        clickeadas.push(e.target.parentElement); //agrega la carta al arreglo 
    }
    if(clickeadas.length===2){
        if(clickeadas[0].children[0].children[0].src === clickeadas[1].children[0].children[0].src){ // verifica si las cartas volteada son iguales por src
            clickeadas.forEach(
                card=>{
                    card.setAttribute("disable",true); // Si las imagenes son iguales se deshabilitan las cartas 
                }
            )
            clickeadas = [] // aca vacia el arreglo
        }
        else{
            setTimeout(()=>{ // si no coinciden se vuelven a voltear las cartas
                clickeadas.forEach(
                    card=>{
                        card.classList.remove("flipped");
                        clickeadas = [] // se vacia el arreglo
                    }
                )
            },1300)
        }
    }
}