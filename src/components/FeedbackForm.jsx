import {useState} from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [validationMsg, setValidationMessage] = useState('')
    const [rating, setRating] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
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
            handleAdd(newFeedback)
            resetFields()
        }
    }

    const resetFields = () => {
        setText('')
        //setRating not working yet
        setRating('1')
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
                  placeholder='Write a review'
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
