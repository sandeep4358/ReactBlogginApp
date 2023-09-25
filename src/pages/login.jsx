
import CustomNavbar from "../components/CustomNavBar";


const Login =({title="Welcome to our LoginPage",children})=>{
    return(
        <div className="container-fluid">
            <CustomNavbar/>
            {   children    }
            <h1>This is footer</h1>
        </div>
    );
};

export default Login;