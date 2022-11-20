import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 130 },


]

const Table = () => {

    const [newsInfo, setNewsInfo] = useState([]);
    const getNews = async () => {
        const response = await axios.get("http://localhost:8000/news")
        setNewsInfo(response.data)

    }



    useEffect(() => {
        getNews()
    })



  return (
    <div style={{height:500, width:'100%'}}>
      <DataGrid
        rows={newsInfo}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
       

      />
    </div>
  )
}

export default Table
