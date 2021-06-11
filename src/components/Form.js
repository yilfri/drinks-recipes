import React, { useContext, useState } from 'react';
import { ContextCategories } from '../context/ContextCategories';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {
	const [search, setSearch] = useState({
		name: '',
		category: ''
	});

	const { categories } = useContext(ContextCategories);
	const { setNewSearch, setConsult } = useContext(RecipesContext);

	const handleChange = (e) => {
		setSearch({
			...search,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setNewSearch(search);
		setConsult(true);
	};
	return (
		<form className="col-12" onSubmit={handleSubmit}>
			<fieldset className="text-center">
				<legend>Busca bebidas por Categoría o Ingredientes</legend>
			</fieldset>

			<div className="row mt-4">
				<div className="col-md-4">
					<input
						type="text"
						name="name"
						className="form-control"
						placeholder="Buscar por Ingredientes"
						onChange={handleChange}
					/>
				</div>
				<div className="col-md-4">
					<select name="category" className="form-control" onChange={handleChange}>
						<option value="">-- Selecciona Categoría --</option>
						{categories.map((category) => (
							<option value={category.strCategory} key={category.strCategory}>
								{category.strCategory}
							</option>
						))}
					</select>
				</div>
				<div className="col-md-4">
					<input type="submit" value="Buscar Bebidas" className="btn btn-block btn-primary" />
				</div>
			</div>
		</form>
	);
};

export default Form;
