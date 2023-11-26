import React from 'react';
import Icon from '../imagin/icon/Icon';
import Picture from '../imagin/picture/Picture';
import "./Header.scss"


function Header() {
    return (
        <div className='header-background'>
        <div>
            <div>
                <img src={Icon.logo} alt="" />
                <div>grocerymart</div>
            </div>
            <div>
                <div>Departments <img src={Icon.arrowDown} alt="arrowDown" />  </div>
                <div>Grocery <img src={Icon.arrowDown} alt="arrowDown" /></div>
                <div>Beauty <img src={Icon.arrowDown} alt="arrowDown" /></div>
            </div>
        </div>
        <div>
            <div><img src={Icon.search} alt="search" /></div>
            <div>
                <img src={Icon.heart} alt="heart" />
                <img src={Icon.buy} alt="buy" />
            </div>
            <div><img src={Picture.avatar} alt="avatar" /></div>
        </div>
        </div>
    );
}

export default Header;