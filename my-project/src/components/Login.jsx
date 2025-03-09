import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";



const Login = () => {

    const provider= new GoogleAuthProvider();

    const [user, setUser]=useState(null);

    const handleLogin=()=>{

        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            console.log("Error", error);
            setUser(null);
        })

    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('sign out done');
            setUser(null);
        })
        .catch((error)=>{
            console.log('Error',error);
        })
    }



    return (
        <div style={{ textAlign: 'center', marginTop: "50px" }}>

            <button onClick={handleLogin}>Login With Google</button>
            <button onClick={handleSignOut}>Sign Out</button>

            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;