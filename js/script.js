const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickBtn');
const resetButton = document.getElementById('resetBtn');
let count = 0;

function updateCounter(){
    counterElement.textContent = count
}

clickButton.addEventListener('click', function(){
    count = count + 1;
    updateCounter();
});

resetButton.addEventListener('click', function(){
    count = 0;
    updateCounter();
});


updateCounter();