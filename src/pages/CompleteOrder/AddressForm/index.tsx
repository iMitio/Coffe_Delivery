import { Input } from "../../../components/Input";
import { AddressFormContainer } from "../components/CompleteOrderForm/styles";
import {useFormContext} from  "react-hook-form"


interface ErrorsTypes {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export  function AddressForm () {
    const  {register, formState} = useFormContext();
    const  {errors} = formState as unknown as ErrorsTypes

    return (
        <AddressFormContainer>
            <Input 
                placeholder="CEP"
                type="number" 
                className="cep"
                {...register("cep")}
                error={errors.cep?.message}
            />

            <Input 
                placeholder="Rua"
                type="text"
                className="street" 
                {...register("street")}
                error={errors.street?.message}

            />

            <Input 
                placeholder="Número" 
                type="number" 
                {...register("number")}
                error={errors.number?.message}

                
            />

            <Input 
                placeholder="Complemento"
                className="complement" 
                {...register("complement")}
                error={errors.complement?.message}

            />

            <Input 
                placeholder="Bairro" 
                {...register("district")} 
                error={errors.district?.message}

            />

            <Input 
                placeholder="Cidade" 
                {...register("city")}
                error={errors.city?.message}

            />

            <Input 
                placeholder="UF" 
                {...register("uf")}
                error={errors.uf?.message}

            />

        </AddressFormContainer>
    )
}