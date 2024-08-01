const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <a href="/" class="navbar-brand mx-3">
          BlogWEB
        </a>
        <ul class="navbar-nav navbar-items-right">
          <li class="navbar-item">
            <a href="/" class="nav-link">
              Home
            </a>
          </li>
          <li class="navbar-item">
            <a href="/categories" class="nav-link">
              Categories
            </a>
          </li>
          <li class="navbar-item">
            <a href="/about" class="nav-link">
              About
            </a>
          </li>
          <li class="navbar-item">
            <a href="/contact" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;