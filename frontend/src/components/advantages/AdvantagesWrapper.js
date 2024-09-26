import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {advantagesAction} from "../../store/actions/siteActions";
import AdvantagesItem from "./AdvantagesItem";

const AdvantagesWrapper = () => {

  const dispatch = useDispatch()
  const { advantages } = useSelector(state => state.site)

  useEffect(() => {
    if(!advantages.length) {
      dispatch(advantagesAction())
    }
  }, [advantages])

  return (
    <section className='advantages-section'>
      {advantages.length && advantages.map((item, index) => <AdvantagesItem key={index} item={item} index={index}/>)}

              <div className='advantage a-2'>
                <div className='advantage-top'>гарантируем</div>
                <div className='advantage-middle'>50%</div>
                <div className='advantage-bottom'>безопасность</div>
              </div>
              <div className='advantage a-3'>
                <div className='advantage-top'>календарик за</div>
                <div className='advantage-middle'>2001<span>г.</span></div>
                <div className='advantage-bottom'>в подарок</div>
              </div>
              <div className='advantage a-4'>
                <div className='advantage-top'>путешествие</div>
                <div className='advantage-middle'>597</div>
                <div className='advantage-bottom'>дней</div>
              </div>
            </section>
  );
};

export default AdvantagesWrapper;