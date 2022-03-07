import { AgGridReact } from 'ag-grid-react';
import React,{ useEffect, useState } from 'react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function AgGrid(props){
    const [rowData,setRowData] = useState([])
    const [columnData,setColumnData] = useState([])   
    useEffect(() => {
        setColumnData(props.header)
        setRowData(props.data)

    }, [props])
    return(
        <div className="ag-theme-alpine" style={{height:400,width:1000}}>
        <AgGridReact
        rowData={rowData}
        columnDefs={columnData}>
    </AgGridReact>
    </div>
    )
} 