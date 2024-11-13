import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex gap-16 justify-center mb-8">
      <ul className="flex gap-3">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Project</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        <li>
          <a href="">Technologies</a>
        </li>
      </ul>
      <p>2024 OSSAMA AOUAM , All rights reserved</p>
    </footer>
  );
};

export default Footer;
