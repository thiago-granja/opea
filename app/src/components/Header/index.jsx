/* import { useState } from "react";
import { reactQueryHooks } from "../../services/reactquery"; */
import "./styles.scss";
import Opea from '/logo.svg'
import Avatar from '/profile-icon.svg'

export default function Header() {

    return (
        <header className="header-container">
            <img src={Opea}></img>

            <div className="avatar-username">
                <div className="username">Nome do Usuário</div>
                <img src={Avatar}/>
            </div>
        </header>
    );
}
