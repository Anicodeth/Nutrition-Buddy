
const fields = [
  { name: 'query', type: 'text', label: 'Query', placeholder: 'E.g., Pasta Carbonara' },
  { name: 'cuisine', type: 'text', label: 'Cuisine(s)', placeholder: 'E.g., Italian' },
  { name: 'excludeCuisine', type: 'text', label: 'Exclude Cuisine(s)', placeholder: 'E.g., Mexican' },
  { name: 'diet', type: 'text', label: 'Diet(s)', placeholder: 'E.g., Vegetarian' },
  { name: 'intolerances', type: 'text', label: 'Intolerances', placeholder: 'E.g., Gluten' },
  { name: 'equipment', type: 'text', label: 'Equipment required', placeholder: 'E.g., Blender' },
  { name: 'includeIngredients', type: 'text', label: 'Include Ingredients', placeholder: 'E.g., Chicken' },
  { name: 'excludeIngredients', type: 'text', label: 'Exclude Ingredients', placeholder: 'E.g., Onions' },
  { name: 'type', type: 'text', label: 'Type of recipe', placeholder: 'E.g., Dessert' },
  { name: 'maxReadyTime', type: 'number', label: 'Max Ready Time (minutes)', placeholder: 'E.g., 30' },
  { name: 'minCarbs', type: 'number', label: 'Min Carbs (grams per serving)', placeholder: 'E.g., 15' },
  { name: 'maxCarbs', type: 'number', label: 'Max Carbs (grams per serving)', placeholder: 'E.g., 60' },
  { name: 'minProtein', type: 'number', label: 'Min Protein (grams per serving)', placeholder: 'E.g., 10' },
  { name: 'maxProtein', type: 'number', label: 'Max Protein (grams per serving)', placeholder: 'E.g., 40' },
  { name: 'minCalories', type: 'number', label: 'Min Calories per serving', placeholder: 'E.g., 100' },
  { name: 'maxCalories', type: 'number', label: 'Max Calories per serving', placeholder: 'E.g., 500' },
  { name: 'minFat', type: 'number', label: 'Min Fat (grams per serving)', placeholder: 'E.g., 5' },
  { name: 'maxFat', type: 'number', label: 'Max Fat (grams per serving)', placeholder: 'E.g., 30' },
  { name: 'minAlcohol', type: 'number', label: 'Min Alcohol (grams per serving)', placeholder: 'E.g., 0' },
  { name: 'maxAlcohol', type: 'number', label: 'Max Alcohol (grams per serving)', placeholder: 'E.g., 10' },
  { name: 'minCaffeine', type: 'number', label: 'Min Caffeine (milligrams per serving)', placeholder: 'E.g., 0' },
  { name: 'maxCaffeine', type: 'number', label: 'Max Caffeine (milligrams per serving)', placeholder: 'E.g., 50' },
  { name: 'minVitaminC', type: 'number', label: 'Min Vitamin C (milligrams per serving)', placeholder: 'E.g., 10' },
  { name: 'maxVitaminC', type: 'number', label: 'Max Vitamin C (milligrams per serving)', placeholder: 'E.g., 200' },
  { name: 'minVitaminD', type: 'number', label: 'Min Vitamin D (micrograms per serving)', placeholder: 'E.g., 1' },
  { name: 'maxVitaminD', type: 'number', label: 'Max Vitamin D (micrograms per serving)', placeholder: 'E.g., 10' },
  { name: 'minVitaminE', type: 'number', label: 'Min Vitamin E (milligrams per serving)', placeholder: 'E.g., 2' },
  { name: 'maxVitaminE', type: 'number', label: 'Max Vitamin E (milligrams per serving)', placeholder: 'E.g., 20' },
  { name: 'minVitaminK', type: 'number', label: 'Min Vitamin K (micrograms per serving)', placeholder: 'E.g., 5' },
  { name: 'maxVitaminK', type: 'number', label: 'Max Vitamin K (micrograms per serving)', placeholder: 'E.g., 100' },
  { name: 'minVitaminB1', type: 'number', label: 'Min Vitamin B1 (milligrams per serving)', placeholder: 'E.g., 0.5' },
  { name: 'maxVitaminB1', type: 'number', label: 'Max Vitamin B1 (milligrams per serving)', placeholder: 'E.g., 5' },
  { name: 'minVitaminB2', type: 'number', label: 'Min Vitamin B2 (milligrams per serving)', placeholder: 'E.g., 0.2' },
  { name: 'maxVitaminB2', type: 'number', label: 'Max Vitamin B2 (milligrams per serving)', placeholder: 'E.g., 3' },
  { name: 'minVitaminB5', type: 'number', label: 'Min Vitamin B5 (milligrams per serving)', placeholder: 'E.g., 1' },
  { name: 'maxVitaminB5', type: 'number', label: 'Max Vitamin B5 (milligrams per serving)', placeholder: 'E.g., 10' },
  { name: 'minVitaminB3', type: 'number', label: 'Min Vitamin B3 (milligrams per serving)', placeholder: 'E.g., 3' },
  { name: 'maxVitaminB3', type: 'number', label: 'Max Vitamin B3 (milligrams per serving)', placeholder: 'E.g., 30' },
  { name: 'minVitaminB6', type: 'number', label: 'Min Vitamin B6 (milligrams per serving)', placeholder: 'E.g., 0.5' },
  { name: 'maxVitaminB6', type: 'number', label: 'Max Vitamin B6 (milligrams per serving)', placeholder: 'E.g., 5' },
  { name: 'minVitaminB12', type: 'number', label: 'Min Vitamin B12 (micrograms per serving)', placeholder: 'E.g., 1' },
  { name: 'maxVitaminB12', type: 'number', label: 'Max Vitamin B12 (micrograms per serving)', placeholder: 'E.g., 100' },
  { name: 'minFolate', type: 'number', label: 'Min Folate (micrograms per serving)', placeholder: 'E.g., 20' },
  { name: 'maxFolate', type: 'number', label: 'Max Folate (micrograms per serving)', placeholder: 'E.g., 200' },
  { name: 'minFiber', type: 'number', label: 'Min Fiber (grams per serving)', placeholder: 'E.g., 1' },
  { name: 'maxFiber', type: 'number', label: 'Max Fiber (grams per serving)', placeholder: 'E.g., 10' },
  { name: 'minIron', type: 'number', label: 'Min Iron (milligrams per serving)', placeholder: 'E.g., 0.5' },
  { name: 'maxIron', type: 'number', label: 'Max Iron (milligrams per serving)', placeholder: 'E.g., 10' },
  { name: 'minMagnesium', type: 'number', label: 'Min Magnesium (milligrams per serving)', placeholder: 'E.g., 20' },
  { name: 'maxMagnesium', type: 'number', label: 'Max Magnesium (milligrams per serving)', placeholder: 'E.g., 500' },
  { name: 'minPotassium', type: 'number', label: 'Min Potassium (milligrams per serving)', placeholder: 'E.g., 100' },
  { name: 'maxPotassium', type: 'number', label: 'Max Potassium (milligrams per serving)', placeholder: 'E.g., 2000' },
  { name: 'minSodium', type: 'number', label: 'Min Sodium (milligrams per serving)', placeholder: 'E.g., 100' },
  { name: 'maxSodium', type: 'number', label: 'Max Sodium (milligrams per serving)', placeholder: 'E.g., 2000' },
  { name: 'minZinc', type: 'number', label: 'Min Zinc (milligrams per serving)', placeholder: 'E.g., 0.5' },
  { name: 'maxZinc', type: 'number', label: 'Max Zinc (milligrams per serving)', placeholder: 'E.g., 10' },
  { name: 'minPhosphorus', type: 'number', label: 'Min Phosphorus (milligrams per serving)', placeholder: 'E.g., 50' },
  { name: 'maxPhosphorus', type: 'number', label: 'Max Phosphorus (milligrams per serving)', placeholder: 'E.g., 500' },
  { name: 'minSelenium', type: 'number', label: 'Min Selenium (micrograms per serving)', placeholder: 'E.g., 5' },
  { name: 'maxSelenium', type: 'number', label: 'Max Selenium (micrograms per serving)', placeholder: 'E.g., 100' },
  { name: 'minManganese', type: 'number', label: 'Min Manganese (milligrams per serving)', placeholder: 'E.g., 1' },
  { name: 'maxManganese', type: 'number', label: 'Max Manganese (milligrams per serving)', placeholder: 'E.g., 10' },
  { name: 'minRiboflavin', type: 'number', label: 'Min Riboflavin (milligrams per serving)', placeholder: 'E.g., 0.1' },
  { name: 'maxRiboflavin', type: 'number', label: 'Max Riboflavin (milligrams per serving)', placeholder: 'E.g., 3' },
  { name: 'minThiamine', type: 'number', label: 'Min Thiamine (milligrams per serving)', placeholder: 'E.g., 0.05' },
  { name: 'maxThiamine', type: 'number', label: 'Max Thiamine (milligrams per serving)', placeholder: 'E.g., 2' },
  { name: 'minCalcium', type: 'number', label: 'Min Calcium (milligrams per serving)', placeholder: 'E.g., 20' },
  { name: 'maxCalcium', type: 'number', label: 'Max Calcium (milligrams per serving)', placeholder: 'E.g., 500' },
  { name: 'minCopper', type: 'number', label: 'Min Copper (micrograms per serving)', placeholder: 'E.g., 100' },
  { name: 'maxCopper', type: 'number', label: 'Max Copper (micrograms per serving)', placeholder: 'E.g., 5000' },
  { name: 'minOmega3', type: 'number', label: 'Min Omega-3 Fatty Acids (milligrams per serving)', placeholder: 'E.g., 100' },
  { name: 'maxOmega3', type: 'number', label: 'Max Omega-3 Fatty Acids (milligrams per serving)', placeholder: 'E.g., 1000' },
  { name: 'minOmega6', type: 'number', label: 'Min Omega-6 Fatty Acids (milligrams per serving)', placeholder: 'E.g., 500' },
  { name: 'maxOmega6', type: 'number', label: 'Max Omega-6 Fatty Acids (milligrams per serving)', placeholder: 'E.g., 3000' },
  { name: 'minWater', type: 'number', label: 'Min Water Content (grams per serving)', placeholder: 'E.g., 100' },
  { name: 'maxWater', type: 'number', label: 'Max Water Content (grams per serving)', placeholder: 'E.g., 500' },
];

let i=1;
let form = document.querySelector('#main-form');
let lineCon = document.createElement('div');
lineCon.setAttribute('class', 'line-container');

fields.forEach((field) => {

    let div = document.createElement('div');
    div.setAttribute('class', 'request-box');

    let id = `request${i}`;
    let input = document.createElement('input');
    input.setAttribute('type', field.type);
    input.setAttribute('id', id);
    input.setAttribute('class', "form-control");
    input.setAttribute('name', field.name);
    input.setAttribute('placeholder', field.placeholder);

    let label = document.createElement('label');
    let newline = document.createElement('br');

    label.setAttribute('for', id);
    label.innerHTML = field.label;
    
    div.appendChild(label);
    div.appendChild(newline);
    div.appendChild(input);

    lineCon.appendChild(div);
    if (i % 2 == 0) {
        form.appendChild(lineCon); 
        lineCon = document.createElement('div');    
        lineCon.setAttribute('class', 'line-container');
    }

i = i + 1;
});

let button = document.createElement('input');
button.setAttribute('class' , 'btn btn-primary');
button.setAttribute('value', 'Search');
button.setAttribute('type', 'submit');
form.appendChild(button);


let body = {};
document.getElementById('main-form').addEventListener("submit", (event)=>{
event.preventDefault();

let spinner = document.querySelector('.spinner');
let items = document.querySelectorAll('.recipe-container');
let image = document.querySelector('.image-container');
let instructions = document.querySelector('.instructions-container');

if (instructions){
  instructions.style.display = 'none';
}


if (image){
  image.style.display = 'none';
}



items.forEach((item) => {
    item.style.display = 'none';
});

spinner.style.display = 'grid';

let formData = document.getElementsByTagName('input');

for(let i = 0; i < formData.length; i++){
    if (formData[i].value == ""){
        continue;
    }
    body[formData[i].name] = formData[i].value;
}


const apiUrl = 'http://localhost:8000/searchrecipes/';


console.log(JSON.stringify(body));
// Fetch the data from the API
fetch(apiUrl, {
    method: "POST", // Change the method based on your API requirements (GET, POST, etc.)
    headers: {
      "Content-Type" : "application/json", // Specify that we are sending JSON data
    },
    body: JSON.stringify(body), // Convert the JSON data to a string
  })
    .then((response) => {
        response.json().then((data) => {
           let apiData = data.results;
           sessionStorage.setItem('apiData', JSON.stringify(apiData));
           console.log(apiData);
              spinner.style.display = 'none';
            displayData(apiData);
    });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      spinner.style.display = 'none';
    });

});


function displayData(apiData) {
    let display = document.getElementById('recipes-container');

    apiData.forEach((recipe) => {
        let recipeDiv = document.createElement('div');
        recipeDiv.setAttribute('class', 'recipe-container');
        recipeDiv.setAttribute("onclick", `addRecipeDataToDiv(${recipe.id})`);
        let title = document.createElement('h4');
        title.innerHTML = recipe.title;

        let paragraph = document.createElement('p');
        paragraph.innerHTML = getFirstFourSentences(recipe.summary) ;

        let text = document.createElement('div');

        text.setAttribute('class', 'recipe-text');
        text.appendChild(title);
        text.appendChild(paragraph);

        let image = document.createElement('img');
        image.setAttribute('src', recipe.image);

        recipeDiv.appendChild(image);
        recipeDiv.appendChild(text);
       
        display.appendChild(recipeDiv);
    });
}

function getFirstFourSentences(paragraph) {
    // Check if the paragraph is empty or undefined
    if (!paragraph) {
      return '';
    }
  
    // Define an array to store the sentences
    let sentences = [];
  
    // Regular expression to match sentence endings
    const sentenceEndingsRegex = /(\.|\?|\!)\s+/;
  
    // Split the paragraph into sentences using the regular expression
    sentences = paragraph.split(sentenceEndingsRegex);
  
    // Remove any empty strings resulting from the split
    sentences = sentences.filter(sentence => sentence.trim() !== '');
  
    // Extract the first three sentences or the entire paragraph if it has less than three sentences
    const firstThreeSentences = sentences.slice(0, 4).join(' ');
  
    return firstThreeSentences;
  }
  

  function addRecipeDataToDiv( divId) {
    const apiData = JSON.parse(sessionStorage.getItem('apiData')).find((recipe) => recipe.id === divId);
    let div = document.createElement('div');
    div.setAttribute('class', 'instructions-container');
    // Create elements to display recipe data
    const imageElement = document.createElement('img');
    imageElement.src = apiData.image;
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = apiData.title;
    
    const summaryElement = document.createElement('p');
    summaryElement.innerHTML = apiData.summary;
    
    const instructionsElement = document.createElement('ol');
    apiData.analyzedInstructions[0].steps.forEach((step) => {
      const stepElement = document.createElement('li');
      stepElement.textContent = step.step;
      instructionsElement.appendChild(stepElement);
    });
  
    let display = document.getElementById('recipes-container');
    removeElementsByClassName('recipe-container');
    
    div.appendChild(imageElement);
    div.appendChild(titleElement);
    div.appendChild(summaryElement);
    div.appendChild(instructionsElement);
    div.style.padding = '1rem';
    display.appendChild(div);

  
  }


  function removeElementsByClassName(className) {
    const elements = document.querySelectorAll('.' + className);
    
    elements.forEach((element) => {
      element.parentNode.removeChild(element);
    });
  }