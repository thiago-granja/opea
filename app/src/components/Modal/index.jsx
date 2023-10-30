/* import { useState } from "react";
import { reactQueryHooks } from "../../services/reactquery"; */
import "./styles.scss";
import CloseIcon from '/close-icon.svg'
import TrashIcon from '/trash-icon.svg'

export default function Modal({ operation }) {

    return (
        <div className="modal-container">

            <div className="modal">
                <div className="modal-header">
                    {operation === 'register' ? 'Cadastrar Empresa' : 'Editar Cadastro'}
                    <img src={CloseIcon}/>
                    </div>
                <form>
                    <h2>Nome</h2>
                    <input type="text" />
                    <h2>CNPJ</h2>
                    <input type="text" />
                    <h2>E-mail</h2>
                    <input type="text" />

                    <div className="modal-actions">
                        <img src={TrashIcon}/>
                        <div>
                            <button className="cancel-btn">Cancelar</button>
                            <button className="ok-btn">{operation === 'register' ? 'Cadastrar' : 'Editar'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
