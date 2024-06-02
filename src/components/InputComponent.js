import {Styles} from '../constants/Styles'
function InputComponent({ name, label, type, onChange, value, required=false }) {
  
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        }}>
            <label htmlFor={name} style={{fontSize: '14px', fontWeight: 600}}>{label}:</label>
            <input
                className='input'
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}

                placeholder={`${label} eingeben...`}

                style={Styles.input}
            ></input>
        </div>
    )
}

export default InputComponent