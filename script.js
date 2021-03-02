const quote = document.getElementById('quote');

const getQuote = () => {
    fetch('https://api.quotable.io/random')//fetch quand on cherches des données a lexterieurs
        .then((res) => res.json())//PROMESSE res est le resultat cest une fonction//ON ATTEND LE RESULTAT /tu traite le resultat
        // .then(data => console.log(data))//ENSUITE TU NOUS CONSOLE LOG LES DONNES
        .then((data) => {

            quote.innerHTML = data.content//On recupere la citation
        });

    fetch("https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=200")
        .then((res) => {

            document.getElementById("pic").innerHTML = `<img src=${res.url}/>`
        })



        
};

quote.addEventListener('click', () => getQuote())///change la citation au click
getQuote();//Quand on charge la page tu t'execute