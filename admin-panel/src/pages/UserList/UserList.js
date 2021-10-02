import React, { useState } from 'react'
import './UserList.css';
import { userRows } from '../../DummyData';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className="userList__user">
                    <img className="userList__img" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status',  width: 120},
        { field: 'transaction', headerName: 'Transaction Volume', width: 160},
        { field: 'action', headerName: "Action", width: 150, renderCell: (params)=>{
            return (
                <>
                <Link to={'/user/' + params.row.id}>
                    <button className="userList__edit">Edit</button>
                </Link>
                <DeleteOutline className="userList__delete" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        }}
    ];
      
      
    
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
             />
        </div>
    )
}

export default UserList
