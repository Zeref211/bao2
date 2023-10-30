import React, { Component } from 'react';
import Header from './Header';
import Shop from './Shop';
import Chitietsp from './Chitietsp';
import dl from './dulieu.json';
class Chitiet extends Component {
    render() { 
        return (
          
            <div>
                <>
                <Header/>
  {/* Header*/}
  <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
        <h1 className="display-4 fw-bolder">Shop in style</h1>
        <p className="lead fw-normal text-white-50 mb-0">
          With this shop hompeage template
        </p>
      </div>
    </div>
  </header>
  {/* Section*/}
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col-4 mb-5">
          <Chitietsp anh="https://th.bing.com/th/id/OIP.NMcdgjhLOtwFD_7YzVJSwAHaHa?pid=ImgDet&rs=1"tieuDe="GST-B100-1A"price="100$"></Chitietsp>
        </div>
        <div className="col-4 mb-5">
          <Chitietsp anh="https://th.bing.com/th/id/OIP.NMcdgjhLOtwFD_7YzVJSwAHaHa?pid=ImgDet&rs=1"tieuDe="GST-B100-1A"price="100$"></Chitietsp>
        </div>
        <div className="col-4 mb-5">
          <Chitietsp anh="https://th.bing.com/th/id/OIP.NMcdgjhLOtwFD_7YzVJSwAHaHa?pid=ImgDet&rs=1"tieuDe="GST-B100-1A"price="100$"></Chitietsp>
        </div>
        <div className="col-4 mb-5">
          <Chitietsp anh="https://th.bing.com/th/id/OIP.NMcdgjhLOtwFD_7YzVJSwAHaHa?pid=ImgDet&rs=1"tieuDe="GST-B100-1A"price="100$"></Chitietsp>
        </div>
        
      </div>
    </div>
  </section>
</>

            </div>
        );
    }
}

export default Chitiet;