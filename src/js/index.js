import { addCounter, decreaseCounter } from './counter-functions';
import { buttonCounterAddElement, buttonCounterDecreaseElement } from './dom';

buttonCounterAddElement.addEventListener('click', addCounter);
buttonCounterDecreaseElement.addEventListener('click', decreaseCounter);
