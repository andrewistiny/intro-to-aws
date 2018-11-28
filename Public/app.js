window.onload = function(){
    const p = document.querySelector('#food');
    axios.get('https://nnzrxbxk9g.execute-api.us-west-2.amazonaws.com/dev/getQuote')
    .then(function (response) {
        let foods = Object.values(response.data);
        let randFood = foods[Math.floor(Math.random() * foods.length)];
        return p.innerHTML = 'Do you like food? I like food, here is a random food:' + randFood;
    });   
}