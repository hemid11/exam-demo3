import React, { useState } from 'react';

function AddProductForm() {
    const [productName, setProductName] = useState('');
    const [salePrice, setSalePrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:1111/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: productName,
                    sale: salePrice
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred, please try again!');
        }
    };

    return (
        <div>
            <h2>Add Product Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productName">Product Name:</label><br />
                <input 
                    type="text" 
                    id="productName" 
                    name="productName" 
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                /><br /><br />
                <label htmlFor="salePrice">Sale Price:</label><br />
                <input 
                    type="number" 
                    id="salePrice" 
                    name="salePrice" 
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                /><br /><br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProductForm;
