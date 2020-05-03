console.log("linked")
console.log($);
let searchedRecipes = [];
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
    
    const clearIngredients = () =>{
        $('.ordered-list').remove();
    };

    const clearRecipes = () =>{
        $('.recipe-cards').remove();
    }

    const buildRecipeCard = (image, label, url, listGroceries) =>{
        let card = $('<div>')
            .addClass('card mx-2 my-2 custom-card-width')
            .addClass('recipe-cards')
            .attr('id', 'recipe-card')
            .attr('style', 'width: 18rem');
        const cardContentContainer = $('<div>').addClass('px-3 py-3');
        let img = $('<img>').addClass('card-img-top').attr("src", image);
        let title = $('<h5>').addClass('card-title').text(label);
        let recipeDirectedLink = $('<a>').addClass('btn');
        recipeDirectedLink.addClass('btn-link');
        recipeDirectedLink.attr('href', url)
        recipeDirectedLink.attr('target', '_blank');
        recipeDirectedLink.text('Go to recipe');
        card.append(img).append(cardContentContainer);
        cardContentContainer.append(title).append(recipeDirectedLink).append(listGroceries);
        return card;
    }

    const buildIngredients = (ingredients) =>{
        return ingredients.map((ingredient) => {
            let groceryList = $('<li>').addClass('grocery-item').text(ingredient.food);
            let deleteButton = $('<button>').addClass('btn').addClass('btn-danger').attr('id', 'delete-button').text('remove');
            deleteButton.on('click', deleteItem);
            let doneButton = $('<button>').addClass('btn').addClass('btn-success').attr('id', 'done-button').text('done!');
            doneButton.on('click', doneItem);
            groceryList.append(deleteButton)
            .append(doneButton);
            return groceryList;

        })
    }

    const fetchRecipe = async() =>{
        let result = await getRecipe($("#input-box").val());
        searchedRecipes = result.hits;
        clearRecipes();
        for (let j=0; j<searchedRecipes.length; j++){
            const { image, label, url } = searchedRecipes[j].recipe;
            let listGroceries = $('<a>').addClass('btn');
            listGroceries.addClass('btn-info');
            listGroceries.on('click', () =>{
                clearIngredients();
                let orderedList = $('<ol>').addClass('ordered-list').append(buildIngredients(searchedRecipes[j].recipe.ingredients));
                $('#groceries').append(orderedList);
            });
            listGroceries.text('Groceries list');
            const card = buildRecipeCard(image, label, url, listGroceries); //does not work
            $('.recipe-container').append(card);
        }  
    }
    const deleteItem = (event) =>{
        let item = $(event.currentTarget).parent();
        item.remove();
    }

    const doneItem = (event) =>{
        let item = $(event.currentTarget).parent();
        item.css("text-decoration", "line-through");
    }
    
    $ahoyRecipeBtn.on('click', fetchRecipe);

});


