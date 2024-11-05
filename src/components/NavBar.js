import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
{/* display an <a> tag for each link here */}

<a id="1"href="#home">home</a>
<a id="2" href="#project">projects</a>
<a id="3" href="#about">about</a>

</nav>;
}

export default NavBar;
