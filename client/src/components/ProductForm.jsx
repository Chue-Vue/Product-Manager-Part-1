const ProductForm = props => {
    const {form, errors, handleInputChange, handleSubmit, submitValue} = props;
    return(
        <form className="col-4 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title:</label>
                <input 
                    type="text" 
                    name="title" className="form-control"
                    value={form.title}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.title ? errors.title.message: ""}</span>
            </div>
            <div className="form-group">
                <label>Price:</label>
                <input 
                    type="number" 
                    name="price" className="form-control"
                    value={form.price}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.price ? errors.price.message: ""}</span>
            </div>
            <div className="form-group">
                <label>Description:</label>
                <input 
                    type="text" 
                    name="description" className="form-control"
                    value={form.description}
                    onChange={handleInputChange}
                />
                <span className="text-danger">{errors.description ? errors.description.message: ""}</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-success"/>
        </form>
    );
}

export default ProductForm;