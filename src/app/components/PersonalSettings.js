import styles from './components.module.css'
import PersonIcon from './PersonIcon'

export default function PersonalSettings() {
	return (
		<div className={styles.person_icon_wrapper}>
			<PersonIcon/>
		</div>
	);
}