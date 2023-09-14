import React from 'react';

function RecipeTable({ recipes }) {
  if (recipes.length === 0) {
    return <p>No search results found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ingredients</th>
          <th>Method</th>
          <th>Garnish</th>
          <th>History</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe) => (
          <tr key={recipe.id}>
            <td>{recipe.name}</td>
            <td>
              {recipe.ingredient1}, {recipe.ingredient2}, {recipe.ingredient3}, {recipe.ingredient4}, {recipe.ingredient5}, {recipe.ingredient6}, {recipe.ingredient7}, {recipe.ingredient8}, {recipe.ingredient9}, {recipe.ingredient10}
            </td>
            <td>{recipe.method}</td>
            <td>{recipe.garnish}</td>
            <td>{recipe.history}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecipeTable;
