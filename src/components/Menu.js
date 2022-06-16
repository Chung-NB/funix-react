// import libs
import { Component } from 'react';
// import components
// import css

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ]
        }
    }

    handleShowDish() {
        console.log('Image clicked');
    }

    render() {
        return (
            <div className="container-lg p-3">
                {this.state.dishes.map(dish => {
                    return (
                        <div key={dish.id} className="row">
                            <div className="col-sm-3">
                                <img
                                    src={dish.image}
                                    onClick={this.handleShowDish}
                                />
                            </div>
                            <div className="col-sm-9">
                                <h2>{dish.name}</h2>
                                <h3>${dish.price}</h3>
                                <p>{dish.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default Menu;