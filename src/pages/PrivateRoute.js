import MadeGame from "./MadeGame";
import LogInScreen from "./LogIn";

export default function PrivateRoute() {
    const haveToken = !!localStorage.getItem("token");
    return haveToken ? <MadeGame /> : <LogInScreen />;
}
