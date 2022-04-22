var text = '';
function findMeal(){
    text = document.getElementById('meal-search').value;
    connectMeal(text);
}


function connectMeal(text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

  console.table(data.meals);

  var AllfoodsDiv = document.getElementById('allfoods-div');


    if(data.meals.length>5){
            for(var i=0; i<5; i++ ){
            var newDiv = document.createElement("div");
        
            newDiv.innerHTML = `<h1> Meal ID: ${data.meals[i].idMeal} </h1>
                        <h2> Meal Name: ${data.meals[i].strMeal} </h2>
                        <img src="${data.meals[i].strMealThumb}" <br>
                        <h4> Category: ${data.meals[i].strCategory} </h4>
                        <p> Cooking instruction: ${data.meals[i].strInstructions} </p>
                        `;
        
            newDiv.classList.add('innerDiv-style');
            AllfoodsDiv.appendChild(newDiv);
            
        
            }
        
            var AdditionalBtn = document.getElementById('additionalBtn');
            AdditionalBtn.innerHTML = `<button onclick="ShowMore()">Show More</button>`
        }
    else{
        for(var i=0; i<data.meals.length; i++ ){
            var newDiv = document.createElement("div");
        
            newDiv.innerHTML = `<h1> Meal ID: ${data.meals[i].idMeal} </h1>
                        <h2> Meal Name: ${data.meals[i].strMeal} </h2>
                        <img src="${data.meals[i].strMealThumb}" <br>
                        <h4> Category: ${data.meals[i].strCategory} </h4>
                        <p> Cooking instruction: ${data.meals[i].strInstructions} </p>
                        `;
        
            newDiv.classList.add('innerDiv-style');
            AllfoodsDiv.appendChild(newDiv);
            
    }


    }
}


function ShowMore(){
    text = document.getElementById('meal-search').value;
    connectMealMore(text);
}
function connectMealMore(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(mdata=> loadMoreInfo(mdata));
}
//connectMealMore();
function loadMoreInfo(mdata){
//mdata
        var MoreInfo = document.getElementById('moreInfo');
        for(var i=0; i<mdata.meals.length; i++ ){
        var newDiv = document.createElement("div");
            
        newDiv.innerHTML = `<h1> Meal ID: ${mdata.meals[i].idMeal} </h1>
                        <h2> Meal Name: ${mdata.meals[i].strMeal} </h2>
                        <img src="${mdata.meals[i].strMealThumb}" <br>
                        <h4> Category: ${mdata.meals[i].strCategory} </h4>
                        <p> Cooking instruction: ${mdata.meals[i].strInstructions} </p>
                        `;
        newDiv.classList.add('innerDiv-style');
        MoreInfo.appendChild(newDiv);
        }
}