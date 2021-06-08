import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
	const [idRecipe, setIdRecipe] = useState(null);
	return (
		<ModalContext.Provider value={{ idRecipe, setIdRecipe }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
