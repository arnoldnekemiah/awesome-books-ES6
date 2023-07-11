import { DateTime } from '../node_modules/luxon/src/luxon.js';

const currentTime = () => {
  const now = DateTime.now();
  const date = document.getElementById('time');
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED);
};
export default currentTime;