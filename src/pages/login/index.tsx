import { MdPerson, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';

import { api } from '../../services/api'


import { Column, Container, SubtitleLogin, Title, TitleLogin, Wrapper  } from './styles';
import { IFormData } from './types';

const schema = yup.object({
    usuario: yup.string().min(3, 'No mínimo 3 caracteres.').required('Campo obrigatório.'),
    password: yup.string().min(8, 'No mínimo 8 caracteres.').required('Campo obrigatório.'),
  }).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?usuario=${formData.usuario}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('Usuário ou senha inválidos.')
            }
        } catch {
            alert('Houve um erro, tente novamente.')   
        }
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    Independência com sua <strong>grana,</strong> independete da sua <strong>idade.</strong>
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>O novo é constate, construa conosco.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="usuario" errorMessage={errors?.usuario?.message} control={control} placeholder="Usuário" leftIcon={<MdPerson />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Cadastrar" variant="secondary" type="submit"/>
                    </form>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }