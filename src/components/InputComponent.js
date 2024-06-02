import {Styles} from '../constants/Styles'
function InputComponent({ name, type, onChange, value, required=false }) {
  
    return (
        <input
            className='input'
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}

            placeholder={name.toUpperCase()+"..."}

            style={Styles.input}
        ></input>
    )
}

export default InputComponent