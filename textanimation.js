


function g() {
    const animatedTxt = document.querySelector('.ror');
    const a = animatedTxt.item(0).innerHTML;

    a.addEventListener('mouseover',()=>{
        a.split('').reverse().join()
    } )
}

g()