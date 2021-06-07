import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ProviderCategories from './context/ContextCategories';
import RecipesProvider from './context/RecipesContext';

function App() {
	return (
		<ProviderCategories>
			<RecipesProvider>
				<Header />

				<div className="container mt-5">
					<div className="row">
						<Form />
					</div>
				</div>
			</RecipesProvider>
		</ProviderCategories>
	);
}

export default App;
