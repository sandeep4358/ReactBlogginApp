
import CustomNavbar from "../components/CustomNavBar";


const Base =({title="Welcom to our website",children})=>{
    return(
        <div className="container-fluid">
            <CustomNavbar/>
            {   children    }
            <h1>This is footer</h1>
        </div>
    );
};

export default Base;