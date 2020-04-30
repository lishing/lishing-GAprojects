console.log("linked")
console.log($);

const FOOD_RECIPE_API = 'https://api.edamam.com/search';
const RECIPE_APP_ID = '900da95e';
const API_KEY = '40698503668e0bb3897581f4766d77f9';
const buildRecipeQuery = recipeName => recipeName.replace(' ', '+');
const getRecipe = (recipeName) => {
    return $.ajax({
        url: FOOD_RECIPE_API,
        data: {
            app_id: RECIPE_APP_ID,
            q: buildRecipeQuery(recipeName),
            app_key: API_KEY,
        }
    });
};

//let RECIPE = {};

$( () =>{
    console.log("hello")
    const $openBtn = $('#open');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    const $ahoyRecipeBtn = $('#submit');

    const openModal = () => {
        $modal.css('display', 'block');
    }
    const closeModal = () =>{
        $modal.css('display', 'none');
    }
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);

    const fetchRecipe = async() =>{
        let result = await getRecipe($("#input-box").val());
        console.log(result);
        //RECIPE = {...result};
        let groceriesArray = result.hits[0].recipe.ingredients;
        let orderedList = $('<ol>').addClass('ordered-list');
        for (let i=0; i<groceriesArray.length; i++){
            let groceryList = $('<li>').addClass('grocery-item').text(groceriesArray[i].food);
            orderedList.append(groceryList);
            let deleteButton = $('<button>').addClass('button').attr('id', 'delete-button').text('delete');
            deleteButton.on('click', deleteItem);
            groceryList.append(deleteButton);
        }
        //let groceries = RECIPE.hits[0].recipe.ingredients[0].food;
        // let groceryList = $('<div>').addClass('grocery-item').text(groceries);
        $('#groceries').append(orderedList);
    }

    const deleteItem = (event) =>{
        let item = $(event.currentTarget).parent();
        item.remove();
    }

    //RECIPE.hits[0].recipe.ingredients[0].food

    $ahoyRecipeBtn.on('click', fetchRecipe);

    const recipe = getRecipe('beef rendang');
    console.log(recipe);

});

// $(async () => {
//     const recipe = await getRecipe('beef rendang');
//     console.log(recipe);
// });

