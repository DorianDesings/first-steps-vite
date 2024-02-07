import { counterElement } from './dom';

let counter = 0;

const updateCounter = () => {
	counterElement.textContent = counter;
};

const addCounter = () => {
	counter++;
	updateCounter();
};

const decreaseCounter = () => {
	counter--;
	updateCounter();
};

export { addCounter, decreaseCounter };
