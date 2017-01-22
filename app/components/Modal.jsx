import React from 'react';


const Modal = (props)=>{
	
	return (
		<div className="modal fade" id="myModal">
		    <div className="modal-dialog" role="document">
			    <div className="modal-content">
				    <div className="modal-header">
				        <h5 className="modal-title">{props.index === -1 ? "Add a": "Update"} Recipe</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				        	<span aria-hidden="true">&times;</span>
				        </button>
				    </div>
				    <div className="modal-body">
				       	<form onSubmit={props.onSubmit}>
							<div className="form-group">
								<label 
									htmlFor="recipe-name">Recipe
								</label>
								<input 
									className="form-control" 
									type="text" 
									value={props.name}
									onChange={props.onChangeName}/>
							</div>
							

							<div className="form-group">
								<label 
									htmlFor="indgredients">Ingredients</label>
								<input 
									className="form-control"
									type="textarea" 
									value={props.ingredients}
									onChange={props.onChangeIngredient} />
							</div>

							<div className="modal-footer">
								<button 
									type="submit" 
									className="btn btn-primary" 
									data-toggle="modal" 
									data-target="#myModal">	
									{props.index === -1 ? "Add": "Update"} 
									Recipe
								</button>
					        	<button 
						    		type="button" 
						    		className="btn btn-secondary" 
						    		data-dismiss="modal">
						    		Close
						    	</button>
				        	</div>
						</form>
				    </div>  
			    </div>
		    </div>
		</div> 
	)	
}

Modal.propTypes = {
	onSubmit: React.PropTypes.func.isRequired,
	onChangeName: React.PropTypes.func.isRequired,
	onChangeIngredient: React.PropTypes.func.isRequired,
	name: React.PropTypes.string.isRequired,
	ingredients: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
	index: React.PropTypes.number.isRequired
}

export default Modal;







