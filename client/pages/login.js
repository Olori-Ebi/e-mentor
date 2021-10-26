import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/user");
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <div id="login">
      <div className="containerDiv">
        <div className="card">
          <div className="inner-box" id="card">
            <div className="card-front">
              <h2 className="">Login</h2>

              <div className="">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="input-box"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                  />

                  <input
                    type="password"
                    className="input-box"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />

                  <button
                    type="submit"
                    className=" switch submit-btn"
                    disabled={!email || !password || loading}
                  >
                    {loading ? <SyncOutlined /> : "Submit"}
                  </button>
                  <input type="checkbox" />
                  <span>Remember Me</span>
                  <p className=" text-center txt">
                    Not yet registered?
                    <Link href="/register">
                      <a>
                        <button type="button" className="switch">
                          Register
                        </button>
                      </a>
                    </Link>
                  </p>
                </form>
                <p className="text-center">
                  <Link href="/forgot-password">
                    <a className="text-danger">Forgot password</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
