import React, { useState } from "react";
import styles from "../../styles/loginAdmin.module.css";
import { useRouter } from "next/router";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const emailinput = (e) => {
    setEmail(e.target.value);
  };
  const passwordinpute = (e) => {
    setPassword(e.target.value);
  };

  const signInFunction = async () => {
    let bodyData = {
      email: email,
      password: password,
      deviceToken: "fgdfg",
    };
    try {
      const response = await fetch("http://localhost:4585/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "<calculated when request is sent>",
        },
        body: JSON.stringify(bodyData),
      });
      let responseJSon = response.json();
      if (response.status === 200) {
        alert("Login successful!");
        router.push("/Admin/Product");
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.log("error :::", error);
    }
  };
  return (
    <div className="container common_bg my-5 loginPage">
      <h1 className="Common_Heading text-center">Admin Login</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="login-logo"></div>

        <div className={styles.box_div}>
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={emailinput}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={passwordinpute}
                />
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      // id="remember"
                      style={{
                        marginRight: 10,
                        width: 17,
                        height: 17,
                      }}
                    />
                    <label for="remember" style={{ alignSelf: "center" }}>
                      Remember Me
                    </label>
                  </div>
                </div>

                <div className="col-4">
                  <button
                    // type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => signInFunction()}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>

            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <div className="col-12">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Sign in using
                  Facebook
                </a>
              </div>
              <div className="col-12" style={{ marginTop: 10 }}>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i> Sign in using
                  Google+
                </a>
              </div>
            </div>

            <p className="mb-1">
              <a href="/Admin/ForgetPasswordAdmin">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default LoginAdmin;
