import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import S from './styles';

import useApi from '../../services/api';

const App = () => {

    const api = useApi();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {       

        const checkLogin = async () => {

            const result = api.getToken();
            
            if(result !== null) {
                history.push('/contacts');
            } else {
                history.push('/');
            }
        }

        checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    


    const handleLoginButton = async () => {
        setLoading(true);

        if(email && password) {
            const result = await api.login(email, password);

            setLoading(false); 

            if(result.status !== 'error') {
                localStorage.setItem('token', result.token);
                history.push('/contacts');
            } else {
                alert(result.message);
            }
        } else {
            alert("digite os dados para acessar");
        }
    }

    

    return(
        <S.Container>
            
            <S.Box>
                <S.Login>
                    <S.TextLogin>LOGIN</S.TextLogin>
                    <S.Label>E-mail</S.Label>
                    <S.Input type="text" value={email} disabled={loading} onChange={e => setEmail(e.target.value)} placeholder="Digite o e-mail" />
                    <S.Label>Senha</S.Label>
                    <S.Input type="password" value={password} disabled={loading} onChange={e => setPassword(e.target.value)} placeholder="Digite a senha" />
                    <S.BoxButton>
                        <S.Button type='button' onClick={handleLoginButton} disabled={loading} >
                            {loading ? 'ENTRANDO' : 'ENTRAR'}
                        </S.Button>
                    </S.BoxButton>
                </S.Login>

                <S.Information>
                    <S.Text>AGENDA DE CONTATOS</S.Text>
                    <S.TextInformation>Apenas a pessoa autorizada poderá acessar essa 
                        agenda de contatos.  
                    </S.TextInformation>
                </S.Information>
            </S.Box>
        </S.Container>

    );
}

export default App;