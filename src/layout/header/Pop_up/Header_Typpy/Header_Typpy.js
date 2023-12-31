import React from "react";
import Tippy from '@tippyjs/react/headless'; 
import ListDepart from "./Department/ListDepart";
import Icon from "../../../imagin/icon/Icon";
import ListGrocery from "./Grocery/ListGrocery";
import ListBeauty from "./Beauty/ListBeauty";

function HeaderTyppy ({Title, Returnlist}) {
    if(Title === 'Departments'){
        Returnlist = <ListDepart/>
    }
    else if (Title === 'Grocery'){
        Returnlist = <ListGrocery />
    }
    else if (Title === 'Beauty'){
        Returnlist = <ListBeauty />
    }
    
    return (
    <Tippy
        interactive
        render={attrs => (
            <div className="box" tabIndex='-1'{...attrs}>{Returnlist}</div>
        )}
        >
             <div> {Title} <img className="icon-header" src={Icon.arrowDown} alt="arrowDown" /></div>
    </Tippy>
    )};


export {HeaderTyppy} ;