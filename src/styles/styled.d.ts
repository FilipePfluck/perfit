import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            background: string,
            font: string,
            title: string,
            black: string,
            shape: string,
            inputs: string

            red_light: string,
            green_light: string,
            red: string,
            green: string
            button_green: string
        }
    }
}