import React, { useState } from "react";
// import { addNewSofa } from "../Products/productRedux/productAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./AdminProductDetails.module.css";
import { addNewSofa } from "../Products/productRedux/productAction";

export default function AddNewProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    image: "",
    url1: "",
    url2: "",
    url3: "",
    price: 0,
    category: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to add a new sofa
    dispatch(addNewSofa(formData));

    // Redirect to the product list page or other desired page
    navigate('/admin/products');
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold" }}>Add New Product</h1>
          <form onSubmit={handleFormSubmit} className={styles.form}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Type:
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </label>
            <label>
              URL 1:
              <input
                type="text"
                name="url1"
                value={formData.url1}
                onChange={handleInputChange}
              />
            </label>
            <label>
              URL 2:
              <input
                type="text"
                name="url2"
                value={formData.url2}
                onChange={handleInputChange}
              />
            </label>
            <label>
              URL 3:
              <input
                type="text"
                name="url3"
                value={formData.url3}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Category:
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select Category</option>
                <option value="ArmChair">ArmChair</option>
                <option value="ChildrenFurniture">Children Furniture</option>
                <option value="Beds">Beds</option>
                <option value="Sofas">Sofas</option>
              </select>
            </label>
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}
