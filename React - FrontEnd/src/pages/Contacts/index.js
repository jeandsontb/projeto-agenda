import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import useApi from '../../services/api';
import Modal from '../../components/ModalAddContacts';
import S from './styles';

const Insertions = () => {
    const api = useApi();
    const history = useHistory();

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [infoData, setInfoData] = useState(false);
    const [infoDataSearch, setInfoDataSearch] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buttonEddVisible, setButtonEditVisible] = useState(false);

    const [nameContact, setNameContact] = useState('');
    const [lastnameContact, setLastnameContact] = useState('');
    const [addressContact, setAddressContact] = useState('');
    const [phoneContact, setPhoneContact] = useState('');
    const [birthContact, setBirthContact] = useState('');
    const [emailContact, setEmailContact] = useState('');
    const [updateContact, setUpdateContact] = useState(0);

    useEffect(() => {
        let cancelPromise = true;

        if(cancelPromise) {
            let result =  localStorage.getItem('token');
            if(result === null) {
                history.push('/');
                return;                
            }

            getContacts();
        }

        return () => cancelPromise = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    //############################ FUNÇÃO PARA PEGAR TODOS OS CONTATOS
    const getContacts = async () => {

        let result = await api.getDataContacts();

        if(result.length > 0 ) {
            setInfoData(false);
            setData(result);
        } else {
            setInfoData(true)
        }
    }

    //############################ FUNÇÃO PARA PESQUISAR POR NOME DE CONTATO
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(name) {
            let result = await api.getSearchContacts(name);

            if(result.length > 0) {
                setInfoData(false);
                setData(result);
            } else {
                setInfoDataSearch(true);
            }
        } else {
            getContacts();
            setInfoDataSearch(false);
        }
    }

    //############################ FUNÇÃO PARA CRIAR REGISTRO DE CONTATO

    const handleSendContacts = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(
            nameContact && 
            lastnameContact && 
            addressContact &&
            phoneContact &&
            birthContact &&
            emailContact 
        ) {

            let result = await api.addContacts(
                nameContact,
                lastnameContact, 
                phoneContact,
                birthContact,
                addressContact,
                emailContact
            );

            setLoading(false);

            if(result.status !== 'error') {

                getContacts();
                setVisibleModal(false);
                setNameContact('');
                setLastnameContact('');
                setAddressContact('');
                setBirthContact('');
                setPhoneContact('');
                setEmailContact('');

            } else {
                alert(result.message)
            }

        } else {
            alert('Preencha todos os campos');
        }
    }

    //############################ FUNÇÃO PARA EDITAR UM CONTATO
    const handleUpdateContacts = async (id) => {
        
        setLoading(true);

        if( id &&
            nameContact && 
            lastnameContact && 
            addressContact &&
            phoneContact &&
            birthContact &&
            emailContact 
        ) {
            let result = await api.updateContacts(
                id,
                nameContact,
                lastnameContact, 
                phoneContact,
                birthContact,
                addressContact,
                emailContact
            );

            setLoading(false);

            if(result.status !== 'error') {

                getContacts();
                setVisibleModal(false);
                setButtonEditVisible(false);
                setNameContact('');
                setLastnameContact('');
                setAddressContact('');
                setBirthContact('');
                setPhoneContact('');
                setEmailContact('');

            } else {
                alert(result.message)
            }

        } else {
            alert('Preencha todos os campos');
        }
    } 


    //################# FUNÇÃO PARA PREPARAR O CONTATO PARA UPDATE
    const handleEditContact = (data) => {
        if(data.id !== 0) {
            setButtonEditVisible(true);
            setUpdateContact(data.id);
            setVisibleModal(true);
            setNameContact(data.name)
            setLastnameContact(data.lastname);
            setAddressContact(data.address)
            setBirthContact(data.birth);
            setEmailContact(data.email);
            setPhoneContact(data.phone);

        }  

    }

    //############################## FUNÇÃO PARA REMOVER UM CONTATO
    const handleRemoveContact = async (id) => {
        if( id > 0 ) {
            let result = await api.removeContacts(id);

            if(result.length === 0) {
                getContacts();
            } else {
                alert('Error, Tente novamente mais tarde!')
            }
        }
    }

    //############################ FUNÇÃO PARA DESLOGAR A APLICAÇÃO
    
    const handleLogoutClick = async () => {
        localStorage.removeItem('token');

        let result =  localStorage.getItem('token');
        if(result === null) {
            history.push('/');
        }
    }    

    const handleOpenModal = (e) => {
        e.preventDefault();

        setButtonEditVisible(false);
        setVisibleModal(true);
    }

    const handleCloseModal = (e) => {
        e.preventDefault();

        setVisibleModal(false);
        setLoading(false);
        setButtonEditVisible(false);
        setNameContact('');
        setLastnameContact('');
        setAddressContact('');
        setBirthContact('');
        setPhoneContact('');
        setEmailContact('');
    }

    return (
        <>
          <S.Container>
{/* ############################## MODAL PARA PUBLICAÇÃO DE CONTATO ########### */}
              <Modal 
                visible={visibleModal}
                setVisible={setVisibleModal}
            >
                <S.BoxAreaForm>
                    <form>
                        <label className="areaLabel">
                            <div className="area-title">Nome</div>
                            <div className="area-input">
                            <input 
                                type="text"  
                                value={nameContact}
                                onChange={e => setNameContact(e.target.value)}                                
                                required
                                />
                            </div>
                        </label>

                        <label className="areaLabel">
                            <div className="area-title">Sobrenome</div>
                            <div className="area-input">
                            <input 
                                type="text"  
                                value={lastnameContact}
                                onChange={e => setLastnameContact(e.target.value)}                                
                                required
                                />
                            </div>
                        </label>

                        <label className="areaLabel">
                            <div className="area-title">Endereço</div>
                            <div className="area-input">
                            <input 
                                type="text" 
                                value={addressContact}
                                onChange={e => setAddressContact(e.target.value)}                                
                                required
                                />
                            </div>
                        </label>

                        <label className="areaLabel">
                            <div className="area-title">Telefone</div>
                            <div className="area-input">
                            <input 
                                type="text" 
                                value={phoneContact}
                                onChange={e => setPhoneContact(e.target.value)}                                
                                required
                                />
                            </div>
                        </label>

                        <label className="areaLabel">
                            <div className="area-title">Data de Nascimento</div>
                            <div className="area-input">
                            <input 
                                type="text" 
                                value={birthContact}
                                onChange={e => setBirthContact(e.target.value)}                               
                                required
                                />
                            </div>
                        </label>

                        <label className="areaLabel">
                            <div className="area-title">E-mail</div>
                            <div className="area-input">
                            <input 
                                type="email" 
                                value={emailContact}
                                onChange={e => setEmailContact(e.target.value)}                                
                                required
                                />
                            </div>
                        </label>

                        <div className="box-buttons">
                            <button 
                                className="close-button" 
                                onClick={handleCloseModal}
                            >
                                fechar
                            </button>

                            {!buttonEddVisible &&
                                <button
                                    className="send-contacts"
                                    onClick={handleSendContacts}
                                >
                                    {!loading && 
                                    <> Salvar </>
                                    }

                                    {loading && 
                                    <> Salvando </>
                                    }
                                    
                                </button>
                            }

                            {buttonEddVisible &&
                                <div className="button-update"
                                    onClick={() => handleUpdateContacts(updateContact)}
                                >
                                    {!loading && 
                                    <p> Alterar </p>
                                    }

                                    {loading && 
                                    <p> Alterando </p>
                                    }
                                    
                                </div>
                            }
                        </div>
                    </form>
                </S.BoxAreaForm>
            </Modal>
{/* ############################## FIM MODAL PARA PUBLICAÇÃO DE CONTATO ########### */}

            <S.BoxLeft>
                <S.BoxViews>
                    <S.BoxTitle>
                        <S.InsertionTitle>SEUS CONTATOS</S.InsertionTitle>
                    </S.BoxTitle>
                        <S.LinkText onClick={() => {}} > Lista de Contatos</S.LinkText>
                </S.BoxViews>
                <S.Logout type="button" onClick={handleLogoutClick} >Sair</S.Logout>
            </S.BoxLeft>

            <S.BoxRight>
                <S.BoxContent>
                    <S.BoxAreaLeft>
                        <form onSubmit={handleSubmit}>
                            <label className="areaLabel">                            
                            <div className="area-input">
                            <input 
                                type="text" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Digite o primeiro nome"
                                
                                />
                                </div>
                                <button>Pesquisar</button>
                            </label>
                        </form>
                    </S.BoxAreaLeft>

                    <S.BoxAreaRight>
                        <S.ButtonAddContact onClick={handleOpenModal} >
                            ADICIONAR CONTATO
                        </S.ButtonAddContact>
                    </S.BoxAreaRight>
                </S.BoxContent>

                {infoData &&
                    <S.BoxInfoContacts>
                        <S.TextInfoContacts>
                            Você ainda não tem nenhum contato preenchido na plataforma. 
                            <br />Clique em adicionar para publicar seus contatos.
                        </S.TextInfoContacts>
                    </S.BoxInfoContacts>
                }

                {infoDataSearch &&
                    <S.BoxInfoContacts>
                        <S.TextInfoContacts>
                            Não existe nenhum contato para o nome {name}
                        </S.TextInfoContacts>
                    </S.BoxInfoContacts>
                }

                {data.length > 0 && data.map((item, index) => (
                    <S.BoxContacts key={index}>
                        <S.BoxContactName>
                            <S.TextName>
                                    {item.name}
                            </S.TextName>
                            <S.TextNameComplete>
                                {item.name} {item.lastname}
                            </S.TextNameComplete>
                            <br/>
                            <S.TextAddress>{item.address}</S.TextAddress>
                            <S.TextPhone>Contato: {item.phone}</S.TextPhone>
                            <S.TextBirth>Ano de Nascimento: {item.birth}</S.TextBirth>
                            <S.TextEmail>E-mail: {item.email}</S.TextEmail>
                        </S.BoxContactName>
                        
                        <S.BoxContactButtons>
                            <S.Buttons 
                                color="edit"
                                onClick={() => handleEditContact(item)}
                            >
                                Editar
                            </S.Buttons>
                            <S.Buttons
                                onClick={() => handleRemoveContact(item.id)} 
                                color="remove">Remover
                            </S.Buttons>
                        </S.BoxContactButtons>
                    </S.BoxContacts>
                ))}
                
            </S.BoxRight>                  
          </S.Container>  
        </>
    );
}

export default Insertions;