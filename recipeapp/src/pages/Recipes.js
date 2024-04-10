import PreviousSearches from "../Component/PreviousSearches"
import RecipeCard from "../Component/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Noodles & Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Chicken Curry",
            image: "/img/gallery/ChickenCurry.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
           
        }, 
        {
            title: "Panner Masala",
            image: "/img/gallery/PaneerMasala.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Mutton Curry",
            image: "/img/gallery/MuttonCurry.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Kaju Masala",
            image: "/img/gallery/KajuCurry.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Veg Maratha",
            image: "/img/gallery/VegMaratha.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Paneer Angara",
            image: "/img/gallery/PaneerAngara.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Veg Kolhapuri",
            image: "/img/gallery/VegKolhapuri.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}