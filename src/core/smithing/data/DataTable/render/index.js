/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
const displaySelection = (data) => <div style={{textAlign: 'left'}}>No Selection</div>
/* ------------------------------- Component -------------------------------- */
export default ({
  dataFeed, columns,
  tableHeader,
  selectedItems, displaySelection,
  onSelectionChange
}) => {
  _.omit(dataFeed, ['startTime', 'end'])
return <DataTable 
  value={dataFeed ? dataFeed : []} 
  selectionMode="multiple" 
  header={tableHeader}
  selection={selectedItems}
  sortable={true}
  sortMode="multiple"
  onSelectionChange={onSelectionChange}
  >
    {
      columns.map(column=><Column field={column.field} header={column.header} sortable={true}/>)
    }

</DataTable>}