import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
		<Modal
			isOpen={!!props.selectedOption}
			contentLabel="Selected Option"
			onRequestClose={props.handleClearSelectedOption}
			closeTimeoutMS={200}
			ariaHideApp={false}
			className="modal"
			>
			<h3 className="modal__title">Are you sure?</h3>
			<button className="button" onClick={props.onRemove}>Yes</button>
			<p><button className="button" onClick={props.handleClearSelectedOption}>No</button></p>
		</Modal>
	);


export default OptionModal;