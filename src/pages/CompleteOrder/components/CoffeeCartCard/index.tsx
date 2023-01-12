import { Trash } from "phosphor-react";
import { QuantituInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography/styled";
import { CartItem } from "../../../../context/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {
    const coffeeTotal = coffee.price * coffee.quantity
    const formattedPrice = formatMoney(coffeeTotal)

    const {ChangeCartItemQuantity, removerCartItem} = useCart()


    function handleIncrease() {
        ChangeCartItemQuantity(coffee.id, "increase")
    }
    function handleDecrease () {
        ChangeCartItemQuantity(coffee.id, "decrease")
    }
    function handleRemove() {
        removerCartItem(coffee.id)
    }
    return (
        <CoffeeCartCardContainer>
            <div>
                <img  src={`/coffees/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle">
                        {coffee.name}
                    </RegularText>
                    <ActionsContainer>
                        <QuantituInput 
                            size="small" 
                            quantity={coffee.quantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                        />
                        <RemoveButton 
                            onClick={handleRemove}
                        >
                            <Trash  size={16}/>
                             REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}