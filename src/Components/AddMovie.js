import { useState } from "react";

function AddMovie({onSubmit}) {
  const [title,setTitle] = useState('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(title);  
    setTitle(''); 
  };

  const onChangeInput = (event) => {
    setTitle(event.target.value);
  };

    return (
      <div>
       <form className="flex justify-center" onSubmit={onSubmitForm}>
          <input className="block border border-gray-300 rounded-lg p-2 px-8 m-3" 
          onChange={onChangeInput} value={title} placeholder="Enter a movie.."/>
          <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2 px-8 m-3">
            Add
          </button>
       </form>
      </div>
    );
  }
  
  export default AddMovie;
