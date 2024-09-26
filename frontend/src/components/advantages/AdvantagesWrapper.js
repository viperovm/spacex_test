import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {advantagesAction} from "../../store/actions/siteActions";
import AdvantagesItem from "./AdvantagesItem";

const AdvantagesWrapper = () => {

  const dispatch = useDispatch()
  const {advantages} = useSelector(state => state.site)

  useEffect(() => {
    if (!advantages.length) {
      dispatch(advantagesAction())
    }
  }, [advantages])

  return (
    <section className='advantages-section'>
      {advantages.length && advantages.map((item, index) => <AdvantagesItem key={index} item={item} index={index}/>)}
    </section>
  );
};

export default AdvantagesWrapper;