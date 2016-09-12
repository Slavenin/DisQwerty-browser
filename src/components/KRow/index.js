import React, {Component} from 'react'

export default class KRow extends Component {

    render() {
        let {
            rows,
            activeRow,
            activeCell,
            resetC,
            resetR
        } = this.props;

        if(activeRow === rows.length)
        {
            resetR();
            activeRow = 0;
        }

        if(activeCell === rows[activeRow].length)
        {
            resetC();
            activeCell = 0;
        }

        return (
            <tbody>
            {rows.map((set, i) =>
                <tr className={activeRow == i ? 'selected' : null} key={i}>
                    {set.split('').map((l, j) =>
                        <td className={activeCell == j ? 'selected' : null} key={j}>{l}</td>)
                    }
                </tr>
            )}
            </tbody>
        )
    }
}