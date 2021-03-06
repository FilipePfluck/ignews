import { signIn, useSession } from 'next-auth/client'
import { useCallback } from 'react'
import styles from './style.module.scss'

import api from '../../services/api'
import getStripeJs from '../../services/stripe-js'
import { useRouter } from 'next/router'

interface SubscribeButtonProps {
    priceId: string
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({priceId}) => {
    const [session] = useSession()

    const { push } = useRouter()

    const handleSubscribe = useCallback(async ()=>{
        if(!session){
            signIn('github')
            return
        }

        if(session.activeSubscription){
            push('/posts')
            return 
        }

        try{
            const response = await api.post('/subscribe')

            const { sessionId } = response.data
            
            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({sessionId})
        }catch(err){
            alert(err.message)
        }
    },[session])

    return( 
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}

export default SubscribeButton