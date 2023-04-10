import Router from "../router";
import Footer from "./footer";
import Header from "./header";

function Layout() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
  
}


export default Layout;