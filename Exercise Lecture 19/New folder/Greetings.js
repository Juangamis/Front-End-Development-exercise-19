// Welcome
function UserGreeting(props) {
    return <h1> Welcome Back !!!</h1>
}

// sihn in
function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>
}

// chose greetings
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}