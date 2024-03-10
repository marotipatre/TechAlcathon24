import { useAuth0 } from "@auth0/auth0-react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./Login.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <h1>Gateway to Your Financial Galaxy 🚀</h1>
      <AwesomeButton
        onPress={() => loginWithRedirect()}
        className="form-button"
        type="whatsapp"
      >
        Login
      </AwesomeButton>

      <div style={{ marginTop: "160px" }}>
      <h1>Multi-Account Magic: Your Wallet, Your Way</h1>
    </div>
    </div>
    
  );
};

export default Login;
