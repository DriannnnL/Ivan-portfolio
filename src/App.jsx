import Home from "./Pages/Home"
import Blob from "./Components/Blob"
import AboutMe from "./Pages/AboutMe"
import DrawerAppBar from "./Components/Navbar"
import FullWidthTabs from "./Pages/Tabs"
import ContactForm from "./Pages/ContactForm"
import Pricing from "./Pages/Pricing"

function App() {

  return (
      <>
      <DrawerAppBar/>
        <Blob/>
        <Home/>
        <AboutMe/>
        <Pricing/>
        {/* <FullWidthTabs/> */}
        <ContactForm/>
      </>
  )
}

export default App
