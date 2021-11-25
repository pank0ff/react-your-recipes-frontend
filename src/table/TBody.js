import React from 'react';
import TRow from './TRow';
 
function TBody(props) {
    return <tbody>
        {props.rows.map((row, ndx) => <TRow rowIndex={ndx}
theme={props.theme} key={row.url} customRenderer={props.customRenderer}
columns={props.columns} row={row}></TRow>)}
    </tbody>;
}
export default TBody;