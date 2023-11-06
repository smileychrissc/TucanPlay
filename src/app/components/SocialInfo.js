import styles from './components.module.css'
import PersonIcon from './PersonIcon'

/*
*/

export default function SocialInfo() {
	return (
		<div className={styles.social_info}>
			<div className={styles.social_icon_1}>
				<PersonIcon small_icon={true} />
			</div>
			<div className={styles.social_icon_2}>
				<PersonIcon small_icon={true} />
			</div>
			<div className={styles.social_icon_3}>
				<PersonIcon small_icon={true} />
			</div>
		</div>
	);
}