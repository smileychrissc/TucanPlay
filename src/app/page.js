import Image from 'next/image'
import styles from './page.module.css'
import Subscribed from './components/Subscribed'
import Titlebar from './components/Titlebar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Titlebar />
      <Subscribed />
    </main>
  )
}
