import React from 'react';

const ToDo = () => {
    const addTaskToDb = event => {
        event.preventDefault()
        const taskName = event.target.taskName.value;
        const taskDescription = event.target.taskDescription.value;

    }
    return (
        <div>
            <div className='flex justify-center'>
                <div className='shadow-md p-5 rounded-lg'>
                    <form onSubmit={addTaskToDb}>
                        <h2 className='text-center font-semibold text-2xl py-4'>You can add your task here</h2>
                        <div className='form-control mt-5'>
                            <input type="text" className='input input-bordered' required placeholder='Write your task name' name='taskName' />
                        </div>
                        <div className='form-control mt-5'>
                            <textarea className='input input-bordered' required placeholder='Write Your Task Descriptions' name="taskDescription" id="" cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" className="btn btn-primary mt-5 w-full" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToDo;