import { forwardRef,InputHTMLAttributes } from "react"
import { RegularText } from "../Typography/styled";
import { InputStyleContainer, InputWrapper } from "./styles"

type InputProps  = InputHTMLAttributes<HTMLInputElement>  & {
    error?: string;
}


export const Input = forwardRef<HTMLInputElement, InputProps>(({error, ...props}, ref) => {
        return (
           <InputWrapper>
             <InputStyleContainer {...props} ref={ref}/>
                {error && (
                    <RegularText size="s">
                        {error}
                    </RegularText>
                )}
           </InputWrapper>
        )
    }
)