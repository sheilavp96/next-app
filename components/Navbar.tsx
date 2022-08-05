import { ActiveLink } from "./ActiveLink";
import styles from "./navbar.module.css";
// A link no se le puede agregar estilos, se tendría que poner una etiqueta a dentro del Link para aplicarle estilos
const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item) => {
        return <ActiveLink text={item.text} href={item.href} key={item.text} />;
      })}
      {/* <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" /> */}
    </nav>
  );
};

export default Navbar;
