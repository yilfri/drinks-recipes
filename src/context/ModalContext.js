import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
	const [idRecipe, setIdRecipe] = useState(null);
	const [information, setRecipe] = useState({});

	useEffect(() => {
		const getRecipe = async () => {
			if (!idRecipe) return;

			const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

			const res = await axios.get(url);
			console.log(res);

			setRecipe(res.data.drinks[0]);
		};
		getRecipe();
	}, [idRecipe]);
	return (
		<ModalContext.Provider value={{ information, setIdRecipe }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
