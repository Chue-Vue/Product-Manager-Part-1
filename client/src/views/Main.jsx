import Axios from 'axios';
import {useState} from 'react';
import {navigate} from '@reach/router';
import ProductForm from '../components/ProductForm';

const Create = props => {
    const initialState = {
        title:"",
        price:0,
        description:"",
    }
    const [productForm, setProductForm] = useState(initialState);
    const [errors,setErrors] = useState({
        title:"",
        price:"",
        description:""
    })

    const handleInputChange = e => {
        setProductForm({
            ...productForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/products/create',productForm)
            .then(res => {
                if(res.data.results){
                    setProductForm(initialState);
                    navigate('/')
                }
                else{
                    setErrors(res.data);
                }
            })
    }
    return(
        <div>
            <h2 className="text-center">Add a Product:</h2>
            <ProductForm
                form={productForm}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Add a Product"
            />
        </div>
    );
}

export default Create;