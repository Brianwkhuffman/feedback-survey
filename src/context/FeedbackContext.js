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

    return (
        <FeedbackContext.Provider value={{feedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
