import React, { useState } from "react";
import lefticon from '../../assets/images/left-toggle-icon.svg';
import LeftMenu from './HeaderComponents/LeftMenu';
import HeaderLogo from "./HeaderComponents/HeaderLogo";

function Header() {
    const [show, setShow] = useState(false);
   const handleMenu =()=>{
    let currentshow=!show;
    if(currentshow){
 document.body.classList.add("scroll");
    }
    else{
         document.body.classList.remove("scroll");
    }
     
     setShow(currentshow);
   }

    return (
        <>
            <header className="site-header">
                <div className='header-inner flex-row just-space-between'>
                    <HeaderLogo />

                    <div className='right-toggle-btn no-border'>
                        <button onClick={handleMenu}> <img src={lefticon} alt="Toggle" /></button>
                    </div>
                </div>
            </header>

            {show && <LeftMenu closeHandler={handleMenu} />
             

            }


        </>
    )
}

export default Header;

