
(function(){
    const sliders = [...document.querySelectorAll('.offers_body')];    
    const buttonBefore = document.querySelector('#before');
    const buttonNext = document.querySelector('#next');
    let value;

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
        

    const changePosition = (add)=>{
        const currentOffers = document.querySelector('.offers_body--show').dataset.id;
        value = Number(currentOffers);
        value+= add;
 
        sliders[Number(currentOffers)-1].classList.remove('offers_body--show')
        if(value === sliders.length+1 || value === 0){
         value = value === 0 ? sliders.length : 1;  
        }
 
        sliders[value-1].classList.add('offers_body--show');
        }

        const autoChangeSlider = ()=>{
        value = Number(document.querySelector('.offers_body--show').dataset.id);
        value += 1;
    
        if (value > sliders.length) {
            value = 1;
        }
    
        sliders.forEach((slider) => slider.classList.remove('offers_body--show'));
        sliders[value - 1].classList.add('offers_body--show');
    }
    
    setInterval(autoChangeSlider, 5000);
})(); 





