
import React, {useState} from 'react'
import Login from '../components/sing/login/Login'
import Register from "../components/sing/register/Register";
// import Login from '../components/test/Login';
// import Register from '../components/test/Register';
import {ContainerLogin, BoxLogin, ContainerSign} from "../style/LoginPageStyle";
import {DivImage, LogoImage} from "../components/common/Images";





const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <ContainerLogin>
      <BoxLogin>
      <ContainerSign>
      {isLogin ? <Login setIsLogin={setIsLogin}/> 
      : <Register setIsLogin={setIsLogin}/>}
      </ContainerSign>
      </BoxLogin>
     <DivImage isLogin={isLogin}>
      <LogoImage/>
     </DivImage>
    </ContainerLogin>
  )
}

export default LoginPage