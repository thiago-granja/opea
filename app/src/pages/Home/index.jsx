import './styles.scss';
import Header from '../../components/Header';
import { reactQueryHooks } from '../../services/reactquery';
/* import SuccessMessage from '../../components/SuccessMessage'
import ErrorMessage from '../components/ErrorMessage'; */
import { useEffect, useState } from 'react';
import Searchbar from '../../components/Searchbar';
import BusinessCard from '../../components/BusinessCard';
import Modal from '../../components/Modal';


export default function Home() {

    const [openSuccessMessage, setOpenSuccessMessage] = useState(false);
    const [successMessageContent, setSuccessMessageContent] = useState('');
    const [openErrorMessage, setOpenErrorMessage] = useState(false);
    const [errorMessageContent, setErrorMessageContent] = useState('');

    const clients = [{
        id:"2376479b-b018-498e-9e1a-8754aef52b7a",
        name:"Empresa 1",
        email:"empresa1@teste.com.br",
        cnpj:"64385518000173"
     },
    ]

/*     const transactionsQuery = reactQueryHooks.getTransactions();
    if (transactionsQuery.isLoading) return;
    if (transactionsQuery.isError) return;

    const dashboard = transactionsQuery.data.data; */

    return (
        <>
            <Header />
        <div className='home-container'>
            <div className='hero-section'>
                <Searchbar/>
                <BusinessCard addBtn={true}/>
                {clients.map(client => <BusinessCard client={client}/>)}
                
                
            </div>
            <Modal/>
{/*             {openSuccessMessage && <SuccessMessage/>}
            {openErrorMessage && <ErrorMessage/>} */}
        </div>
        </>
    );

}
