import React , {useContext} from "react";
import './subComponent.scss'
import { Link } from "react-router-dom";
import { AppContext } from "../../../../../AppContext/AppContext";

function AsideProfileList({Tittle,array}) {
    const {activeClass, hanldeSingleClass} = useContext(AppContext)
    return (
        <div className="list-container">
        <h1>{Tittle}</h1>
            {array.map(
                (item,i)=>(
                <div 
                key={i}
                className="aside-listStructural">
                        <img
                        src={item.symbol} alt={'symbol' + i} />
                        <Link
                        to = {item.link}
                        onClick={(e)=>hanldeSingleClass(e)}
                        className = {activeClass === item.subtitle ? 'nav-link-active' : 'nav-link' }>
                            <div>{item.subtitle}</div>
                        </Link>
                </div>
            )
            )
            }
        </div>
    );
}

export default AsideProfileList;

