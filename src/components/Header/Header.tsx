import styles from './Header.module.css'

import rocket from '../../assets/rocket.svg'

export function Header() {
    return(
        <header className={styles.header}>
        <img src={rocket} alt='Rocket' />
        <h1><span className={styles.to}>to</span><span className={styles.do}>do</span></h1>
        </header>
    )
}