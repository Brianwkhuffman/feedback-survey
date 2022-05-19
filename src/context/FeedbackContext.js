import { useState, createContext, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
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
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }
    
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
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
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>

            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
