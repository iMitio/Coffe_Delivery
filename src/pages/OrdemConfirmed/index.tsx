import {MapPin, Clock, CurrencyDollar} from "phosphor-react"
import  CofirmedOrderIlustration from  "../../assets/confirmed-order.png"


import { RegularText, TitleText } from "../../components/Typography/styled";
import { OrdemConfirmedContainer, OrderDetailsContainer } from "./styles";

import { InfoWithIcon } from "../../components/InfoWithinIcon";
import { useTheme } from "styled-components";

export  function  OrdemConfirmed() {
   const {colors} = useTheme()
    return  (
        <OrdemConfirmedContainer className="container">
           <div>
                <TitleText size="l" color="title">
                    Uhu! Pedido confirmado
                </TitleText>
                <RegularText size="l" color="subtitle" >
                    Agora é só aguardar que logo o café chegará até você
                </RegularText>
           </div>

           <section>
            <OrderDetailsContainer>
                <InfoWithIcon  
                    icon={<MapPin  fill="fill"/>}
                    iconBg={colors["brand-purple"]}
                    text={
                        <RegularText>
                            Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
                            <br/>
                            Farrapos - Porto Alegre, RS
                        </RegularText>
                    }
                />
                 
                     <InfoWithIcon  
                    icon={<Clock  fill="fill"/>}
                    iconBg={colors["brand-yellow"]}
                    text={
                        <RegularText>
                            Previsão de entrega
                            <br/>
                            <strong>20 min - 30 min </strong>
                        </RegularText>
                    }
                />
                    <InfoWithIcon  
                    icon={<CurrencyDollar  fill="fill"/>}
                    iconBg={colors["brand-yellow-dark"]}
                    text={
                        <RegularText>
                            Pagamento na entrega
                            <br/>
                            <strong>Cartão de Crédito</strong>
                        </RegularText>
                    }
                />
            </OrderDetailsContainer>
            <img src={CofirmedOrderIlustration} alt="delivery ilustration" />
           </section>
        </OrdemConfirmedContainer>
    )
}