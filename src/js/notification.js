export default class Notification {
  #elementToMessage;
  #classOff;

  constructor(ref, classOff) {
    this.#elementToMessage = ref;
    this.#classOff = classOff;
  }

  sendMessage(msg) {
    this.#elementToMessage.innerText = msg;
    this.#elementToMessage.classList.remove(this.#classOff);
  }

  clearMessage() {
    this.#elementToMessage.innerText = '';
    if (this.#elementToMessage.classList.contains(this.#classOff)) {
      this.#elementToMessage.classList.remove(this.#classOff);
    }
  }
}
