import {useState} from 'react'

function RatingSelect() {
    const ratingNumbers = [...Array(10)]
    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        setSelected(e.currentTarget.value)
    }
  
    return (
        <ul className='rating'>
            {ratingNumbers.map((v, i) => {
                return (
                <li>
                    <input
                    type='radio'
                    id={`num${i+1}`}
                    value={i+1}
                    onChange={handleChange}
                    checked={selected === `${i+1}`} />
                    <label htmlFor={`num${i+1}`}>{i+1}</label>
                </li>
                )
            })}
        </ul>
    )
}

export default RatingSelect