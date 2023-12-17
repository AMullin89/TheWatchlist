import { useContext } from "react";
import Modal from "./UI/Modal";
import UserProgressContext from "./store/UserProgressContext";
import Button from "./UI/Button";
import Input from "./UI/Input";

export default function SignUp(){

    const userProgressCtx = useContext(UserProgressContext)

    function handleSignUpClose(event){
        event.preventDefault();
        userProgressCtx.hideSignUp()
    }

    return (
        <Modal open={userProgressCtx.progress === 'sign_up'} onClose={userProgressCtx.progress === 'sign_up' ? handleSignUpClose : null}>
            <form>
                <header className="form-header">
                    <h2>Sign Up</h2>
                </header>
            <Input label="E-Mail Address" type="email" id="email" required />
            <Input label="Password" type="password" id="password" required />
            <Input label="Confirm Password" type="password" id="confirm_password" required />
            <Input label="First Name" type="text" id="name" required/>
            <div className="user-actions">
                <Button textOnly onClick={handleSignUpClose}>Close</Button>
                <Button onClick={handleSignUpClose}>Sign Up</Button>
            </div>
            </form>
        </Modal>
    )
}