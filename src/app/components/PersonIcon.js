import styles from './personicon.module.css'

export default function PersonIcon({small_icon}) {
	let head_style = small_icon ? styles.person_head_small : styles.person_head;
	let body_style = small_icon ? styles.person_body_small : styles.person_body;
	return (
		<div className={styles.person_wrapper}>
			<div className={head_style} />
			<div className={body_style} />
		</div>
	);
}