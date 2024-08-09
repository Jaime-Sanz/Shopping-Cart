import styles from '../styles/Footer.module.css';
import linkedinLogo from '../assets/images/linkedin.png';
import gitHubLogo from '../assets/images/github.png';
import odinLogo from '../assets/images/odin.png';

const gitUrl = "https://github.com/Jaime-Sanz/Shopping-Cart";
const linkedInUrl = "https://www.linkedin.com/in/jaime-sanchez-a95874245/";
const odinUrl = "https://www.theodinproject.com/";

const openWindow = (url) => {
    window.open(url);
}

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>© 2024 Trendy Treasure. All rights reserved.</p>
            <div className={styles.iconContainer}>
                <img src={odinLogo} alt="picture of The Odin Project logo that links to The Odin Project" onClick={() => openWindow(odinUrl)} />
                <img src={linkedinLogo} alt="picture of linkedin logo that links to personal linkedin" onClick={() => openWindow(linkedInUrl)} />
                <img src={gitHubLogo} alt="picture of github logo that links to github repo" onClick={() => openWindow(gitUrl)} />
            </div>
        </div>
    );
};

export default Footer;