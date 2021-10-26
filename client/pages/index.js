import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import Link from "next/link";

const Index = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);

  return (
    <>
           <div className="index-home">
            <div className="outter-container">
            <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
     {/* header  */}
    
     <section className="section ">

      <div className="content">

          <div>
          <div className="inner-container">
            <div className="inner-title wrapper">
            <h2 id="hero_header" className="h1" >Grow Your Skills Anywhere, Anytime</h2>
            </div>
            <div className="inner-text">
            <p className="hero_child ">Speed up you career path with our LMS system and modern architecture learning techniques </p>
            </div>
          </div>

          

          </div>

          <div  className="hero_div">
              
              <Link href= "/register">
       <button type="button" className="custom-btn btn-5">
       Get Started
       </button>
        </Link>
        </div>
      </div>
      <div className="imgBox hero_image">
          <img src="https://www.pngarts.com/files/4/Athlete-PNG-Download-Image.png" />
      </div>
           
    </section>
    {/* end og HEADER  */}
       {/* showcase1  */}

      <section className="showcase">
        <div className="showcase-container case1">
        <div className="inner-container">
            <div className="inner-title">
              <h1>Learn In-Demand Tech Skills</h1>
            </div>
            <div className="inner-text">
              <p>
Browse through our countless courses , Enroll and study at your own pace 
              </p>
              <Link href= "/register">
       <button type="button" className="custom-btn btn-5">
       Explore
       </button>
        </Link>
            </div>
            
          </div>
          <div className="showcase-img">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5622AQG9Yycw7sjj0A/feedshare-shrink_2048_1536/0/1629818469601?e=1632960000&v=beta&t=1PfSgvqPTVzQXz0yzL1UROi7JZeg4n7-TB7nFR5CvSE"
              alt=""
            />
          </div>
        </div>
      </section>
    {/* showcase */}
      <section className="showcase">
        <div className="showcase-container case2">
          <div className="showcase-img">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5622AQEZevTppDK8ZA/feedshare-shrink_800/0/1629818469938?e=1632960000&v=beta&t=wB3RZd4fPmW2nvgGRa643c5ne8KfbYV8KwZz5m1qheY"
              alt=""
            />
          
          </div>
          <div className="inner-container">
            <div className="inner-title">
              <h1 >Become an instructor</h1>
            </div>
            <div className="inner-text">
              <p>
              Get your course across to million of users and Increase your earnings
              </p>
              <Link href= "/register">
       <button type="button" className="custom-btn btn-5">
       Sign up
       </button>
        </Link>
            </div>
           
          </div>
        </div>
      </section>
      {/* Show Courses  */}
      <h1 className="jumbotron text-center bg-primary square">
        Online Education Marketplace
      </h1>
      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    {/* FOOTER Section  */}
    
      </div>    

      </div>
      <div className="">
      <footer className="footer-section ">
        
        <div className="footer-content pt-5 pb-5" >
            <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                        <div className="footer-logo">
                            <a href="index.html"><img src="https://media-exp1.licdn.com/dms/image/C5622AQGf6DEmt-FffQ/feedshare-shrink_800/0/1629886115554?e=1632960000&v=beta&t=tWCHOil1kSBjSwQNoio3PWfudyzxRrkENGkX4hHk4Ms" className="img-fluid" alt="logo" /></a>
                        </div>
                        <div className="footer-text">
                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                            elit,Lorem ipsum dolor sit amet.</p>
                        </div>

                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Expert Team</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Latest News</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Subscribe</h3>
                        </div>
                        <div className="footer-text mb-25">
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        </div>
                        <div className="subscribe-form">
                            <form action="#">
                                <input type="text" id="footer__input" className="input-box" placeholder="Email Address" />
                                <button className="custom-btn btn-5">subscribe<i></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
