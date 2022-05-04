import React from "react";
import {Modal,Button} from 'react-bootstrap';
import './AddMovie.css';


function AddMovie ({handleSubmit,handleChange,show, setShow}){
    
    const handleClose = () => setShow(false);
    return(
    
      <Modal  show={show} onHide={handleClose} >
        <div className="modal-box">
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body > 
            <input 
            className="add-input"
            name="title"
            type="text"
            placeholder="title.."
            onChange={handleChange}
            />
            <input 
            className="add-input"
            name="posterURL"
            type="text"
            placeholder="posterUrl.."
            onChange={handleChange}
            />
            <input 
            className="add-input"
            name="description"
            type='text'
            placeholder="description.."
            onChange={handleChange}
            />
            <input 
            className="add-input"
            name="Rating"
            type="text"
            placeholder="rate.."
            onChange={handleChange}
            /> 
            <input 
            className="add-input"
            name="id"
            type="text"
            placeholder="id.."
            onChange={handleChange}
            /> 
            <input 
            className="add-input"
            name="trailer"
            type="text"
            placeholder="trailerURL.."
            onChange={handleChange}
            />
           
            
        </Modal.Body>
        <Modal.Footer>
          <Button className="button1" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="button2" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    
    )
}
export default AddMovie;