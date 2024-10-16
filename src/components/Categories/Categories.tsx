import { useSelector } from "react-redux";
import styles from "./categories.module.scss"
import { RootState } from "../../app/store";
import "/Web-Development/Practice/Project/YouMeal/vite-project/src/index.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
const Categories = () => {
   const categories = useSelector((state: RootState) => state.categories)
   const [selectedCategory, setSelectedCategory] = useState<string | null>("Продукты")
   const handleSelected = (name: string) => {
    setSelectedCategory(name)
   }
    return (
        <div>
        <ul className={styles.category}>    
            {categories.map((c) => {
                return (
                <Link key={c.id} style={{textDecoration: "none"}} to={c.id >= 1 ? `category/${c.id}`: "/"}><li key={c.id} onClick={() => handleSelected(c.name)}>
                <img src={`${c.image}.svg`} alt="burgerCategory" />
                {c.name}
                </li>  
                </Link>
                )
            })}     
        </ul>
        <h1 style={{textAlign: "center", paddingTop: "20px"}}>{selectedCategory}</h1>
        </div>
        
    );
};

export default Categories;