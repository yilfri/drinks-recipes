import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

const Recipe = ({ recipe }) => {
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { information, setIdRecipe, setRecipe } = useContext(ModalContext);

	const pushIngredients = (information) => {
		let ingredients = [];

		for (let i = 1; i < 16; i++) {
			if (information[`strIngredient${i}`]) {
				ingredients.push(
					<li key={information[`strIngredient${i}`]}>
						{information[`strIngredient${i}`]} {information[`strMeasure${i}`]}
					</li>
				);
			}
		}
		return ingredients;
	};

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
							handleOpen();
						}}
					>
						Ver Receta
					</button>
					<Modal
						open={open}
						onClose={() => {
							setIdRecipe(null);
							setRecipe({});
							handleClose();
						}}
					>
						<div style={modalStyle} className={classes.paper}>
							<h2 className="text-center">{information.strDrink}</h2>
							<h3 className="mt-4">Instrucciones</h3>
							<p>{information.strInstructions}</p>

							<img
								src={information.strDrinkThumb}
								alt={information.strDrink}
								className="img-fluid my-4"
							/>

							<h3>Ingredientes</h3>
							{pushIngredients(information)}
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
