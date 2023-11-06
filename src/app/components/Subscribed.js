import styles from './components.module.css'

const subscriptions = [
	{
			'name': 'Subscription 1',
			'timestamp': '2025-11-23T06:30:00.000Z',
			'type': 'outdoor bike',
			'location': {'lat': 90.0, 'lon': -110, 'description': 'Somewhere in the world'},
			'description': {'short': 'a ride to somewhere', 'long': 'a fun ride somewhere, why aren\'t you coming along?'},
			'image path': './somwhere/on/disk/or/embedded?.png',
			'duration': 330, // Minutes
			'route': {'image': './disk/path/to/route/icon.png','path': 'url or text'},
			'messages': [2,3], // Message IDs
			'distance': '5700.6', // In meters
			'checklist': [{'label': 'make lunch', 'done': true}, {'label': 'fill water bottles', 'done': false}],
			'waiver': {'type': 'type of waiver or path', 'signed': true, 'date': '2025-11-23T06:31:06.054Z'},
			'created': '2025-10-23T06:30:00.000Z',
			'owner': [50, 150, 250], // Person IDs
			'registered': [400, 500, 600], // Person IDs
			'image': '/path/to/image', // Hero image
			'reminder': '2025-10-23T06:30:00.000Z',	// Reminder
			'saved': true,  // Saved for later
	},
	null,
	null
];

export default function Subscribed() {
	return (
		<div className={styles.subscribed_wrapper}>
			{subscriptions.map((one_sub, idx) => {
				console.log(idx);
				if (one_sub == null) 
					return (
						<div className={`${styles.subscription_box} ${styles.subscription_empty}`} key={idx}>
							<div/>
							<div id={"subscription_icon_"+idx} className={styles.subscription_icon} style={{"alignSelf": "flex-end"}}>
							</div>
						</div>
					);

				return (
					<div className={styles.subscription_box} key={idx}>
						<div className={styles.subscription_col_wrap}>
							<div id={"sub_timestamp_"+idx} className={styles.subscription_timestamp}>
								{one_sub['timestamp']}
							</div>
							<div id={"sub_name_"+idx} className={styles.subscription_name}>
								{one_sub['name']}
							</div>
						</div>
						<div className={styles.subscription_col_wrap}>
							<div id={"subscription_icon_"+idx} className={styles.subscription_icon}>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}