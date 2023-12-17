import { useContext } from "react";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'


export default function Header(){

    const userProgressCtx = useContext(UserProgressContext)

    return (
        <header id="main-header">
            <div>
                <h1>The Watchlist</h1>
            </div>
            <div id="nav-items">
                <div id="search-bar">
                <input type="text" placeholder="Search" />
                <Button><FontAwesomeIcon icon={faArrowRight} style={{color: "#f5f5f5",}} /></Button>
                </div>
                <ul>
                    <li>Browse</li>
                    <li onClick={userProgressCtx.showSignIn}>Sign In</li>
                    <li onClick={userProgressCtx.showSignUp}>Sign Up</li>
                </ul>
            </div>
        </header>
    )
}