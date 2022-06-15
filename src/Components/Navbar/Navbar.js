import './navbar.css'
import React, {useState, useEffect, useCallback} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = ({MenuChange, ContChange, ProjChange}) => {
  const [close, setClose] = useState(true);
  const [click, setClick] = useState(true);

  const ClickClose = useCallback(() =>{
    ProjChange();
    setClose(!close);
  },[close])

  const domain = useLocation();

  const MenuClick = useCallback(() => {
    setClick(!click);
  },[click])

  useEffect(()=>{

    if (domain.pathname === '/project') {
      ContChange();
    }
    else if (domain.pathname === '/') {
    }
    else {
      MenuChange();
    }
  },[click])

  return (
    <div>
      <nav className='navi'>

        <Link to='/' className='n-main'>Mingyu Kil</Link>

        <div className={click ? 'n-cont' : 'n-cont-close'}>
          <Link to='/portrait' className='n-sub' >Portrait</Link>
          <Link to='/project' className='n-sub' onClick={ClickClose}>Project</Link>
          <ul className={`n-proj ${close ? '' : 'close'}`}>
            <li>
              <Link to='/palace' className='p-sub'>Korean Palace</Link>
            </li>
            <li>
              <Link to='/coldtree' className='p-sub'>Memories</Link>
            </li>
            <li>
              <Link to='/archtr' className='p-sub'>Architecture</Link>
            </li>
            <li>
              <Link to='/sea' className='p-sub' >See the Sea</Link>
            </li>
          </ul>

          <Link to='/about' className='n-about'>About</Link>
        </div>

        <MenuIcon sx={{ fontSize: 30 }} color='#565453' className='n-menuicon'
          onClick={MenuClick} />


      </nav>
    </div>
   
  );
}

export default Navbar;
