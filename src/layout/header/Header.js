import React from 'react';
import Icon from '../imagin/icon/Icon';
import Picture from '../imagin/picture/Picture';
import "./Header.scss"
import { HeaderInformation } from './Pop_up/Department/StoreInformation';

const allDepar = HeaderInformation[0]['All Departments']
console.log(allDepar);


function Header() {
    return (
        <div className='header-background'>
            <div className='compo_l'>
                <div className='compo_l_f'>
                    <img src={Icon.logo} alt="" />
                    <div>Grocerymart</div>
                </div>
                <div className='compo_l_s'>
                    <div>Departments  <img className="icon-header" src={Icon.arrowDown} alt="arrowDown" />  </div>
                    <div>Grocery <img className="icon-header" src={Icon.arrowDown} alt="arrowDown" /></div>
                    <div>Beauty <img className="icon-header" src={Icon.arrowDown} alt="arrowDown" /></div>
                </div>
            </div>
            <div className='compo_r'>
                <div className='compo_r_f'>
                    <img className="icon-header" src={Icon.search} alt="search" />
                    
                </div>
                <div className='compo_r_s'>
                    <div><img className="icon-header" src={Icon.heart} alt="heart" /> 03 </div>
                    <div className='compo_buy'>
                        <img className="icon-header" src={Icon.buy} alt="buy" />    $ 63.0
                    </div>
                </div>
                <div className='compo_r_t'>
                    <img lassName="icon-header" src={Picture.avatar} alt="avatar" />
                </div>
            </div>
        </div>
    );
}

export default Header;