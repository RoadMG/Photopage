import React, { useCallback } from 'react';
import Navbar from '../Navbar/Navbar';
import './project.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Project() {
    const [mobile, setMobile] = useState(false);
    const SetCont = () => {
        setMobile(!mobile)
    }


    const [promobile, setPromobile] = useState(true);
    const ProjectMargin = useCallback(() => {
        setPromobile(!promobile)
    }, [promobile])
    return (
            <div className='project'>

                 <Navbar ContChange={SetCont} ProjChange={ProjectMargin} />

                <div className={mobile ? `p-cont p-tmargin ${promobile ? 'top' : ''}` : 'p-cont close'}>
                    <Link to='/palace' className='p-imglink'>
                        <img className='p-img' src={'/image/Palace/Palace6.jpg'} alt='...' />
                        <p>Korean Palace</p>
                    </Link>
                    <Link to='/coldtree' className='p-imglink'>
                        <img className='p-img' src={'/image/City/City2.jpeg'} alt='...'/>
                        <p>Memories</p>
                    </Link>
                    <Link to='/archtr' className='p-imglink'>
                        <img className='p-img' src={'/image/Architecture/Architecture6.jpg'} alt='...'/>
                        <p>Architecture</p>
                    </Link>
                    <Link to='/sea' className='p-imglink'>
                        <img className='p-img' src={'/image/Sea/Sea2.jpg'} alt='...'/>
                        <p>See the Sea</p>
                    </Link>
                </div>
            </div>
    )
}

export default Project;