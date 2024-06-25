import React from 'react'
import Button from './Button';

const FormSplitBill = ({selectFriend}) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectFriend.name}</h2>
      <label>💰Bill Value</label>
      <input type="text" />
      <label>🧑Your Expenses </label>
      <input type="text" />
      <label>🫂X's Expenses </label>
      <input type="text" disabled />
      <label>🤑Who is paying the bill?</label>
      <select><option value='user'>You</option>
      <option value='friend'>X</option></select>
      <Button>Split Bill </Button>
    </form>
  );
}

export default FormSplitBill
