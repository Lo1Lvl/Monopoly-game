import logo from "../../../public/monopoly.webp";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <Image src={logo} alt="title" />
      <h1 className="gradient-text text-center text-6xl font-extrabold uppercase">
        Монополия
      </h1>
      <h2 className="gradient-text text-center text-2xl font-extrabold uppercase">
        Банк без границ
      </h2>
    </header>
  );
};

export default Header;
