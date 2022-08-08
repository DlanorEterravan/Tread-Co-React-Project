import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './who.css';
import logo1 from '../assets/hi-peyson.png';
import logo2 from '../assets/hi-tomlinson.png';
import logo3 from '../assets/hi-true-haul.png';
import logo4 from '../assets/hi-trans-phos.png';


function Who(){
    return(
        <div className='container-fluid mt-5 pb-5 bg'>
            <h2 className='text-center pt-5'>Who is using Tread?</h2>
            <div className='d-flex justify-content-center'>
                <div className='mx-4 my-5 block-img'>
                    <img src={logo1}/>
                </div>
                <div className='mx-4 my-5 block-img responsiveImg'>
                    <img src={logo2}/>
                </div>
                <div className='mx-4 my-5 block-img responsiveImg'>
                    <img src={logo3}/>
                </div>
                <div className='mx-4 my-5 block-img responsiveImg'>
                    <img src={logo4}/>
                </div>
            </div>

            <div>
                <div className='d-flex justify-content-center next my-3'>
                        <div className='dot on'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                </div>
            </div>
        </div>
    );
}
export default Who;