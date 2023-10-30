/* import { useState } from "react";
import { reactQueryHooks } from "../../services/reactquery"; */
import "./styles.scss";
import SearchIcon from '/search-icon.svg'

export default function Searchbar() {

    return (
        <div className="searchbar-container">
            <input type="text" />
            <img src={SearchIcon}/>
        </div>
    );
}
