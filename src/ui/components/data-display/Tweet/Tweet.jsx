import styles from './Tweet.module.css';
import { DataService } from '../../../../data/service/DateService';

export default function Tweet({ tweet }) {
    const { user } = tweet;
    console.log(tweet);
    return (
        <div className={styles['tweet-container']}>
            <img
                src={user.picture} className={styles['avatar']}
                alt={user.name}
            />
            <div className={styles['user']}>
                <span className={styles['user-name']}>{user.name}</span>{' '}
                <span className={styles['user-username']}>{user.username}</span>
                <span className={styles['date']}>{' '} - {DataService.relativeTime(tweet.date)}</span>
            </div>
            <div className={styles['tweet-text']}>{tweet.text}</div>
        </div>
    )
}