import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  
    return (
    <Card>
        <div className="about">
          <h1>About this project</h1>
          <p>This is a React App designed to leave feedback for services</p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to='/'>Back to home</Link>
          </p>
        </div>
    </Card>

  )
}

export default AboutPage
