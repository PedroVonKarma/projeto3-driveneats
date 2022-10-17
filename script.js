let variavel = 0;
const inativeBar = document.querySelector('.bottomBar');
const ativeBar = document.querySelector('.bottomBarA');
let food='';
let drink='';
let dessert='';
let priceF=0;
let priceD=0;
let priceS=0;

function selectFood(iten){
    const selectedIten = document.querySelector('.foods .select');
    if(selectedIten !== null){
        selectedIten.classList.remove('select');
    } else{
        variavel+=1;
    }
    iten.classList.add('select')
    finalizar()
    food=iten.querySelector('.d').innerHTML;
    priceF=iten.querySelector('.f').innerHTML;
    priceF=parseFloat(priceF.substring(3).replace(',','.'))
}
function selectDrink(iten){
    const selectedIten = document.querySelector('.drinks .select');
    if(selectedIten !== null){
        selectedIten.classList.remove('select');
    }else{
        variavel+=1;
    }
    iten.classList.add('select')
    finalizar()
    drink=iten.querySelector('.d').innerHTML;
    priceD=iten.querySelector('.f').innerHTML;
    priceD=parseFloat(priceD.substring(3).replace(',','.'))
}
function selectSweet(iten){
    const selectedIten = document.querySelector('.sweets .select');
    if(selectedIten !== null){
        selectedIten.classList.remove('select');
    }else{
        variavel+=1;
    }
    iten.classList.add('select')
    finalizar()
    dessert=iten.querySelector('.d').innerHTML;
    priceS=iten.querySelector('.f').innerHTML;
    priceS=parseFloat(priceS.substring(3).replace(',','.'))
}
function ableTick(tick){
    const selectedTick = document.querySelector(tick);
    
    const selectedTickA = document.querySelector('.aa');
    
    const selectedTickB = document.querySelector('.ab');
    
    const selectedTickC = document.querySelector('.ac');

    if(selectedTickA.className !== '.hidden'){
        selectedTickA.classList.add('hidden');
    }
    if(selectedTickB.className !== '.hidden'){
        selectedTickB.classList.add('hidden');
    }
    if(selectedTickC.className !== '.hidden'){
        selectedTickC.classList.add('hidden');
    }
    selectedTick.classList.remove('hidden')
}
function ableTickB(tick){
    const selectedTick = document.querySelector(tick);
    
    const selectedTickA = document.querySelector('.ba');
    
    const selectedTickB = document.querySelector('.bb');
    
    const selectedTickC = document.querySelector('.bc');

    if(selectedTickA.className !== '.hidden'){
        selectedTickA.classList.add('hidden');
    }
    if(selectedTickB.className !== '.hidden'){
        selectedTickB.classList.add('hidden');
    }
    if(selectedTickC.className !== '.hidden'){
        selectedTickC.classList.add('hidden');
    }
    selectedTick.classList.remove('hidden')
}
function ableTickC(tick){
    const selectedTick = document.querySelector(tick);
    
    const selectedTickA = document.querySelector('.ca');
    
    const selectedTickB = document.querySelector('.cb');
    
    const selectedTickC = document.querySelector('.cc');

    if(selectedTickA.className !== '.hidden'){
        selectedTickA.classList.add('hidden');
    }
    if(selectedTickB.className !== '.hidden'){
        selectedTickB.classList.add('hidden');
    }
    if(selectedTickC.className !== '.hidden'){
        selectedTickC.classList.add('hidden');
    }
    selectedTick.classList.remove('hidden')
}
function finalizar(){
    
    if(variavel===3){
        inativeBar.classList.add('hidden');
        ativeBar.classList.remove('hidden');
    }
}
function end(){
const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${food}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${(priceF+priceS+priceD).toFixed(2)}`
const mensagemWpp = encodeURIComponent(mensagem)
const linkWpp = 'https://wa.me/55021993490227?text=' + mensagemWpp;
document.getElementById("zap").setAttribute("href",linkWpp);
}