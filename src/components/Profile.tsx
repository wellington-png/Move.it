import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}> 
            <img src="https://avatars.githubusercontent.com/u/55774902?s=460&u=8069d6d43a45791eded6783ddc0521dfb3c81dfe&v=4" alt="Wellington Santos"/>
            <div>
                <strong>Wellington Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}