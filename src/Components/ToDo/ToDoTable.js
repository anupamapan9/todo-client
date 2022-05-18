import React from 'react';
import TableRow from './TableRow';



const ToDoTable = ({ tasks }) => {

    //   const [ta]



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
                        {
                            tasks.map((task, index) => <TableRow index={index} task={task} key={task._id}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDoTable;