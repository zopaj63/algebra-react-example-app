import { Link } from "react-router-dom";

export default function SignInPage() {
    return (
        <div>
            <h1>Sign in</h1>
            <br />
            <p>... or go to <Link to="chat">chat</Link> :)</p>
        </div>
    );
}