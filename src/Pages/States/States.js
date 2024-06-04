import React from 'react';

const States = () => {
    
    return (
        <div style={{height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <h4>States</h4>
           
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div class="card" style={{width: '15rem', height: '20rem'}}>
                    <img src="/rajastan.png" class="card-img-top" alt="..." style={{width: '15rem', height: '10rem'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <a href="#" class="btn btn-bluish-green">Go somewhere</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '20rem'}}>
                    <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '15rem', height: '10rem'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <a href="#" class="btn btn-bluish-green">Go somewhere</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '20rem'}}>
                    <img src="/harayana.png" class="card-img-top" alt="..." style={{width: '15rem', height: '10rem'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <a href="#" class="btn btn-bluish-green">Go somewhere</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '20rem'}}>
                    <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '15rem', height: '10rem'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <a href="#" class="btn btn-bluish-green">Go somewhere</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '20rem'}}>
                    <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '15rem', height: '10rem'}} />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <a href="#" class="btn btn-bluish-green">Go somewhere</a>
                        </div>
                </div>
            </div>
           <div></div>
        </div>
    )
}

export default States;
