import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import storage from '../../firebase';
import { createList } from '../../redux/list/listApiCall';
import { createMovie, getMovies } from '../../redux/movie/movieApiCall';
import './NewList.css'

function NewList() {

    const history = useHistory();
    const dispatch = useDispatch()

    const [list, setList] = useState(null)

    const movies = useSelector(state => state.movie.movies)

    const handleChange = (e) => {
        const value = e.target.value;
        setList({...list, [e.target.name]:value})

    }

    useEffect(()=>{
      getMovies(dispatch)
    },[dispatch])

    const handleSelect = (e) => {
      console.log(e.target.selectedOptions);
      let value = Array.from(e.target.selectedOptions, (option)=>option.value)
      setList({...list, [e.target.name]: value})
    }

    console.log(list)

    const handleSubmit = (e) => {
        e.preventDefault()
        createList(list, dispatch)
        history.push('/lists')
    }
    return (
        <div className="newProduct"> 
           <h1 className="addProduct__title">New List</h1>

            <form className="addProduct__form">

              <div className="form__left">

                <div className="addProduct__item">
                    <label>Title</label>
                    <input type="text" placeholder="Popular movies" name="title" onChange={handleChange}/>
                </div>

                <div className="addProduct__item">
                    <label>Genre</label>
                    <input type="text" placeholder="action" name="genre" onChange={handleChange}/>
                </div>

                <div className="addProduct__item">
                    <label>Type</label>
                    <select name="type" onChange={handleChange}>
                      <option>Type</option>
                      <option value="movie">Movie</option>
                      <option value="series">Series</option>
                    </select>
                </div>

              </div>
                
               <div className="form__right"> 

                  <div className="addProduct__item">
                      <label>Content</label>
                      <select multiple name="content" onChange={handleSelect} style={{height: "280px"}}>
                        {movies.map((movie)=>(
                            <option key={movie.id} value={movie._id}>{movie.title}</option>
                        ))}
                        
                      </select>
                  </div>

                </div>
            
                <button className="addProduct__button" onClick={handleSubmit}>Create</button>    
        
            </form>
        </div>
    )
}

export default NewList
