import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';
import ProviderCategories from './context/ContextCategories';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

function App() {
	return (
		<ProviderCategories>
			<RecipesProvider>
				<ModalProvider>
					<Header />

					<div className="container mt-5">
						<div className="row">
							<Form />
						</div>
						<RecipesList />
					</div>
				</ModalProvider>
			</RecipesProvider>
		</ProviderCategories>
	);
}

export default App;
