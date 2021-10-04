import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './List.css'
import { Publish } from '@material-ui/icons'

function List() {
    const location = useLocation()
    const list = location.singleList;
    return (
        <div className="product">

            <div className="productContainer__title">

                <h1 className="product__title">List</h1>

                <Link to='/newlist'>
                    <button className="productAdd__button">Create</button>
                </Link>

            </div>


            <div className="product__top">

                <div className="productTop__right">
                    
                    <div className="productInfo__top">
                        <span className="product__name">{list.title}</span>
                    </div>

                    <div className="productInfo__bottom">
                        
                        <div className="productInfo__item">
                            <span className="productInfo__key">id:</span>
                            <span className="productInfo__value">{list._id}</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">genre:</span>
                            <span className="productInfo__value">{list.genre}</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">type:</span>
                            <span className="productInfo__value">{list.type}</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="product__bottom">
                <form className="product__form">
                    
                    <div className="productForm__left">

                        <label>List Title</label>
                        <input type="text" placeholder={list.title}/>
                        
                        <label>Type</label>
                        <input type="text" placeholder={list.year} />

                        <label>Genre</label>
                        <input type="text" placeholder={list.genre} />

        

                    </div>

                    <div className="productForm__right">
                        <button className="product__button">Update</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default List
