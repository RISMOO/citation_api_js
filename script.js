const quote = document.getElementById('quote');
const h1=document.getElementById('h1');


h1.innerHTML="CITATIONS";

const getQuote = () => {
    fetch('https://api.quotable.io/random')//fetch quand on cherches des données a lexterieurs
        .then((res) => res.json())//PROMESSE res est le resultat cest une fonction//ON ATTEND LE RESULTAT /tu traite le resultat
        // .then(data => console.log(data))//ENSUITE TU NOUS CONSOLE LOG LES DONNES
        .then((data) => {
              if(quote){ 
            quote.innerHTML = data.content//On recupere la citation
              }
        });

    fetch("https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
        .then((res) => {
            
            document.getElementById("pic").innerHTML = `<img src=${res.url}/>`
        })



        
};

document.body.appendChild(h1);
quote.addEventListener('click', () => getQuote())///change la citation au click
getQuote();//Quand on charge la page tu t'execute