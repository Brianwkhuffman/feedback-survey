import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            let newFeedback = feedback.filter((item) => item.id !== id)
            setFeedback(newFeedback)
        }
    }

    const addFeedback = (newFeedback) => {
        console.log(newFeedback)
    }
    
    return (
        <>
            <Header/>
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback}/>

                <FeedbackStats feedback={feedback} />

                <FeedbackList 
                feedback={feedback}
                handleDelete={deleteFeedback}
                />
            </div>
        </>    
    )
}

export default App
