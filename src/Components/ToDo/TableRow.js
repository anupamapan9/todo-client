import React from 'react';
import toast from 'react-hot-toast';

const TableRow = ({ index, task, refetch }) => {
    const { taskName, taskDescription, _id, status } = task

    const handelDelete = id => {
        const isConfirm = window.confirm()
        if (isConfirm) {
            fetch(`http://localhost:5000/task/${id}`,
                {
                    method: "DELETE",
                }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Task has been deleted')
                        refetch()
                    }
                })
        }
    }

    const handelDone = id => {

        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Congratulation!! You have complete your work')
                    refetch()
                }
            })
    }

    if (status) {
        return (
            <tr>
                <th>{index + 1}</th>
                <td className='line-through'>{taskName}</td>
                <td className='line-through'>{taskDescription}</td>
                <td><button className='btn btn-success btn-xs' disabled >Done</button></td>
                <td><button className='btn btn-error btn-xs' onClick={() => handelDelete(_id)}>Delete</button></td>
            </tr>
        )
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{taskName}</td>
            <td>{taskDescription}</td>
            <td><button className='btn btn-success btn-xs' onClick={() => handelDone(_id)}>Done</button></td>
            <td><button className='btn btn-error btn-xs' onClick={() => handelDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default TableRow;