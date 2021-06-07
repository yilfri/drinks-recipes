import React from 'react';

const Form = () => {
	return (
		<form className="col-12">
			<fieldset className="text-center">
				<legend>Busca bebidas por Categoría o Ingredientes</legend>
			</fieldset>

			<div className="row mt-4">
				<div className="col-md-4">
					<input
						type="text"
						name="nombre"
						className="form-control"
						placeholder="Buscar por Ingredientes"
					/>
				</div>
				<div className="col-md-4">
					<select name="categoria" className="form-control">
						<option value="">-- Selecciona Categoría --</option>
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
