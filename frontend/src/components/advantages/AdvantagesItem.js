import React from 'react';

const AdvantagesItem = ({item, index}) => {

  const ProperMiddle = ({data}) => {

    console.log(data)
    console.log(data.replace(/[^a-zA-ZА-Яа-я]/g, ""))
    console.log(data.replace(/[^0-9]/g, ""))

    if (data.replace(/[^a-zA-ZА-Яа-я]/g, "")) {
      return (
        <div className='advantage-middle'>{data.replace(/[^0-9]/g, "")}<span>{data.replace(/[^a-zA-ZА-Яа-я]/g, "")}</span></div>
      )
    } else {
      return (
        <div className='advantage-middle'>{data}</div>
      )
    }
  }

  return (
    <div className={`advantage a-${index + 1}`}>
      <div className='advantage-top'>{item.top}</div>
      <ProperMiddle data={item.middle}/>
      <div className='advantage-bottom'>{item.bottom}</div>
    </div>
  );
};

export default AdvantagesItem;