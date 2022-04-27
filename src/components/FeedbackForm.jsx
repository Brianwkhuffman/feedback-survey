import {useState} from 'react'
import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        console.log(e.target.value)
    }

    return (
      <Card>
          <form>
              <h2>Did you enjoy our service?</h2>
              <div className="input-group">
                  <input 
                  type="text"
                   placeholder='Write a review'
                   onChange={handleTextChange}
                   />
                  <button type="submit">Submit</button>
              </div>
          </form>
      </Card>
    )
}

export default FeedbackForm