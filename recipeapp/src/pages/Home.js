import HeroSection from "../Component/HeroSection";
import ImproveSkills from "../Component/ImproveSkills";
import QouteSection from "../Component/QuoteSection";
import ChiefsSection from "../Component/ChiefsSection";


export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </div>
    )
}