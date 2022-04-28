import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ handleDelete }) {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No reviews yet...</p>
    }

    return (
    <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item) => 
                <motion.div
                    key={item.id}
                    intial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1}}>

                    <FeedbackItem 
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}/>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList
