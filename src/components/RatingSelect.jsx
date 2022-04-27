import {useState} from 'react'

function RatingSelect({ select }) {
    const ratingNumbers = [...Array(10)]
    const [selected, setSelected] = useState()

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
  
    return (
        <ul className='rating'>
            {ratingNumbers.map((v, i) => {
                let currentNum = i+1
                return (
                <li key={currentNum}>
                    <input
                    type='radio'
                    id={`num${currentNum}`}
                    value={currentNum}
                    onChange={handleChange}
                    checked={selected === (currentNum)} />
                    <label htmlFor={`num${currentNum}`}>{currentNum}</label>
                </li>
                )
            })}
        </ul>
    )
}

export default RatingSelect
