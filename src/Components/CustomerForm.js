import React, { useState } from 'react';
import { submitForm } from '../ComponentServices/ApiServices';

export function CustomerForm() {
  const [orderDate, setOrderDate] = useState('');
  const [company, setCompany] = useState('');
  const [owner, setOwner] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [requestForShipment, setRequestForShipment] = useState('');
  const [trackingID, setTrackingID] = useState('');
  const [length, setLength] = useState(0.0);
  const [breadth, setBreadth] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  const [boxCount, setBoxCount] = useState(0);
  const [specification, setSpecification] = useState('');
  const [checklistQuantity, setChecklistQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation for non-negative integers
    if (quantity < 0 || weight < 0 || boxCount < 0) {
        alert('Please enter non-negative values for quantity, weight, and box count.');
        return;
      }

      try {
        // Create an object with the form data
        const formData = {
          orderDate,
          company,
          owner,
          item,
          quantity,
          weight,
          requestForShipment,
          trackingID,
          length,
          breadth,
          height,
          boxCount,
          specification,
          checklistQuantity
        };

    // Handle form submission logic here
    const response = await submitForm(formData);
        console.log(response.data);

    // Reset form fields
    setOrderDate('');
    setCompany('');
    setOwner('');
    setItem('');
    setQuantity(0);
    setWeight(0.0);
    setRequestForShipment('');
    setTrackingID('');
    setLength(0);
    setBreadth(0);
    setHeight(0);
    setBoxCount(0);
    setSpecification('');
    setChecklistQuantity('');
    alert('Form submitted successfully!');
  } catch(error){
    console.log(error);
    alert('An error occurred while submitting the form. Please try again.');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order Date:
        <input type="date" 
        value={orderDate} onChange={(e) => setOrderDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
      </label>
      <br />
      <label>
        Company:
        <input type="text" 
        pattern="[A-Za-z0-9\s]+"
        value={company} onChange={(e) => setCompany(e.target.value)} />
      </label>
      <br />
      <label>
        Owner:
        <input type="text" 
        pattern="[A-Za-z0-9\s]+"
        value={owner} onChange={(e) => setOwner(e.target.value)} />
      </label>
      <br />
      <label>
        Item:
        <input type="text" 
        value={item} onChange={(e) => setItem(e.target.value)} />
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" 
        step="1" value={quantity} 
        onChange={(e) => setQuantity(Math.max(0, parseInt(e.target.value)))} />
      </label>
      <br />
      <label>
        Weight:
        <input type="number" 
        step="0.1" value={weight} 
        onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value)))} />
      </label>
      <br />
      <label>
        Request for Shipment:
        <input type="text" 
        value={requestForShipment} 
        onChange={(e) => setRequestForShipment(e.target.value)} />
      </label>
      <br />
      <label>
        Tracking ID:
        <input type="text" 
        value={trackingID} 
        onChange={(e) => setTrackingID(e.target.value)} />
      </label>
      <br />
      <label>
        Shipment Size:
        <br />
        Length:
        <input type="number"
          value={length}
          step="0.1"
          onChange={(e) => setLength(Math.max(0, parseFloat(e.target.value)))}
        />
        <br />
        Breadth:
        <input type="number"
          value={breadth}
          step="0.1"
          onChange={(e) => setBreadth(Math.max(0, parseFloat(e.target.value)))}
        />
        <br />
        Height:
        <input type="number"
          value={height}
          step="0.1"
          onChange={(e) => setHeight(Math.max(0, parseFloat(e.target.value)))}
        />
      </label>
      <br />
      <label>
        Box Count:
        <input type="number"
         step="1"
         value={boxCount} 
         onChange={(e) => setBoxCount(Math.max(0, parseInt(e.target.value)))} />
      </label>
      <br />
      <label>
        Specification:
        <input type="text" 
        value={specification} 
        onChange={(e) => setSpecification(e.target.value)} />
      </label>
      <br />
      <label>
        Checklist Quantity:
        <input type="text" 
        value={checklistQuantity} 
        onChange={(e) => setChecklistQuantity(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

