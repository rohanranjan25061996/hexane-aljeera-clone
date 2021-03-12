import React from 'react';
// import LandingCard from './LandingCard';
// import { getUsers } from './Utils';
import Single from './Single';
// import styles from '../Economy/Styles/Economy.module.css';
// import { HeaderData } from '../Economy/HeaderData';
// import { SideEco } from '../Economy/SideEco';
// import { useHistory } from 'react-router';
import { Economy } from '../Economy/Economy';
import { Corona } from '../Coronavirus/Corona';
import styles from './Landing.module.css';
const Landing = () => {
  // const [general, setGeneral] = React.useState([]);
  // const [coronavirus, setCoronavirus] = React.useState([]);
  // const [economy, setEconomy] = React.useState([]);
  // const [features, setFeatures] = React.useState([]);
  // const [opinion, setOpinion] = React.useState([]);

  // React.useEffect(() => {
  //   getUsers('coronavirus').then((res) => setCoronavirus(res.data));
  //   getUsers('economy').then((res) => setEconomy(res.data));
  //   getUsers('features').then((res) => setFeatures(res.data));
  //   getUsers('opinion').then((res) => setOpinion(res.data));
  // }, []);
  // const history = useHistory();
  // const redirectToUrl = (id) => {
  //   history.push(`/corona/${id}`);
  // };
  return (
    <div className={styles.main}>
      <h1>General News</h1>
      {
        <Single
          title='Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns'
          description="Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it's just too damn unsafe for him to travel to America during the COVID-19 pandemic."
          image='https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg'
          source='TMZ.com'
        />
      }
      <h1>Coronavirus related news</h1>
      <Single
        title='This may be the big winner of the market crash'
        description='This may be the big winner of the market crash.'
        image='https://cdn.cnn.com/cnnnext/dam/assets/150325082152-social-gfx-cnn-logo-super-169.jpg'
        source='CNN'
      />
      <Corona />
      <h1>Economic News</h1>
      <Single
        title='2022 Kia EV6 Teased, Will Become The Brand’s First Dedicated EV - CarScoops'
        description='The EV6 could have up to 302 hp.'
        image='https://www.carscoops.com/wp-content/uploads/2021/03/2022-Kia-ES6.jpg'
        source='IMDB'
      />
      <Economy />
      {/* <h1>Entertainment News</h1>
      <Single
        title='Bitcoin Suddenly Soars Toward $60,000 Price—Roaring Past $1 Trillion As Fear Grips Tech Stocks",'
        description='The bitcoin price added almost 10% over the last 24 hours, taking it within touching distance of its all-time highs...'
        image='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F602fddbc99a798c04f9de3b0%2F0x0.jpg'
        source='TOI'
      />
      {features.map((items) => (
        <LandingCard key={items.id} {...items} />
      ))}
      <h1>Technology News</h1>
      <Single
        title='How to Tell If You are Being Tracked by Apple AirTags'
        description='AirTags aren’t a thing yet—at least, not when we wrote this—but the oft-rumored tracking devices, about the size of a coin, should debut soon. And when they do, Apple is already building security features into iOS 14.5 to prevent people from secretly tracking…'
        image='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/tvdl0j37zjg0vj9cnrvp.jpg'
        source='IND'
      />
      {opinion.map((items) => (
        <LandingCard onC key={items.id} {...items} />
      ))} */}
    </div>
  );
};

export default Landing;
