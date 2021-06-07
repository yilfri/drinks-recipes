import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
	const [recipes, setRecipes] = useState([]);
	const [newSearch, setNewSearch] = useState({
		name: '',
		category: ''
	});
	const [consult, setConsult] = useState(false);

	const { name, category } = newSearch;

	useEffect(() => {
		if (consult) {
			const getRecipes = async () => {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&?c=${category}`;

				const res = await axios.get(url);

				/* console.log(res.data.drinks); */
				setRecipes(res.data.drinks);
			};
			getRecipes();
		}
	}, [newSearch]);

	return (
		<RecipesContext.Provider
			value={{
				setNewSearch,
				setConsult
			}}
		>
			{props.children}
		</RecipesContext.Provider>
	);
};

export default RecipesProvider;
