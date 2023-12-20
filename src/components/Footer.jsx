import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <aside>
        <img className="w-[100px]" src="/src/assets/images/TG-removebg-preview-cut.png" alt="Company logo" />


        <p>
          Tazan Group Ltd.
          <br />
          Providing reliable Agro Medicine since 1992.
        </p>
      </aside>
      <nav>
        <header className="footer-title">Business</header>
        <a className="link link-hover">Poultry Medicines</a>
        <a className="link link-hover">Agro Medicine </a>
        <a className="link link-hover">Hatchery</a>
      </nav>
      <nav>
        <header className="footer-title">Sister Company's</header>
        <a className="link link-hover">Tazan Agro Ltd.</a>
        <a className="link link-hover">Tazan Organic meet.</a>
        <a className="link link-hover">Career</a>
      </nav>
      <nav>
        <header className="footer-title">Legal / Contact Info</header>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
