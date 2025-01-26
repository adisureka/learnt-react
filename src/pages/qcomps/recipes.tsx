export const recipes = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
  }, 
  {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
  }, 
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
  }
];


export default function RecipeList() {
const items = recipes.map(item => 
   <div>
       <h1>{item.name}</h1>
       {
           Array.from(item.ingredients.values()).map(x => 
               <li>{x}</li>
               )
       }
   </div> 
    
    )
return <ul>{items}</ul>