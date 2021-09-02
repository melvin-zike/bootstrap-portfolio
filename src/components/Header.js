
const Header = () => {
    return(
<>
{/* <!-- ======= Mobile nav toggle button ======= --> */}
<button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

{/* <!-- ======= Header ======= --> */}
<header id="header">
  <div class="d-flex flex-column">

    <div class="profile">
      <img src="assets/img/profile-pic.jpg" alt="" class="img-fluid rounded-circle" />
      <h1 class="text-light"><a href="index.html">Melvin Nwaezike</a></h1>
      <div class="social-links mt-3 text-center">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>

    <nav class="nav-menu">
      <ul>
        <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li>
        <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        
        <li><a href="#services"><i class="bx bx-server"></i> Services</a></li>
        <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>

      </ul>
    </nav>
    {/* <!-- .nav-menu --> */}
    <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

  </div>
</header>
{/* header ends */}  

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>2021</span></strong>
      </div>
      <div class="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
        Assembled by <a href="https://github.com/melvin-zike?tab=repositories">Melvin Nwaezike</a>
      </div>
    </div>
  </footer>
  {/* <!-- End  Footer --> */}

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>


</>
    )
}

export default Header;





