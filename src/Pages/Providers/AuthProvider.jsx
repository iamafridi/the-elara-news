import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


// creating context
export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

// Creating User
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn =(email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


const logOut = ()=>{
    return signOut(auth);
}

useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('User In the Auth State Change',currentUser);
        setUser(currentUser);
    });
    return ()=>{
        unSubscribe();
    }
},[])










    const authInfo = { 
        user,
        createUser,
        signIn,
        logOut
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;