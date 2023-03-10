import styles from './notification.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
