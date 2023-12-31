import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ProdListContext } from './ProdListContext'; // Import the context
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CategoryManagement = () => {
  const { categories, setCategories } = React.useContext(ProdListContext); // Access the categories from the context
  const [newCategory, setNewCategory] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editedCategory, setEditedCategory] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleNewCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== '' && !categories.find((category) => category === newCategory)) {
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      setNewCategory('');
    } else {
      alert(' This category is already added!');
    }
  };

  const handleEdit = (index) => {
    setEditedCategory(categories[index]);
    setEditIndex(index);
    setShowCategoryModal(true);
  };

  const handleSaveEdit = () => {
    if (editedCategory.trim() !== '') {
      const updatedCategories = [...categories];
      updatedCategories[editIndex] = editedCategory;
      setCategories(updatedCategories);
      setShowCategoryModal(false);
    }
  };

  const handleDelete = (index) => {
    const updatedCategories = categories.filter((_, idx) => idx !== index);
    setCategories(updatedCategories);
  };


  return (
  <div className="row">
    <div className="col-lg-4">
      <form style={formStyles} onSubmit={handleNewCategory}>
        <h3 style={{textAlign:'center'}}>Category Management</h3>
        <label htmlFor="prodCategory">
          <b>Set Category</b>
        </label>
        <Form.Control
       
          type="text"
          id="prodCategory"
          placeholder="Enter new category"                                                                                              
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}style={{padding:'10px',borderRadius:'15px',border:'3px solid lightgray'}}
          
        
        />
        <div className="d-grid gap-3">
      <Button variant="info" size="md" type='submit' style={{padding:'12px',marginTop:'15px'}}>
          Add Category
        </Button>
        </div>
      </form>
    </div>
    <div className="col-lg-8">
      <table className="table table-responsive">
        <thead className="text-center">
          <tr>
            <th scope="col" className="bg-warning text-white">Category</th>
            <th className="bg-warning text-white">Action</th>
          </tr>
        </thead>
        <tbody id="tbodyproducts" className="text-center">
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category}</td>
              <td>
                <button class="btn btn-primary" onClick={() => handleEdit(index)}>Update</button>
                <button class="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
        {showCategoryModal && (
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog" style={{ margin: '10% auto' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Category</h5>
              <button type="button" className="btn-close" color="none" aria-label="Close" onClick={() => setShowCategoryModal(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="editCategoryName">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editCategoryName"
                    value={editedCategory}
                    onChange={(e) => setEditedCategory(e.target.value)} 
                  />
                </div>
                {/* Other form fields for editing categories */}
              </form>
            </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowCategoryModal(false)}>
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
    </div>
  </div>
);
};

const formStyles = {
fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
backgroundColor: 'white',
padding: '0 20px',
fontSize: '16px',
};


export default CategoryManagement;




