import React, { Component } from 'react';



class Chitietsp extends Component {
  constructor(props) {
    super(props);
    
  }
  
 
    render() {
        return (
         <div >
         
        
            <div className="col mb-5">
              <div className="card h-100">
                {/* Product image*/}
                <a  href="/shop" >
                <img
                  className="card-img-top"
                  src={this.props.anh}
                  alt=""
                />
                </a>
                
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{this.props.tieuDe}</h5>
                    {/* Product price*/}
                    {this.props.price}
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
              <button
              className="btn btn-outline-dark flex-shrink-0"
              type="button"
            >
              <i className="bi-cart-fill me-1" />
              Add to cart
            </button>
              </div>
                </div>
              </div>
            </div>
         </div>
        );
    }
}

export default Chitietsp;