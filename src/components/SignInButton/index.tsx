import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useSession, signIn, signOut } from "next-auth/react"

import styles from './styles.module.scss';
import Github from 'next-auth/providers/github';

export function SignInButton() {
    const {data: session } = useSession();

    return session ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#04d361" />
            Juliana Cruz
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn()}
        >
            <FaGithub color="#eba417" />
            Sign in with GitHub
        </button>
    )
}