import CustomImage from "./CustomImage"
import { navigate,useNavigate } from "react-router-dom";

export default function RecipeCard({recipe})
{
        const navigate = useNavigate();
        const  handleChange = () => {
          navigate('/ViewRecipes')
        };

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="/ViewRecipes">VIEW RECIPE</a>
            </div>
        </div>
    )
}