import styles from './components.module.css'

const activities = [
  {
  	"idx": 0,
  	"name": "swim",
  	"timestamp": '2025-11-23T06:30:00.000Z'
  },{
  	"idx": 1,
  	"name": "bike",
  	"timestamp": '2025-11-23T06:30:00.000Z'
  },{
  	"idx": 2,
  	"name": "run",
  	"timestamp": '2025-11-23T06:30:00.000Z'
  }
];
const total_activities = 3;

export default function Activities()
{
	return (
		<div className={styles.activities_wrapper}>
		{activities.map((one_act, idx) => {
			return (
				<div className={styles.activity_col_wrapper}>
				</div>
			);
		})}
		</div>
	);
}