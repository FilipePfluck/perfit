import React, {SelectHTMLAttributes} from 'react'
import { Control, Controller } from 'react-hook-form'

import { FiAlertCircle } from 'react-icons/fi'

import * as S from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    options: Array<{
        value: string,
        label: string
    }>
    control: Control
    error?: any
}

export const Select:React.FC<SelectProps> = ({name, options, placeholder="selecione uma opção", error=null, control, ...rest}) => {
    return( 
        <S.Container>
            <Controller
                control={control}
                render={({ field: { onChange, value }})=>(
                    <select 
                        value=""
                        id={name}
                        onChange={onChange}
                        {...rest}
                    >  
                        <option value="" disabled hidden>{placeholder}</option>
                        {options.map(option =>(
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                )}
                name={name}
            />
            {/* error &&
                <S.Error title={error.message}>
                    <FiAlertCircle color="#c53030" size={20} />
                </S.Error>
             */}
        </S.Container>
    )
}