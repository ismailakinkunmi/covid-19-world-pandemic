import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getcovid } from '../redux/covid/covid';
import styles from './styles/Continent.module.css';
import Header from './Header';

const Details = () => {
  const data = useSelector((state) => state.covid.covid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getcovid());
    }
  }, []);

  // Remove duplicate continents
  const mapped = data?.map((obj) => obj.continent);
  const filtered = mapped?.filter(
    (continent, index) => mapped?.indexOf(continent) === index,
  );
  return (
    <>
      <Header />
      <div className={styles.section}>
        {filtered?.map((info) => {
          if (info === '') {
            return null;
          }
          return (
            <div key={info}>
              <Link to={{ pathname: `/continent/${info}` }}>
                <div className={styles.continentCard}>
                  <div className={styles.textItems}>
                    <BsArrowRightCircle className={styles.arrow} />
                    <h1 className={styles.content}>{info}</h1>
                    <p className={styles.paragraph}>
                      Click here to view detailed continental Covid-19 data
                      {' '}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;
