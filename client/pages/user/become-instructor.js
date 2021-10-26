import { useContext, useState } from "react";
import { Context } from "../../context";
import { Button } from "antd";
import axios from "axios";
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../components/routes/UserRoute";

const BecomeInstructor = () => {
  // state
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeInstructor = () => {
    // console.log("become instructor");
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.data;
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Stripe onboarding failed. Try again.");
        setLoading(false);
      });
  };

  return (
    <>
      <div id="body">
        <aside id="aside">
          <ul id="ul">
            <li className="menu">LEARN</li>
          </ul>
        </aside>
        <section id="main">
          <article id="article" className="full">
            <UserSwitchOutlined classNameName=" " />
            <h1>Become an Instructor</h1>
            <div></div>
          </article>
          <article className="half">
            <br />
            <h4>
              To become an Instructor you need to have the necessary
              requirements to open a Strip account{" "}
            </h4>
          </article>
          <article className="half active">
            <div>
              <h2 className="green">
                Setup payout to publish courses on Mathiano
              </h2>
              <h4 className="green">
                e-mentor partners with stripe to transfer earnings to your bank
                account
              </h4>
            </div>
          </article>
          <div className="clearfix"></div>
          <article className="full">
            <Button
              className="custom-btn btn-5"
              type=""
              icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
              size="large"
              onClick={becomeInstructor}
              disabled={
                (user && user.role && user.role.includes("Instructor")) ||
                loading
              }
            >
              {loading ? "Processing..." : "Payout Setup"}
            </Button>
            <h4>
              You will be redirected to stripe to complete the onboarding
              process.
            </h4>
          </article>
        </section>
      </div>
    </>
  );
};

export default BecomeInstructor;
