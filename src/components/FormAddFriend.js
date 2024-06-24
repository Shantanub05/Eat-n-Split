import React from 'react'
import Button from './Button'

const FormAddFriend = () => {

    function handleSubmit(e){
e.preventDefault();
    }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🫂Friend Name</label>
      <input type="text" />
      <label>🌄Image URL</label>
      <input type="text" />
      <Button>Add </Button>
    </form>
  );
}

export default FormAddFriend
