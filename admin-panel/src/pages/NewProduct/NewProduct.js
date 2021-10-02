import React from 'react'
import './NewProduct.css'

function NewProduct() {
    return (
        <div className="newProduct"> 
           <h1 className="addProduct__title">New Product</h1>

            <form className="addProduct__form">

                <div className="addProduct__item">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>

                <div className="addProduct__item">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
               
                <div className="addProduct__item">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                
                <div className="addProduct__item">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="addProduct__button">Create</button>

            </form>
        </div>
    )
}

export default NewProduct
