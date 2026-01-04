import { useRef, useState } from 'react';
import './ProductForm.css';
import Form from '../ui/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ProductForm({ currentView, setCurrentView }) {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    category: '',
    sku: '',
    quantity: '',
    manufacturer: '',
    weight: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateProductForm = (data) => {
    const validationErrors = {};

    // Product Name validation
    if (!data.productName || data.productName.trim() === '') {
      validationErrors.productName = 'Product name is required';
    } else if (data.productName.trim().length < 3) {
      validationErrors.productName =
        'Product name must be at least 3 characters';
    }
    // Sku validation
    if (!data.sku || data.sku.trim() === '') {
      validationErrors.sku = 'SKU is required';
    } else if (data.sku.trim().length < 3) {
      validationErrors.sku = 'Product name must be at least 3 characters';
    }

    // Category validation
    if (!data.category) {
      validationErrors.category = 'Category is required';
    }

    // Price validation
    if (!data.price || data.price === '') {
      validationErrors.price = 'Price is required';
    } else if (parseFloat(data.price) <= 0) {
      validationErrors.price = 'Price must be greater than 0';
    }

    // Quantity validation
    if (!data.quantity || data.quantity === '') {
      validationErrors.quantity = 'Quantity is required';
    } else if (parseFloat(data.quantity) <= 0) {
      validationErrors.quantity = 'Quantity must be greater than 0';
    }

    // Weight validation
    if (!data.weight || data.weight === '') {
      validationErrors.weight = 'Weight is required';
    } else if (parseFloat(data.weight) <= 0) {
      validationErrors.weight = 'Weight must be greater than 0';
    }

    return Object.keys(validationErrors).length > 0 ? validationErrors : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateProductForm(formData);

    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const options = {
      method: 'POST',
      url: 'https://api.oluwasetemi.dev/products',
      headers: { 'Content-Type': 'application/json' },
      data: {
        name: formData.productName,
        description: formData.description,
        price: Number(formData.price),
        sku: formData.sku,
        compareAtPrice: null,
        barcode: null,
        quantity: Number(formData.quantity),
        category: formData.category,
        weight: Number(formData.weight),
        manufacturer: formData.manufacturer,
        tags: null,
        images: '',
        isDefault: null,
        owner: null,
        published: true,
        featured: true,
      },
    };

    try {
      const response = await axios.request(options);
      toast.success('Form Successfully Submitted');
      setFormData({
        productName: '',
        description: '',
        price: '',
        category: '',
        sku: '',
        quantity: '',
        manufacturer: '',
        weight: '',
      });
      const timeoutId  = setTimeout(() => {
        setCurrentView('list')
      }, 1500);            

      return response.data
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-form-container">
      <div className="form-header">
        <h1>Create New Product</h1>
        <p>Fill in the details below to add a new product to your inventory</p>
      </div>
      <ToastContainer />
      <Form
        errors={errors}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default ProductForm;
