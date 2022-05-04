import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color='#f582ae'/>
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color='#f582ae'/>
            </button>
            <div className="text-display">{item.text}
            </div>
        </Card>
    )
}

export default FeedbackItem
