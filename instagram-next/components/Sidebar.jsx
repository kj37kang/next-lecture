// ~/instagram-next/components/Sidebar.jsx
import Link from "next/link";
import Image from "next/image.js";
import { FaHouse } from "react-icons/fa6";
import InstagramLogo from "./InstagramLogo.jsx";
import NavLink from "./NavLink.jsx";
import styles from "./Sidebar.module.scss";
import CreateButton from "./CreateButton.jsx";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <InstagramLogo />
        </Link>
      </div>

      <div className={styles.menuContainer}>
        <NavLink href="/" className={styles.menuItem}>
          <FaHouse size={24} />
          <span className={styles.menuText}>홈</span>
        </NavLink>

        <CreateButton />

        <NavLink href="/jaehoon" className={styles.menuItem}>
          <div className={styles.profileImage}>
            <Image
              src="https://picsum.photos/seed/jaehoon/40/40"
              alt="프로필"
              width={40}
              height={40}
            />
          </div>
          <span className={styles.menuText}>프로필</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Sidebar;