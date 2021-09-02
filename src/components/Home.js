import Header from "./Header"
import Skills from "./Skills"
import Resume from "./Resume"
import Testimonial from "./Testimonial"
import Portfolio from "./Portfolio"
import Contact from "./Contact"


const Home = () => {
    return(
<>
<Header />
<div id="main">
<Portfolio />
<Skills />
<Resume />
<Testimonial />
<Contact />
</div>


</>
    )
}

export default Home;