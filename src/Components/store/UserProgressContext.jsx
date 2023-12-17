import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showSignUp: () => {},
    hideSignUp: () => {},
    showSignIn: () => {},
    hideSignIn: () => {},
    signIn: () => {},
    signOut: () => {}
});

export function UserProgressContextProvider({children}) {
    const [userProgress, setUserProgress] = useState('');

    function showSignUp(){
        setUserProgress('sign_up');
    }

    function hideSignUp(){
        setUserProgress('');
    }

    function showSignIn(){
        setUserProgress('sign_in');
    }

    function hideSignIn(){
        setUserProgress('');
    }

    function signIn(){
        setUserProgress('signed_in')
    }

    function signOut(){
        setUserProgress('')
    }

    const userProgressCtx = {
        progress: userProgress,
        showSignUp,
        hideSignUp,
        showSignIn,
        hideSignIn,
        signIn,
        signOut
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext;