import React, { useState } from 'react';
import THead from './THead.js';
import TBody from './TBody';
import { columns, sampleData } from './SampleData';
import { theme } from './Table.Style';
 
function Table(props) {
    const [currenttheme, setCurrentTheme] = useState(theme.light);
    const customRenderer = (row) => {
        return <a href={row.url}>{row.title}</a>;
    };
    const columnRenderer = (column) => {
        return column.slice(0, 1).toUpperCase() +
               column.slice(1, column.length);
    }
    const switchTheme = ({ target }) => {
        if (target.innerText.toUpperCase() === "LIGHT") {
            setCurrentTheme(theme.light);
        } else if (target.innerText.toUpperCase() === "DARK") {
            setCurrentTheme(theme.dark);
        }
    }
    return <><div>
        <button style={currenttheme.button}
onClick={switchTheme}>Light</button>
        <button style={currenttheme.button}
onClick={switchTheme}>Dark</button>
    </div>
        <table style={currenttheme.table}>
            <THead theme={currenttheme}
columnRenderer={columnRenderer} columns={columns}></THead>
            <TBody theme={currenttheme}
customRenderer={customRenderer} columns={columns} rows={sampleData} 
            ></TBody>
        </table></>;
 
}
export default Table;