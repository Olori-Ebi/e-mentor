import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("working");
      const { data } = await axios.post("/api/forgot-password", { email });
      console.log(data);
      setSuccess(true);
      toast("Check your email for the secret code");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Great! Now you can login with your new password");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <>
      <div id="login">
        <div className="containerDiv">
          <div className="card">
            <div className="inner-box" id="card">
              <div className="card-front">
                <h3 className="text-center margin"> Forgot Password</h3>

                <div className="">
                  <form onSubmit={success ? handleResetPassword : handleSubmit}>
                    <input
                      type="email"
                      className="input-box"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      required
                    />
                    {success && (
                      <>
                        <input
                          type="text"
                          className="input-box"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="Enter secret code"
                          required
                        />

                        <input
                          type="password"
                          className="input-box"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="New Password"
                          required
                        />
                      </>
                    )}

                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={loading || !email}
                    >
                      {loading ? <SyncOutlined spin /> : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
