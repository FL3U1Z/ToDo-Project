import Logo from './../assets/Logo.svg'
import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Logo do ignite"></img>
        </header>
        );
}
