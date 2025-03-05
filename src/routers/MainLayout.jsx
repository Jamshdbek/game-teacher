import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import steg from "../assets/steg.png";
import { MdScreenshotMonitor } from "react-icons/md";
// LoanPage component (Progress bar and loading animation)
const LoanPage = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0); // State for progress value
  const maxProgress = 100;
  const navigate = useNavigate()
  useEffect(() => {
    // Increment progress periodically until it reaches max
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= maxProgress) {
          clearInterval(timer); // Stop the interval
          return maxProgress;
        }
        return prev + 5; // Increment by 5
      });
    }, 100); // Update every 100ms

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    
    // If user is trying to access /dashboard without being logged in, redirect to /
    if (!user && location.pathname === "/dashboard") {
      navigate("/");
    }
  }, [location, navigate]);
  
  return (
    <div className="w-full h-screen bg-[#1e0a3d] flex justify-center items-center flex-col fixed">
      <div>
        <img src={steg} width={"200px"} alt="Steg" />
        <div
          style={{
            width: "200px",
            height: "10px",
            backgroundColor: "#333",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#ffffff",
              transition: "width 0.1s ease",
            }}
          />
        </div>
      </div>
      {/* <p className="text-white mt-4">Platforma yuklanmoqda...</p> */}
    </div>
  );
};

// MainLayout component (Header and conditional rendering based on loading state)
function MainLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // Simulate loading time

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);
  return (
    <>
      <header className="w-full  min-h-10 bg-[#1e0a3d] p-2 pl-4 fixed h-[50px]">
        <Link to={"/"}>
          🤖 <span className="text-white font-mono font-light">Robbiy</span>
        </Link>
      </header>
      {/* {window.innerWidth < 1080 ? (
        <div className=" w-full text-center flex pt-6 pl-2">
          <div>
            <MdScreenshotMonitor size={500} />
            Bu Platforma kechik ekranlar uchun moslatshrilmagan...
          </div>
        </div>
      ) : ( */}
        <main className=" pt-[49px]">{loading ? <LoanPage /> : <Outlet />} </main>
      {/* )} */}
    </>
  );
}

export default MainLayout;
