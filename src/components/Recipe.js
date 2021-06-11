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
		width: 600,
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

	const { information, setIdRecipe } = useContext(ModalContext);
	/* console.log(information); */

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
							handleClose();
						}}
					>
						<div style={modalStyle} className={classes.paper}>
							<h1>Desde modal</h1>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
