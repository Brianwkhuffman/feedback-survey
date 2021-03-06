import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [validationMsg, setValidationMessage] = useState('')
    const [rating, setRating] = useState(1)

    const {addFeedback, feedbackToEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackToEdit.edit) {
            setText(feedbackToEdit.item.text)
            setRating(feedbackToEdit.item.rating)
            setBtnDisabled(false)
        }
    }, [feedbackToEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setValidationMessage(null)
        } else if (text.trim().length < 10) {
            setBtnDisabled(true)
            setValidationMessage('Review must contain at least 10 characters...')
        } else {
            setValidationMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackToEdit.edit) {
                updateFeedback(feedbackToEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            resetFields()
        }
    }

    const resetFields = () => {
        setText('')
        setBtnDisabled(true)
        //need to reset rating select
    }

    return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>Did you enjoy our service?</h2>
              
              <RatingSelect 
              value={rating}
              select={(rating) => setRating(rating)}/> 

              <div className="input-group">
                  <input 
                  type='text'
                  placeholder=' Write a review'
                  onChange={handleTextChange}
                  value={text}/>
                   
                  <Button 
                  type='submit'
                  version='secondary'
                  isDisabled={btnDisabled}>Submit</Button>
              </div>
              {validationMsg && <div className='message'>{validationMsg}</div>}
          </form>
      </Card>
    )
}

export default FeedbackForm
