import React, { useState } from 'react';
import './ProductsManagement.css'; // Import the CSS file for styling

const ProductsManagement = () => {
    // Mock data for products
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", category: "Category 1", price: "$10", stock: 100 },
        { id: 2, name: "Product 2", category: "Category 2", price: "$20", stock: 200 },
        // Add more mock data as needed
    ]);

    // State for managing form inputs
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });

    // State for managing editing mode and selected product
    const [editMode, setEditMode] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showForm, setShowForm] = useState(false); // State to control the visibility of the form

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to toggle edit mode and set selected product
    const toggleEditMode = (product) => {
        setEditMode(true); // Set editMode to true when toggling edit mode
        setSelectedProduct(product);
        setFormData({
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock
        });
        setShowForm(true); // Show the form when toggling edit mode
    };

    // Function to update product data
    const updateProduct = () => {
        const updatedProducts = products.map(product => {
            if (product.id === selectedProduct.id) {
                return {
                    ...product,
                    name: formData.name,
                    category: formData.category,
                    price: formData.price,
                    stock: formData.stock
                };
            }
            return product;
        });
        setProducts(updatedProducts);
        setEditMode(false);
        setSelectedProduct(null); // Reset selected product after update
        setFormData({ // Clear form data after update
            name: '',
            category: '',
            price: '',
            stock: ''
        });
        setShowForm(false); // Hide the form after updating the product
    };

    // Function to add a new product
    const addProduct = () => {
        // Check if any of the form fields is empty
        if (!formData.name || !formData.category || !formData.price || !formData.stock) {
            alert("Please fill out all fields.");
            return;
        }

        const newProduct = {
            id: products.length + 1,
            name: formData.name,
            category: formData.category,
            price: formData.price,
            stock: formData.stock
        };
        setProducts([...products, newProduct]);
        setFormData({
            name: '',
            category: '',
            price: '',
            stock: ''
        });
        setShowForm(false); // Hide the form after adding the product
    };

    return (
        <div className="products-management">
            <h2>Products Management</h2>
            {/* Button to show the form */}
            <button className="add-record-btn" onClick={() => setShowForm(true)}>Add Record</button>
            {/* Form */}
            <div className={`add-product-form ${showForm ? 'show' : ''}`}>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                    <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} required />
                    <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} required />
                    <input type="number" name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleInputChange} required />
                    {editMode ? (
                        <button type="button" className="add-product-btn" onClick={updateProduct}>Update Product</button>
                    ) : (
                        <button type="submit" className="add-product-btn" onClick={addProduct}>Add Product</button>
                    )}
                </form>
            </div>
            {/* Table */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => toggleEditMode(product)}>Edit</button>
                                <button onClick={() => setProducts(products.filter(p => p.id !== product.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsManagement;
