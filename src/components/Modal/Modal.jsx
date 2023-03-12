import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"
function CustomModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          <h2 className='mb-0' style={{color:`var(--primaryColor)`}}><strong>{props.selectedCapsule.capsule_serial}</strong></h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='list__item'>
            <p>Capsule Serial</p>
            <span>{props.selectedCapsule.capsule_serial}</span>
        </div>

        <div className='list__item'>
            <p>Status</p>
            <span>{props.selectedCapsule.status}</span>
        </div>

        <div className='list__item'>
            <p>Original Launch</p>
            <span>{props.selectedCapsule.original_launch}</span>
        </div>

        <div className='list__item'>
            <p>Landings</p>
            <span>{props.selectedCapsule.landings}</span>
        </div>


        <div className='list__item'>
            <p>Type</p>
            <span>{props.selectedCapsule.type}</span>
        </div>
        
        <div className='list__item'>
            <p>Reuse Count</p>
            <span>{props.selectedCapsule.reuse_count}</span>
        </div>

        <div className=' mt-4'>
            <p><strong>Details:</strong></p>
            <span>{props.selectedCapsule.details}</span>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
            <button onClick={props.onHide} className='btn__primary__fill'>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal