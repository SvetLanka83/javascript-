
    const recipesDiv = document.getElementById('recipes');

    fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
    const { recipes } = recipesObject;

    for (const recipe of recipes) {
    const div = document.createElement('div');
    div.classList.add('recipe-container');

    const title = document.createElement('h3');
    title.innerText = `${recipe.id}. ${recipe.name} `;
    div.appendChild(title);

    const ingTitle = document.createElement('p');
    ingTitle.innerText = 'ingredients:';
    div.appendChild(ingTitle);

    const ol = document.createElement('ol');
    for (const ingredient of recipe.ingredients) {
    const li = document.createElement('li');
    li.innerText = ingredient;
    ol.appendChild(li);

}
    div.appendChild(ol);
    recipesDiv.appendChild(div);
    console.log(recipes);

    const instrList = document.createElement('ol');
        for (const instruction of recipe.instructions) {
            const li = document.createElement('li');
            li.innerText = instruction;
            instrList.appendChild(li);
        }
        div.appendChild(instrList);

        const infoBlock = document.createElement('div');
        infoBlock.innerHTML = `
        <p>prepTimeMinutes: ${recipe.prepTimeMinutes} </p>
        <p>cookTimeMinutes: ${recipe.cookTimeMinutes} </p>
        <p>servings: ${recipe.servings}</p>
        <p>difficulty: ${recipe.difficulty}</p>
        <p>cuisine: ${recipe.cuisine}</p>
        <p>caloriesPerServing: ${recipe.caloriesPerServing}</p>
        <p>tags: ${recipe.tags.join(', ')}</p>
        <p>userId: ${recipe.userId}</p>
        <p>rating: ${recipe.rating} (${recipe.reviewCount} )</p>
        <p>mealType: ${recipe.mealType.join(', ')}</p>
      `;
        div.appendChild(infoBlock);
        recipesDiv.appendChild(div);

        const img = document.createElement('img');
        img.src = recipe.image;
        div.appendChild(img);

}
});

