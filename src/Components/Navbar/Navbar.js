import './navbar.css'
import React, {useState, useEffect} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink, useLocation} from 'react-router-dom'


const Navbar = ({MenuChange, ContChange, ProjChange}) => {

  const [close, setClose] = useState(true);
  const [click, setClick] = useState(true);

  const ClickClose = () => {
    ProjChange();
    setClose(!close);
  }

  const domain = useLocation();

  useEffect(()=>{

    if (domain.pathname === '/project') {
      ContChange();
    }
    else if (domain.pathname === '/') {
    }
    else {
      MenuChange()
    }
  },[click])

  return (
    <div>
      <nav className='navi'>

        <Link to='/' className='n-main'>Mingyu Kil</Link>

        <div className={click ? 'n-cont' : 'n-cont-close'}>
          <NavLink to='/portrait' className='n-sub' activeclassname='active' >Portrait</NavLink>
          <NavLink to='/project' className='n-sub' activeclassname='active' onClick={ClickClose}>Project</NavLink>
          <ul className={`n-proj ${close ? '' : 'close'}`}>
            <li>
              <NavLink to='/palace' className='p-sub' activeclassname='active'>Korean Palace</NavLink>
            </li>
            <li>
              <NavLink to='/coldtree' className='p-sub' activeclassname='active'>Memories</NavLink>
            </li>
            <li>
              <NavLink to='/archtr' className='p-sub' activeclassname='active'>Architecture</NavLink>
            </li>
            <li>
              <NavLink to='/sea' className='p-sub' activeclassname='active'>See the Sea</NavLink>
            </li>
          </ul>

          <Link to='/about' className='n-about'>About</Link>
        </div>

        <MenuIcon sx={{ fontSize: 45 }} color='#565453' className='n-menuicon'
          onClick={()=>{setClick(!click)}} />


      </nav>
    </div>
   
  );
}

export default Navbar;
