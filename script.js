const howMany = document.getElementById('howmany');
const theForm = document.getElementById('theform');
const whichCoin = document.getElementById('whichcoin');
const coincontainer = document.getElementById ('coins');

theForm.addEventListener('submit', (event) => {
  console.log("test");
  event.preventDefault();

  var howmanyvalue = howMany.value;
  var whichcoinvalue = whichCoin.value;
  for (let i=0; i < howmanyvalue ; i++){
    const coins = document.createElement('div');
    coins.classList.add('dotpenny');
    coins.innerText = whichCoin.value;
  coincontainer.append(coins);
  
  coins.addEventListener ('click', (event)=>{
    coins.classList.remove

  })


  }
  
  
})

