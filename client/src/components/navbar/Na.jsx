import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Na.css';
import Dropdown from './Dropdown';

function Na() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/applications'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Applications <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/ros'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              ROS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/post'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              News
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/contactus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          
        </ul>
       
      </nav>
    </>
  );
}

export default Na;