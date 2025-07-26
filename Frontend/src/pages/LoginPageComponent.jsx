import LeftSide from '../components/LeftSide';
import LoginForm from '../components/LoginForm';
import '../assets/login.css';


const LoginPage = () => {
    return <div className="main-login">
      <LeftSide />
      <LoginForm />
    </div>
}

export default LoginPage