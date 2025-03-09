import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";



const Login = () => {

    const providerGoogle = new GoogleAuthProvider();
    const providerGithub= new GithubAuthProvider();

    const [user, setUser] = useState(null);

    const handleLogin = () => {

        signInWithPopup(auth, providerGoogle)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log("Error", error);
                setUser(null);
            })

    }

    const handleGithub=()=>{
        signInWithPopup(auth,providerGithub)
        .then((result)=>{
            console.log(result)
            setUser(result.user)
        })
        .catch(error=>{
            console.log('Error',error);
            setUser(null);
        })

    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out done');
                setUser(null);
            })
            .catch((error) => {
                console.log('Error', error);
            })
    }



    return (
        <div style={{ textAlign: 'center', marginTop: "50px" }}>

            {
                user ? <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <>
                    <button onClick={handleLogin}>Login With Google</button>
                    <button onClick={handleGithub}>Login With Github</button>
                    </>
            }


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