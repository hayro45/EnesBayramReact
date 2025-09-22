import React,{useState} from 'react'
import '../css/Header.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { Badge } from '@mui/material';

function Header() {

    const[theme, setTheme] = useState(false);
    const changeTheme = () => {
        const root = document.querySelector(':root');
        const searchInput = document.querySelector('.search-input');

        if(theme){
            root.style.backgroundColor = '#f1f1f1';
            root.style.color = '#333';

            searchInput.style.backgroundColor = '#f1f1f1';
            searchInput.style.color = '#333';
            searchInput.style.border = 'none';
            searchInput.style.borderBottom = '2px solid #333';
        }else{
            root.style.backgroundColor = '#333';
            root.style.color = '#f1f1f1';

            searchInput.style.backgroundColor = '#333';
            searchInput.style.color = '#f1f1f1';
            searchInput.style.border = 'none';
            searchInput.style.borderBottom = '2px solid #f1f1f1';
        }
        setTheme(!theme);
    }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0'}}>
      <div className='flex-row'>
        <img src='../src/images/logo.png' alt='Logo' className='logo' onClick={() => window.location.href = '/'} />
        <p className='logo-text'>E-Homes</p>
      </div>
      <div className='flex-row'>
        <input type='text' placeholder='Aramaya başlayın...' name='search' className='search-input' />
        <div>
            <Badge badgeContent={4} color="error">
              <FaCartShopping className='icon'/>
            </Badge>
            
            {theme ? <CiLight onClick={changeTheme} className='icon'/> : <FaMoon onClick={changeTheme} className='icon'/>}
        </div>
      </div>

    </div>
  )
}

export default Header
