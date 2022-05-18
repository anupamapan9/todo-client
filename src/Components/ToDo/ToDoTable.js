import React from 'react';

const ToDoTable = () => {
    return (
        <div className='md:px-10 lg:px-20 mt-10'>
            <h2 className='text-center font-extrabold text-4xl m-4 text-accent'>Here is your Tasks</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td><button className='btn btn-success btn-xs'>Done</button></td>
                            <td><button className='btn btn-error btn-xs'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDoTable;