import styles from './styles.module.scss';

<<<<<<< HEAD
export function SubscribeButton() {
=======
interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId } : SubscribeButtonProps) {
>>>>>>> afb4127ad2d0799acac84a4ac06f94519c8e88a3
    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}