import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "./store/UserProgressContext";
import Button from "./UI/Button";
import Input from "./UI/Input";

export default function SignIn(){

    const userProgressCtx = useContext(UserProgressContext)

    function handleSignInClose(event){
        event.preventDefault();
        userProgressCtx.hideSignIn();
    }

    return (
        <Modal open={userProgressCtx.progress === 'sign_in'} onClose={userProgressCtx.progress === 'sign_in' ? handleSignInClose : null}>
            <form>
                <header className="form-header">
                    <h2>Sign In</h2>
                </header>
                <Input label="E-Mail Address" type="email" id="email" required />
                <Input label="Password" type="password" id="password" required />
                <div className="user-actions">
                    <Button textOnly onClick={handleSignInClose}>Close</Button>
                    <Button onClick={handleSignInClose}>Sign in</Button>
                </div>
            </form>
        </Modal>
    )
}