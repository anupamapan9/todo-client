import React from 'react';
import toast from 'react-hot-toast';

const TableRow = ({ index, task, refetch }) => {
    const { taskName, taskDescription, _id } = task

    const handelDelete = id => {
        const isConfirm = window.confirm()
        if (isConfirm) {
            fetch(`http://localhost:5000/task/${id}`,
                {
                    method: "DELETE",
                }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Task has been deleted')
                        refetch()
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{taskName}</td>
            <td>{taskDescription}</td>
            <td><button className='btn btn-success btn-xs' onClick={() => handelDelete(_id)}>Done</button></td>
            <td><button className='btn btn-error btn-xs'>Delete</button></td>
        </tr>
    );
};

export default TableRow;