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
        $('.ordered-list').remove();
        let card = $('<div>').addClass('card').attr('style', 'width: 18rem');
        for (let j=0; j<3; j++){
            let recipeImage = result.hits[j].image
            let recipeTitle = result.hits[j].label;
            let recipeLink = result.hits[j].url;
            let img = $('<img>').addClass('card-img-top').attr("src", recipeImage);
            let title = $('<h5>').addClass('card-title').text(recipeTitle);
            let recipeDirectedLink = $('<a>').addClass('btn').addClass('btn-link').setAttr('href', recipeLink).text('Go to recipe');
            card.append(img).append(title).append(recipeDirectedLink);
        }
        $('.left-half').append(card);
        RECIPE = {...result};
        let groceriesArray = result.hits[0].recipe.ingredients;
        let orderedList = $('<ol>').addClass('ordered-list');
        for (let i=0; i<groceriesArray.length; i++){
            let groceryList = $('<li>').addClass('grocery-item').text(groceriesArray[i].food);
            orderedList.append(groceryList);
            let deleteButton = $('<button>').addClass('btn').addClass('btn-light').attr('id', 'delete-button').text('remove');
            deleteButton.on('click', deleteItem);
            groceryList.append(deleteButton);
            // let doneButton = $('<button>').addClass('btn').addClass('btn-light').attr('id', 'done-button').text('done');
            // doneButton.on('click', doneItem);
            // groceryList.append(doneButton);
        }
        $('#groceries').append(orderedList);
        
    }

    const deleteItem = (event) =>{
        let item = $(event.currentTarget).parent();
        item.remove();
    }

    //how to do a checklist button
    // const doneItem = (event) => {
    //     let item = $(event.currentTarget).parent();
    //     item.prop('checked', 'true');
    // }

    $ahoyRecipeBtn.on('click', fetchRecipe);

    const recipe = getRecipe('beef rendang');
    console.log(recipe);

});

// $(async () => {
//     const recipe = await getRecipe('beef rendang');
//     console.log(recipe);
// });

