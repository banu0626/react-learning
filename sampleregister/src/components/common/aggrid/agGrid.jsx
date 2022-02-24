import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
export default function AgGrid(props){
    return(
        <AgGridReact
        rowData={props.rowData}
        ref={props.ref}
        rowSelection={props.rowSelection}
        columnDefs={props.columnDefs}>
    </AgGridReact>
    )
} 