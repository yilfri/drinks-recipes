import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// Crear el Context.

export const ContextCategories = createContext();

// Provider es donde se encuentran las funciones y state.

const ProviderCategories = (props) => {
	// Crear el state del Context.
	const [categories, setCategories] = useState([]);

	// Realizar consulta a la API

	useEffect(() => {
		const getCategories = async () => {
			const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
			const res = await axios.get(url);

			setCategories(res.data.drinks);
		};
		getCategories();
	}, []);

	return (
		<ContextCategories.Provider
			value={{
				categories
			}}
		>
			{props.children}
		</ContextCategories.Provider>
	);
};

export default ProviderCategories;
