import { Intro } from "./components/Intro";
import { OurCoffes } from "./components/OurCoffes";
import { HomeContainer } from "./styles";

export function Home() {
   

    return (
       <HomeContainer>
            <Intro/>
            <OurCoffes/>
       </HomeContainer>
    )
}