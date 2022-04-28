import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            let newFeedback = feedback.filter((item) => item.id !== id)
            setFeedback(newFeedback)
        }
    }

    const addFeedback = (newFeedback) => {
        let feedbackId = (new Date().valueOf()) + (Math.floor(Math.random() * 100))
        newFeedback.id = feedbackId
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }
    
    return (
        <Router>
            <Header/>
            <div className='container'>
                <Routes>
                <Route exact path='/' element={
                    <>
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList 
                        feedback={feedback}
                        handleDelete={deleteFeedback} />
                        <AboutIconLink />
                    </>
                }>
                </Route> 

                <Route path='/about' element={<AboutPage />} />
                
                </Routes>
            </div>
        </Router>    
    )
}

export default App
