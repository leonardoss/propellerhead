import moment from 'moment';

const formatDate = (date) => {
  return date != null ? moment(date).format("MM/DD/YYYY - H:mm:ss") : '-';
};

export {
  formatDate
};