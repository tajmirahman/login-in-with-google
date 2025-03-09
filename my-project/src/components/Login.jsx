import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";



const Login = () => {

    const provider= new GoogleAuthProvider();

    const handleLogin=()=>{

        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result);
        })
        .catch(error=>{
            console.log("Error", error)
        })

    }

    return (
        <div style={{ textAlign: 'center', marginTop: "50px" }}>

            <button onClick={handleLogin}>Login With Google</button>
        </div>
    );
};

export default Login;