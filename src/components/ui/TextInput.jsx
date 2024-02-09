import React from 'react'
import ValidationMessages from '../common/validations/ValidationMessages'
import { HELPER } from '../../services'

export default function TextInput({ onChange, name, label, error, ...rest }) {
    return (
        <>
            <input
                name={name}
                onChange={onChange}
                className='tk-degular fontM leadingM text-dark fw-normal bg-white rounded-pill dmb-15 w-100'
                {...rest}
            />

            <ValidationMessages errors={error && !HELPER.isEmpty(error[name]) ? error[name] : null} label={label} />
        </>
    )
}
