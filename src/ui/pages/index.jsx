import { useIndex } from "../../data/hooks/pages/useIndex.page"
import Tweet from "../components/data-display/Tweet/Tweet"
import TextInputs from "../components/inputs/TextInputs/TextInputs"
import styles from '../styles/pages/index.module.css'
export default function Index() {
    const {
        user,
        text,
        onTextChange,
        maxTextLength,
        sendTweet,
        sortedTweetList
    } = useIndex();

    return (
        <div>
            <h1 className={styles['page-title']}>Tweet</h1>
            <div className={styles['tweet-container']}>
                <img src={user.picture} alt={user.name} className={styles['avatar']} />
                <TextInputs
                    placeholder={'O que está acontecendo?'}
                    rows={3}
                    maxLength={maxTextLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles['button-container']}>
                <div>
                    {text.length} / {maxTextLength}
                </div>
                <button
                    disabled={text.length === 0}
                    className={styles['post-button']}
                    onClick={sendTweet}
                >
                    Tweetar
                </button>
            </div>
            <ul className={styles['tweet-list']}>
                {sortedTweetList.map((tweet) => (
                    <li key={tweet.id} className={styles['tweet-list-item']}>
                        <Tweet tweet={tweet.data} />
                    </li>
                ))}
            </ul>
        </div>
    )
}