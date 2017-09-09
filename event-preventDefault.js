handleRemoveItem (e) {
    e.preventDefault()
    console.log(e.target.id)
}


<a href="#" id={product.id} className="cart-item-remove" onClick={this.handleRemoveItem}>x</a>
