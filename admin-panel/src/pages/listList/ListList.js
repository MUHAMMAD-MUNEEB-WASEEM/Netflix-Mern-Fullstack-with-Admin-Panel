import React, { useState, useEffect } from 'react'
import './ListList.css'

import { productRows } from '../../DummyData';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {getMovies} from '../../redux/movie/movieApiCall';
import { deleteList, getLists } from '../../redux/list/listApiCall';
import {deleteMovie} from '../../redux/movie/movieApiCall';


function ListList() {

    const [data, setData] = useState(productRows);
    const dispatch = useDispatch()

    const lists = useSelector(state => state.list.lists);
    console.log(lists)

    const handleDelete = (id) => {
        deleteList(id, dispatch)
    }

    useEffect(()=>{
      getLists(dispatch);
    },[dispatch])

    const columns = [
        { field: "_id", headerName: "ID", width: 250 },
        { field: "title", headerName: "title", width: 250 },
        { field: "genre", headerName: "Genre", width: 150 },
        { field: "type", headerName: "type", width: 150 },

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
            rows={lists}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            getRowId={r=>r._id}
         />
        </div>
    )
}

export default ListList
