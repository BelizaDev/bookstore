import "./hero.css";
import Button from '../button/button';


function Hero ({productData, btnText, handleAddProduct}) {
   
    const isLoggedIn = true
    return (
        <div className="hero-container">
            <section className="hero-content">
        <h1 className="header">Sell your products</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        {/* {isLoggedIn && <Button>{btnText}</Button>} */}
        <p>Total Product = {productData.length}</p>
        <button onClick={handleAddProduct}>Add Product</button> 
        </section>
        <img src="https://plus.unsplash.com/premium_photo-1663100794006-58b06e8de412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydHxlbnwwfHwwfHx8MA%3D%3D" alt="card Image"/>
      

        </div>
    )
}

export default Hero