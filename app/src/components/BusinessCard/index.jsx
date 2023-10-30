import "./styles.scss";
import ClientIcon from '/client-icon.svg'

export default function ClientCard( { addBtn, client } ) {

    return (
        <>
        {
        addBtn ?
            <div className='client-card add' key={'client-addbtn'}>
                <img src={ClientIcon}/>
                <div>Adicionar Empresa</div>
            </div> 
        :
            <div className='client-card' key={client.id}>
                <img src={ClientIcon}/>
                <div className="company-info">
                    <div>{client.name}</div>
                    <div className="company-cnpj-email">CNPJ: {client.cnpj} <div className="company-email">- Email: {client.email}</div></div>
                </div>
            </div> 
        }
        
        
        </>
    );
}
