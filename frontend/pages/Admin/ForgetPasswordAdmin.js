import React from "react";
import styles from "../../styles/forgetpasswordAdmin.module.css";

function ForgetPasswordAdmin() {
  return (
    <div className="container common_bg my-5 loginPage">
      <h1 className="Common_Heading text-center">Forget Password</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className={styles.box_div}>
          <div className="card-body">
            <p className="login-box-msg">
              You forgot your password? Here you can easily retrieve a new
              password.
            </p>
            <form action="recover-password.html" method="post">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Request new password
                  </button>
                </div>
              </div>
            </form>
            <p className="mt-3 mb-1">
              <a href="/Admin/LoginAdmin">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordAdmin;
