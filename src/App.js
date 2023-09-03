import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Items from "./Components/Items"
import Categories from "./Components/Categories"
import ShowFullItem from "./Components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    orders: [],
    currentItems: [],
    items: [
      {
        id: 1,
        title: 'Стілець сірий',
        img: 'chair-gray.jpeg',
        desc: 'Стілець стане чудовим доповненням для Вашого інтерєру.',
        category: 'chairs',
        price: '999'
      },
      {
        id: 2,
        title: 'Софа сіра',
        img: 'sofa.jpeg',
        desc: 'Ця софа підійде до будь якого стилю.',
        category: 'sofa',
        price: '9800'
      },
      {
        id: 3,
        title: 'Стіл білий',
        img: 'table.jpeg',
        desc: 'Такий стіл буде мотивувати Вас працювати.',
        category: 'tables',
        price: '4299'
      },
      {
        id: 4,
        title: 'Стілець білий',
        img: 'chair-white.jpeg',
        desc: 'Чудове рішення для Вашого дому.',
        category: 'chairs',
        price: '999'
      },
      {
        id: 5,
        title: 'Софа біла',
        img: 'sofa-white.jpeg',
        desc: 'Софа стане чудовим рішенням для Вашої кімнати.',
        category: 'sofa',
        price: '9399'
      },
      {
        id: 6,
        title: 'Освітлення',
        img: 'wall-light.jpeg',
        desc: 'Освітлення це успіх для затишку Вашої домівки.',
        category: 'light',
        price: '4999'
      },
    ],
    
    showFullItem: false,
    fullItem: {}

  };
  this.chooseCategory = this.chooseCategory.bind(this); // Зв'язати метод з this
  this.addToOrder = this.addToOrder.bind(this) // Зв'язати метод з this
  this.deleteOrder = this.deleteOrder.bind(this) // Зв'язати метод з this
  this.state.currentItems = this.state.items
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
}
render() {
   return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
     
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  )
}

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)
  this.setState({orders: [...this.state.orders, item] })
}
}
export default App;
