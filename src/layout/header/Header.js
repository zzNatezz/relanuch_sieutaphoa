import React, { useContext } from 'react';
import Icon from '../imagin/icon/Icon';
import Picture from '../imagin/picture/Picture';
import "./Header.scss"
import { Header_Typpy } from './Pop_up/Header_Typpy/Header_Typpy';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext/AppContext';


function Header() {
    const {heart} = useContext(AppContext)
    return (
        <>
        <div className='header-background'>
            <div className='compo_l'>
            <div className='compo_l_f'>
            <Link className='link-home' to ='/' > <img src={Icon.logo} alt="" />
                    <div>Grocerymart</div></Link>
                </div>
                <div className='compo_l_s'>
                    <Header_Typpy
                    Title = "Departments"
                     />
                    <Header_Typpy
                    Title="Grocery" />
                    <Header_Typpy
                    Title= "Beauty"
                     /> 
                </div>
            </div>
            <div className='compo_r'>
                <div className='compo_r_f'>
                    <img className="icon-header" src={Icon.search} alt="search" />

                </div>
                <div className='compo_r_s'>
                    <div><img className="icon-header" src={Icon.heart} alt="heart" /> {heart}</div>
                    <div className='compo_buy'>
                        <img className="icon-header" src={Icon.buy} alt="buy" />    $ 63.0
                    </div>
                </div>
                <div className='compo_r_t'>
                <Link to='/profileUser'><img lassName="icon-header" src={Picture.avatar} alt="avatar" /></Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;