import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Product.css'
import { Publish } from '@material-ui/icons'

function Product() {
    const location = useLocation()
    const movie = location.singleMovie;
    return (
        <div className="product">

            <div className="productContainer__title">

                <h1 className="product__title">Movie</h1>

                <Link to='/newproduct'>
                    <button className="productAdd__button">Create</button>
                </Link>

            </div>


            <div className="product__top">

                <div className="productTop__right">
                    
                    <div className="productInfo__top">
                         <img src={movie.img} alt="" className="productInfo__img" />
                        <span className="product__name">{movie.title}</span>
                    </div>

                    <div className="productInfo__bottom">
                        
                        <div className="productInfo__item">
                            <span className="productInfo__key">id:</span>
                            <span className="productInfo__value">{movie._id}</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">genre:</span>
                            <span className="productInfo__value">{movie.genre}</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">year:</span>
                            <span className="productInfo__value">{movie.year}</span>
                        </div>

                        <div className="productInfo__item">
                            <span className="productInfo__key">limit:</span>
                            <span className="productInfo__value">{movie.limit}</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="product__bottom">
                <form className="product__form">
                    
                    <div className="productForm__left">

                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title}/>
                        
                        <label>Year</label>
                        <input type="text" placeholder={movie.year} />

                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} />

                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer} />

                        <label>Video</label>
                        <input type="file" placeholder={movie.video} />

                    </div>

                    <div className="productForm__right">
                        <div className="productRight__upload">
                            <img className="product__uploading" alt="" src={movie.img} />
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
