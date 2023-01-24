import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

import * as zod from  "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm, FormProvider} from "react-hook-form"
import { CompleteOrderContainer } from "./styles";

export type OrdemData =  zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOdremFormData = OrdemData

enum PaymentMethods {
     credit = "credit",
     debit = "debit",
     money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: "Informe o método de pagamento" };
      },
    }),
  });

  
export function CompleteOrder () {

    const confirmOrdemForm= useForm<ConfirmOdremFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        
    })

    const {handleSubmit} = confirmOrdemForm;

    function handleConfirmOrder(data:ConfirmOdremFormData ) {
        console.log(data)
    }

    return (
        <FormProvider {...confirmOrdemForm}>
            <CompleteOrderContainer 
                className="container" 
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
            <CompleteOrderForm />
            <SelectedCoffees/>   
       </CompleteOrderContainer>
        </FormProvider>
      
    )
}