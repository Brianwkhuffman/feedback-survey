import { useContext } from 'react'
import { motion } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No reviews yet...</p>
    }

    return isLoading ? (
        <Spinner/>
    ) : (
    <div className='feedback-list'>
        {/* <AnimatePresence> */}
            {feedback.map((item) => 
                <motion.div
                    key={item.id}
                    intial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>

                    <FeedbackItem 
                    key={item.id}
                    item={item} />
                </motion.div>
            )}
            {/* </AnimatePresence> */}
    </div>
  )
}

export default FeedbackList
