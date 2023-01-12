import { CreditCard } from "phosphor-react";
import { PaymentMethodInputContainer } from "./styles";

export function PaymentMethodInput() {
    return (
        <PaymentMethodInputContainer>
            <CreditCard size={16} />
            Cartão de credito
        </PaymentMethodInputContainer>
    )
}