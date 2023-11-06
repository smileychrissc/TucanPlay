import styles from './components.module.css'

export default function NewItem() {
	return (
		<div className={styles.newitem}>
			<div className={styles.newitem_plus_top}></div>
			<div className={styles.newitem_plus_bottom}></div>
		</div>
	);
}