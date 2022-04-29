import { useState, createContext } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
        id: 1,
        text: 'This is a review from context',
        rating: 8
        }
    ])
    
        const addFeedback = (newFeedback) => {
            let feedbackId = (new Date().valueOf()) + (Math.floor(Math.random() * 100))
            newFeedback.id = feedbackId
            setFeedback([newFeedback, ...feedback])
        }

        const deleteFeedback = (id) => {
            if (window.confirm('Are you sure you want to delete this review?')) {
                let newFeedback = feedback.filter((item) => item.id !== id)
                setFeedback(newFeedback)
            }
        }

    return (
        <FeedbackContext.Provider 
        value={{
            feedback,
            deleteFeedback,
            addFeedback
            }}>

            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
