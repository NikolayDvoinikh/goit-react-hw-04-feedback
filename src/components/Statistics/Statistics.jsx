import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const values = [
    { good: good },
    { neutral: neutral },
    { bad: bad },
    { total: total },
    { 'Positive Feedbacks': `${positivePercentage}%` },
  ];
  return (
    <ul className={styles.statisticList}>
      {values.map(value => (
        <li key={Object.keys(value)}>
          <p className={styles.text}>{`${Object.keys(value)}: ${Object.values(
            value
          )}`}</p>
        </li>
      ))}
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
