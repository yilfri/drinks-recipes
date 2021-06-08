import React from 'react';

const Recipe = ({ recipe }) => {
	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<h2 className="card-header text-center">{recipe.strDrink}</h2>
				<img src={recipe.strDrinkThumb} alt={recipe.strDrink} className="card-img-top" />

				<div className="card-body">
					<button type="button" className="btn btn-block btn-primary">
						Ver Receta
					</button>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
