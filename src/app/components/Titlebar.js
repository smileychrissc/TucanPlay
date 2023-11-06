import styles from './components.module.css'
import Countdown from './Countdown'
import NewItem from './NewItem'
import PersonalSettings from "./PersonalSettings"
import SocialInfo from "./SocialInfo"

export default function Titlebar() {
	return (
		<div className={styles.titlebar} role="banner">
			<NewItem />
			<Countdown />
			<div className={styles.personal_wrapper}>
				<SocialInfo />
				<PersonalSettings />
			</div>
		</div>
	);
}
