import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalBtn = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalBtn = $('.modal__close');
		this.events();
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		return false;
	}

	closeModal() {
		this.modal.removeClass('modal--is-visible');
	}

	events() {
		this.openModalBtn.click(this.openModal.bind(this));

		this.closeModalBtn.click(this.closeModal.bind(this));
		// push any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if(e.keyCode==27) {
			this.closeModal();
		}
	}
}

export default Modal;
