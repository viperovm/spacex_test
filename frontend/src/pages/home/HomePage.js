import React, {useEffect} from 'react';
import Header from "../../components/Header";
import AdvantagesWrapper from "../../components/advantages/AdvantagesWrapper";
import TitleWrapper from "../../components/TitleWrapper";
import {useDispatch, useSelector} from "react-redux";
import {advantagesAction} from "../../store/actions/siteActions";
import AdvantagesItem from "../../components/advantages/AdvantagesItem";

const HomePage = () => {

  const dispatch = useDispatch()
  const {advantages} = useSelector(state => state.site)

  const ProperMiddle = ({data}) => {
    if (data.replace(/[^a-zA-Z]/g, "")) {
      return (
        <div className='advantage-middle'>{data.replace(/[^0-9]/g, "")}<span>{data.replace(/[^a-zA-Z]/g, "")}</span>
        </div>
      )
    } else {
      return (
        <div className='advantage-middle'>{data}</div>
      )
    }
  }

  useEffect(() => {
    if (!advantages.length) {
      dispatch(advantagesAction())
    }
  }, [advantages])


  return (
    <div className="main-layout image arrow">
      <Header/>
      <main>
        <div className="wrapper">
          <div className="container main-section">
            <TitleWrapper/>
            <section className='advantages-section'>
              {advantages.length
              &&
              advantages.map((item, index) =>
                <>
                  <div className={`'advantage a-${index + 1}'`}>
                    <div className='advantage-top'>{item.top}</div>
                    <ProperMiddle data={item.middle}/>
                    <div className='advantage-bottom'>{item.bottom}</div>
                  </div>

                </>)}
              // <AdvantagesItem key={index} item={item} index={index}/>
            </section>
            {/*<AdvantagesWrapper/>*/}
          </div>
        </div>
      </main>
      <div className="arrow"/>
    </div>
  );
};

export default HomePage;