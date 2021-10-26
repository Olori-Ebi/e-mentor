import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import user from "../../server/models/user";

const Register = () => {
  const [name, setName] = useState("Ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });

      // console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
      window.localStorage.setItem("user", JSON.stringify(data));
      setName("");
      setEmail("");
      setPassword("");
      router.push("/login");
      setLoading(false);
    } catch (err) {
      console.log(err.response.data);
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
              <h1 className="text-center">Register</h1>

              <div className="">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="input-box"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                  />

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
                    className="submit-btn"
                    disabled={!name || !email || !password || loading}
                  >
                    {loading ? <SyncOutlined /> : "Submit"}
                  </button>
                  <p className=" text-center txt">
                    Already have an account?
                    <Link href="/login">
                      <a>
                        <button type="button" className="switch">
                          Login
                        </button>
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
