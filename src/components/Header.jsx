import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function Header() {
  return (
    <div>
      <nav>
        <div>
          <p>
            <FaArrowLeft />
          </p>
        </div>
      </nav>
      <header>
        <h2>
          Coronavirus disease (COVID-19) is an ongoing world pandermic and a
          contagious disease caused by a virus (SARS) severe acute respiratory
          syndrome,The first known case was identified in Wuhan, China, in
          December 2019. The disease spread worldwide.
        </h2>
      </header>
    </div>
  );
}

export default Header;
