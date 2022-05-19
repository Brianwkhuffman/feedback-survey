import { useState, createContext, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])

    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Get Feedback
    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
    }
    
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
