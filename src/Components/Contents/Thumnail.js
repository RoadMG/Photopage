import React, {useState} from 'react';
import './contents.css'
import Contents from './Contents';


const Thumbnail = () => {

    const [current, setCurrent] = useState(0);
    const [tempImg, setTempImg] = useState(''); 
    const getImg = (img) => {
      setTempImg(img);
      setCurrent(true);
    }

    return(
        <div>
            <div className='c-thumb'>
                {datas.map((item, index) => {
                  return(
                    <div className='c-thumpic' key={index} onClick={() => <Contents />}>
                      <img src={item.img} alt="" style={{width:'100%'}}/>
                    </div>
                  )
                })}
            </div>
        </div>
    )
}

export default Thumbnail;