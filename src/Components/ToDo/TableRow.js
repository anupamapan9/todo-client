import React from 'react';

const TableRow = ({ index, task }) => {
    const { taskName, taskDescription } = task
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{taskName}</td>
            <td>{taskDescription}</td>
            <td><button className='btn btn-success btn-xs'>Done</button></td>
            <td><button className='btn btn-error btn-xs'>Delete</button></td>
        </tr>
    );
};

export default TableRow;