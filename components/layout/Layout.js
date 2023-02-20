import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

function Layout({ children }) {
  // const [opacity, setOpacity] = useState(0);
  // // const [pos,setpos] = useState("absolute")
  // useEffect(() => {
  //   // Define the function that will update the opacity on scroll
  //   function handleScroll() {
  //     const newOpacity =  window.scrollY / window.innerHeight;
  //     setOpacity(newOpacity);
  //   }

  //   // Add the event listener for the scroll event
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
