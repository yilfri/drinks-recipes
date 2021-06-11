import React, { useContext } from 'react';
import Recipe from './Recipe';
import { RecipesContext } from '../context/RecipesContext';
import PropTypes from 'prop-types';

const RecipesList = () => {
	const { recipes } = useContext(RecipesContext);

	return (
		<div className="row mt-5">
			{recipes.map((recipe) => (
				<Recipe key={recipe.idDrink} recipe={recipe} />
			))}
		</div>
	);
};

RecipesList.propTypes = {
	recipes: PropTypes.object
};

export default RecipesList;
