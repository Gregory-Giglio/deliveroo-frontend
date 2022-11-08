const Category = ({category, cart, setCart}) => {
    
    const handleMeal = (id, title, price) =>{
        const newCart = [...cart];
        
        let exist = false;
        for (let i=0; i<newCart.length; i++){
            if (newCart[i].id === id){
                newCart[i].quantity++;
                setCart(newCart);
                exist = true;
                break;
            }
        };

        if (exist === false) {
            newCart.push({id: id, quantity: 1, title: title, price: price});
            setCart(newCart);
        }

    };
    
    
    return (
        <>
        <h3>{category.name}</h3>
        <div className="category">
            {category.meals.map((meal) => {
                
                return (
                    <div className="meal" key={meal.id} onClick={()=>{handleMeal(meal.id, meal.title, meal.price)}}>
                        <div>
                            <h4>{meal.title}</h4>
                            <p className="description">{meal.description}</p>
                            <p>{meal.price}€{meal.popular && " Populaire"}</p>
                        </div>
                        <img src={meal.picture} className={!meal.picture ? "hide" : ""} alt="" />
                        
                    </div>
                );
            })}
        </div>
        </>
    );
};


export default Category;
