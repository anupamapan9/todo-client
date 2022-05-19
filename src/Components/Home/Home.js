import React from 'react';
import { Link } from 'react-router-dom';
import WaterWave from 'react-water-wave';
import image from '../../img/bg-landing.png'
const Home = () => {
    return (

        <div style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            background: `url(${image}) center center`
        }} className='min-h-full flex justify-center items-center'>
            <div>
                <h3 className='text-primary font-extrabold text-2xl'>Welcome to </h3>
                <h1 className='text-primary font-extrabold text-7xl'>TODO App!!!</h1>
                <p className='text-black mt-3 text-xl'>The benefits of using a daily to-do list range from higher productivity to better mental health. </p>
                <Link className='inline-block my-5 px-5 py-2 bg-secondary' to='/todo' >Add Task</Link>
            </div>
        </div>
    );
}
export default Home;