import React from 'react';

const ConfirmModal = ({title,message , closemodal,succesAction,doctor}) => {
    return (
        <div>
            

       

{/* Put this part before </body> tag */}
<input type="checkbox" id="confirm-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={()=>succesAction(doctor)} htmlFor="confirm-modal" className="btn">Delete</label>


      <button onClick={ closemodal}  className='btn btn-outline '>Cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmModal;