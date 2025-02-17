import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Mon Site</h1>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/about">À propos</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
