
function Product() {
  return (
    <div className="container py-5">
      <h1 className="display-4">Our Products</h1>
      <p className="lead">Explore our range of products and services.</p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Details about Product 1.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">Details about Product 2.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 3" />
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">Details about Product 3.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
