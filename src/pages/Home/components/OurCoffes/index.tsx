import { TitleText } from "../../../../components/Typography/styled";
import { coffees } from "../../../../data/coffee";
import { CoffeCard } from "../CoffeCard";
import { CoffeList, OurCoffeContainer } from "./styles";

export function OurCoffes () {
    return (
        <OurCoffeContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeList>
                {coffees.map(coffee => (
                    <CoffeCard key={coffee.id} coffee={coffee}/>

                ))}
            

            </CoffeList>
        </OurCoffeContainer>
    )
}