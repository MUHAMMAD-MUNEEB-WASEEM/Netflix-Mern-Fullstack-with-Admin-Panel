import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import Chart from '../../components/Chart/Chart'
import { productData } from '../../DummyData'
import { Publish } from '@material-ui/icons'

function Product() {
    return (
        <div className="product">

            <div className="productContainer__title">

                <h1 className="product__title">Product</h1>

                <Link to='/newproduct'>
                    <button className="productAdd__button">Create</button>
                </Link>

            </div>


            <div className="product__top">

                <div className="productTop__left">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>

                <div className="productTop__right">
                    
                    <div className="productInfo__top">
                         <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfo__img" />
                        <span className="product__name">Apple Airpods</span>
                    </div>

                    <div className="productInfo__bottom">
                        
                        <div className="productInfo__item">
                            <span className="productInfo__key">id:</span>
                            <span className="productInfo__value">123</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">sales:</span>
                            <span className="productInfo__value">5123</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">active:</span>
                            <span className="productInfo__value">yes</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">in stock:</span>
                            <span className="productInfo__value">no</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="product__bottom">
                <form className="product__form">
                    
                    <div className="productForm__left">

                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpods"/>
                        
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>

                    <div className="productForm__right">
                        <div className="productRight__upload">
                            <img className="product__uploading" alt="" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                            <label for="file"><Publish/></label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="product__button">Update</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Product
