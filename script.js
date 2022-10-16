function selectFood(iten){
    const selectedIten = document.querySelector('.foods .select');
    if(selectedIten !== null){
        selectedIten.classList.remove('select');
    }
    iten.classList.add('select')
}
function selectDrink(iten){
    const selectedIten = document.querySelector('.drinks .select');
    if(selectedIten !== null){
        selectedIten.classList.remove('select');
    }
    iten.classList.add('select')
}
function selectSweet(iten){
    const selectedIten = document.querySelector('.sweets .select');
    if(selectedIten !== null){
        selectedIten.classList.remove('select');
    }
    iten.classList.add('select')
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

