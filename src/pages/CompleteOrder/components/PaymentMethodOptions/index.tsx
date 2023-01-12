import { PaymentMethodInput } from "../../../../components/PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "../CompleteOrderForm/styles";

export function PaymentMethodsOptions() {
    return (
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput />
            <PaymentMethodInput />
            <PaymentMethodInput />
    
        </PaymentMethodOptionsContainer>
    )
}