import React from 'react';
import ToDoTable from './ToDoTable';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init'
import { useQuery } from 'react-query';
const ToDo = () => {
    const [user, loading, error] = useAuthState(auth)
    const email = user?.email;

    const { data: tasks, isLoading, refetch } = useQuery('tasks', () => fetch(` http://localhost:5000/task/${email}`)
        .then(res => res.json()))
    if (isLoading) {
        return <h1>Loading</h1>
    }




    const addTaskToDb = e => {
        e.preventDefault();
        const taskName = e.target.taskName.value;
        const taskDescription = e.target.taskDescription.value;

        const task = {
            taskName,
            taskDescription,
            email
        }
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Added in the table')
                    refetch()
                }
            })
        e.target.reset()
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

            <ToDoTable tasks={tasks} refetch={refetch} />
        </div>
    );
};

export default ToDo;