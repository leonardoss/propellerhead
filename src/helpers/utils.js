const formatDate = date => {
  return date != null ? moment(date).format('MM/DD/YYYY - H:mm:ss') : '';
};
const isEmpty = obj => Object.keys(obj).length === 0;

export { formatDate, isEmpty };
