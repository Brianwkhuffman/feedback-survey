import { useState, createContext } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This company had pretty good service but could be better',
            rating: 7
        },
        {
            id: 2,
            text: 'This company had pretty good service but could be better 222222',
            rating: 4
        },
        {
            id: 3,
            text: 'This company had pretty good service but could be better 33333',
            rating: 6
        }
    ])

    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        edit: false
    })
    
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

    const editFeedback = (item) => {
        setFeedbackToEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (feedbackId, feedbackToUpdate) => {
        setFeedback(feedback.map((item) => feedbackId === item.id ? {...feedback, ...feedbackToUpdate} : item))
    }

    return (
        <FeedbackContext.Provider 
        value={{
            feedback,
            feedbackToEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>

            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
