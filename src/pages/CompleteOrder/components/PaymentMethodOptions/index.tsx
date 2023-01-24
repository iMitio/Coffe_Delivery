import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodInput } from "../../../../components/PaymentMethodInput";
import { RegularText } from "../../../../components/Typography/styled";
import { PaymentMethodOptionsContainer } from "../CompleteOrderForm/styles";

export const paymentMethods ={
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16} />
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16} />
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16} />
    }
}

export function PaymentMethodsOptions() {
    const {register, formState: {errors}} = useFormContext();

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return (
        <PaymentMethodOptionsContainer>
            {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
                <PaymentMethodInput
                    id={key}
                    icon={icon}
                    label={label}
                    value={key}
                     key={label}
                     {...register("paymentMethod")}
                />
            ))}
            
            {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}    
        </PaymentMethodOptionsContainer>
    )
}