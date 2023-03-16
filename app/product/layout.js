import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Products() {
  let products = await fetch("https://dummyjson.com/products?limit=4");
  return products.json();
}

export default async function Layout({ children }) {
  const { products } = await Products();
  return (
    <div>
      <div className="row">
        {products?.map((product, index) => (
          <div
            key={index}
            className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5"
          >
            <div className="card" style={{ width: "18rem" }}>
              <Image
                src={product.thumbnail}
                width={100}
                height={150}
                className="card-img-top"
                alt={product.brand}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">$ {product.price}</p>
                </div>
                <Link
                  href={`/product/${product.id}`}
                  className="btn btn-primary"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h3 className="mb-3">Detail Product:</h3>
      <div>{children}</div>
    </div>
  );
}
