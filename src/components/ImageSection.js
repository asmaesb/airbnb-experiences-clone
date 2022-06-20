import first from '../imgs/1.png';
import second from '../imgs/2.png';
import third from '../imgs/3.png';
import four from '../imgs/4.png';
import five from '../imgs/5.png';
import six from '../imgs/6.png';
import seven from '../imgs/7.png';
import eight from '../imgs/8.png';
import nine from '../imgs/9.png';

export default function ImageSection() {
  return (
    <div className="ImageSec">
      <div className="first">
        <img src = {first}/>
      </div>
      <div className='second'>
        <img src={second}/>
        <img src={third}/>
      </div>
      <div className='third'>
        <img src={four}/>
        <img src={five}/>
      </div>      <div className='fourth'>
        <img src={six}/>
        <img src={seven}/>
      </div>      <div className='fifth'>
        <img src={eight}/>
        <img src={nine}/>
      </div>
    </div>
  );
}
