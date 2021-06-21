import { InputHTMLAttributes, useState } from 'react'
import { Control, Controller } from 'react-hook-form'

import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon?: React.ComponentType<IconBaseProps>
    containerStyle?: object
    error?: any
    control: Control
}

export const Input = ({ name, control, icon: Icon, containerStyle = {}, error = null, ...rest }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <S.Container
            isFocused={isFocused}
            isErrored={!!error}
        >
            {Icon && <Icon size={20} />}
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <input
                        type="text"
                        onChange={onChange}
                        onFocus={() => { setIsFocused(true);}}
                        onBlurCapture={() => { setIsFocused(false);}}
                        value={value || ''}
                        {...rest}
                    />
                )}
                name={name}
            />
            {error &&
                <S.Error title={error.message}>
                    <FiAlertCircle color="#c53030" size={20} />
                </S.Error>
            }
        </S.Container>
    )
}