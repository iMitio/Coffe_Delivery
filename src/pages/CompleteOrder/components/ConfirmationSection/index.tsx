import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography/styled";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { CofirmationSectionContainer } from "../SelectedCoffees/styled";


const DeliveryPrice = 3.5

export function ConfirmationSection() {
    const {cartItemTotal, cartQuantity} = useCart()
    const cartTotal = DeliveryPrice + cartItemTotal

    const formattedItemsTotal = formatMoney(cartItemTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DeliveryPrice)
    return (
        <CofirmationSectionContainer>
            <div>
                <RegularText size="s" >
                    Total de itens
                </RegularText>
                <RegularText >
                    R$ {formattedItemsTotal}
                </RegularText>
            </div>
            <div>
                <RegularText size="s" >
                    Entrega
                </RegularText>
                <RegularText >
                    R$ {formattedDeliveryPrice}
                </RegularText>
            </div>
            <div>
                <RegularText size="l" weight="700"  color="subtitle">
                    Total
                </RegularText>
                <RegularText size="l" weight="700"  color="subtitle">
                        R$ {formattedCartTotal}
                </RegularText>
            </div>

            <Button text="Confirma pedido" disabled={cartQuantity <=0} type="submit"/>
        </CofirmationSectionContainer>
    )
}