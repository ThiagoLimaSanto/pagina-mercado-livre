import { products } from "../../db/data";
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <h2 className="section-title">Ofertas Do dia</h2>
                <div className="products-grid" id="products-grid">
                    {products.map((p) => (
                        <div key={p.id} className="product-card">
                            <img className="product-image" src={p.image} alt={p.title} />
                            <h3 className="product-title">{p.title}</h3>
                            <div className="product-price">
                                <span className="price">R$ {p.price}</span>
                            </div>
                            <div className="product-discount">
                                <span className="discount">{p.discount}% OFF</span>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Main
