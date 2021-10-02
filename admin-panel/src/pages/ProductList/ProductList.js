import React, { useState, useEffect } from 'react'
import './ProductList.css'

import { productRows } from '../../DummyData';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {getMovies} from '../../redux/movie/movieApiCall';
import {deleteMovie} from '../../redux/movie/movieApiCall';


function ProductList() {

    const [data, setData] = useState(productRows);
    const dispatch = useDispatch()
    const movies = useSelector(state=>state.movie.movies);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch)
    }

    useEffect(()=>{
      getMovies(dispatch)
    },[dispatch])

    console.log(movies)

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
          field: "movie",
          headerName: "Movie",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productList__item">
                <img className="productList__img" src={params.row.img} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "genre", headerName: "Genre", width: 120 },
        { field: "year", headerName: "Year", width: 120 },
        { field: "limit", headerName: "limit", width: 120 },
        { field: "isSeries", headerName: "isSeries", width: 120 },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={{pathname: "/product/" + params.row._id, singleMovie: params.row}}>
                  <button className="productList__edit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productList__delete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];

    return (
        <div className="productList">
           <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={r=>r._id}
         />
        </div>
    )
}

export default ProductList
