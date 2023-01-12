import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantituInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography/styled";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { AddCardWrapper, CardFooter, CoffeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
    id: number;
    tags: string[],
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee
}

export function CoffeCard ({coffee}: CoffeeProps) {
    const [quantity, setQuantity] = useState(0);

    const fomattedPrice = formatMoney(coffee.price)
    const {addCoffeeToCart} = useCart()

    function handleIncrease(){
        setQuantity((state) => state + 1);
    }

    function handleDecrease(){
        setQuantity((state) => state - 1);
    }

    function handleAddToCart() {
        const coffeeToAdd ={
            ...coffee,
            quantity
        }
        addCoffeeToCart(coffeeToAdd)
    }
    return (
        <CoffeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />
            
            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>
                {coffee.name}
            </Name>
            <Description>
                {coffee.description}
            </Description>


            <CardFooter>
                <div>
                    <RegularText size="s">
                        R$
                    </RegularText>
                    <TitleText
                        size="m"
                        color="text"
                        as="strong"
                    >   
                       {fomattedPrice}
                    </TitleText>
                </div>

                <AddCardWrapper>
                    <QuantituInput  
                        onIncrease={handleIncrease} 
                        onDecrease={handleDecrease} 
                        quantity={quantity}
                    />

                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCardWrapper>
            </CardFooter>
        </CoffeCardContainer>
    )
}