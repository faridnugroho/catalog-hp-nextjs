import Image from "next/image";
import React from "react";

async function getDetailPostingan(id) {
  let detailPostingan = await fetch(`https://dummyjson.com/product/${id}`);
  return detailPostingan.json();
}

export default async function Page({ params }) {
  const detail = await getDetailPostingan(params.id);
  console.log({ detailProduct: detail });
  return (
    <div className="d-flex justify-content-between">
      <div>
        <Image
          src={detail.thumbnail}
          width="400"
          height="400"
          alt="thumbnail"
        ></Image>
      </div>
      <div>
        <table class="table border table-striped-columns">
          <thead>
            <tr>
              <th scope="col">Merk</th>
              <td>{detail.brand}</td>
            </tr>
            <tr>
              <th scope="col">Seri</th>
              <td>{detail.title}</td>
            </tr>
            <tr>
              <th scope="col">Category</th>
              <td>{detail.category}</td>
            </tr>
            <tr>
              <th scope="col">Rating</th>
              <td>{detail.rating}</td>
            </tr>
            <tr>
              <th scope="col">Stock</th>
              <td>{detail.stock}</td>
            </tr>
            <tr>
              <th scope="col">Price</th>
              <td>{detail.price}</td>
            </tr>
            <tr>
              <th scope="col">Description</th>
              <td>{detail.description}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
