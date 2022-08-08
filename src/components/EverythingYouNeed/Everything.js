import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Everything.css';

function Everything(){
    return(
    <div className='container-fluid my-5'>
        <div className='sharp'>
            <div className='circle'>
                <div className='triangle'></div>
            </div>
        </div>
        <div className='text-center'>
            <h4>Solutions</h4>
            <h2>Everything You Need</h2>
        </div>

        <div className='d-flex justify-content-center mt-5'>
            
            <div className='block-solutions 
            '></div>
            <div className='block-solutions block-responsive'></div>
            <div className='block-solutions block-responsive'></div>
            <div className='block-solutions block-responsive'></div>
        </div>
    </div>
    );
};
export default Everything;