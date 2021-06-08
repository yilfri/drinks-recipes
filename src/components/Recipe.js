import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Recipe = ({ recipe }) => {
	const { setIdRecipe } = useContext(ModalContext);
	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<h2 className="card-header text-center">{recipe.strDrink}</h2>
				<img src={recipe.strDrinkThumb} alt={recipe.strDrink} className="card-img-top" />

				<div className="card-body">
					<button
						type="button"
						className="btn btn-block btn-primary"
						onClick={(e) => {
							setIdRecipe(recipe.idDrink);
						}}
					>
						Ver Receta
					</button>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
