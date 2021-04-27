import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Margherita',
      description: 'tomato base, mozarella, basil',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Pepperoni',
      description: 'tomato base, mozarella, pepperoni slices',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'White Pizza',
      description: 'ricotta base, mozarella, parmesan, garlic',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'BBQ Chicken',
      description: 'BBQ base, chicken slices, mozarella',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}/>
    ));
    
    return <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
};

export default AvailableMeals;