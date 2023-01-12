import { TitleText } from "../../../../components/Typography/styled";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "../ConfirmationSection";
import { DetailsContainer, SelectedCoffesContainer } from "./styled";

export function SelectedCoffees() {
    const {cartItems} = useCart()
    return (
        <SelectedCoffesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>
            <DetailsContainer>
                {cartItems.map(item => (
                    <CoffeeCartCard key={item.id} coffee={item}/>
                ))}    

                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffesContainer>
    )
}