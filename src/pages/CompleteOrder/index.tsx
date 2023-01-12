import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

import * as zod from  "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm, FormProvider} from "react-hook-form"
import { CompleteOrderContainer } from "./styles";

export type OrdemData =  zod.infer<typeof confirmOrdemFormValidationSchema>;

type ConfirmOdremFormData = OrdemData

const confirmOrdemFormValidationSchema = zod.object({
    cep: zod.string().min(8, "Digite o seu CEP corretamente"),
    rua: zod.string().min(25).max(30),
    number: zod.number().gte(1, { message: "this👏is👏too👏big" }),
    complement: zod.string().optional(),
    district: zod.string().min(1, "Informe o nome da sua rua").max(20),
    city: zod.string().min(1, "Informe a sua cidade").max(20),
    uf: zod.string().min(2, "Informe sua Unidade Federativa").max(2).transform((val) => val.toUpperCase)
})
export function CompleteOrder () {

    const confirmOrdemForm= useForm<ConfirmOdremFormData>({
        resolver: zodResolver(confirmOrdemFormValidationSchema)
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