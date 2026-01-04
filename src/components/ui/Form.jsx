import React from 'react';
import Input from './Input';
import Label from './Label';

function Form({ formData, handleChange, handleSubmit, errors, isSubmitting }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-row">
          <div className="form-group">
            <Label htmlFor="productName">Product Name*</Label>
            <Input
              type="productName"
              id="productName"
              name="productName"
              value={formData.productName}
              onchange={handleChange}
              placeholder="Enter product name"
            />
            {errors.productName && (
              <p className="errorMsg">{errors.productName}</p>
            )}
          </div>

          <div className="form-group">
            <Label htmlFor="sku">SKU *</Label>
            <Input
              type="type"
              id="sku"
              name="sku"
              value={formData.sku}
              onchange={handleChange}
              placeholder="PRD-001"
            />
            {errors.sku && <p className="errorMsg">{errors.sku}</p>}
          </div>
        </div>
        <div className="form-group">
          <Label htmlFor="sku">Description</Label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="4"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <Label htmlFor="sku">Category *</Label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="clothing">Clothing</option>
              <option value="sports">Sports & Outdoors</option>
              <option value="other">Others</option>
            </select>
            {errors.category && <p className="errorMsg">{errors.category}</p>}
          </div>

          <div className="form-group">
            <Label htmlFor="sku">Manufacturer</Label>
            <Input
              type="type"
              id="manufacturer"
              name="manufacturer"
              value={formData.manufacturer}
              onchange={handleChange}
              placeholder="Enter manufacturer name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <Label htmlFor="price">Price ($) *</Label>
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              placeholder="0.00"
              onchange={handleChange}
              step="0.01"
              min="0"
            />
            {errors.price && <p className="errorMsg">{errors.price}</p>}
          </div>

          <div className="form-group">
            <Label htmlFor="quantity">Quantity *</Label>
            <Input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onchange={handleChange}
              placeholder="0"
              min="0"
            />
            {errors.quantity && <p className="errorMsg">{errors.quantity}</p>}
          </div>
          <div className="form-group">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onchange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
            />
            {errors.weight && <p className="errorMsg">{errors.weight}</p>}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className={`btn-primary ${isSubmitting ? 'isSubmitting' : ''}`}
          >
            {isSubmitting ? 'Creating Product...' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
