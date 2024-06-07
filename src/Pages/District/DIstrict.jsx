import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header';

const District = () => {
  const {id} = useParams();

  return (
    <>
      <Header/>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', paddingTop : '80px'}}>
           
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height : '20rem'}}>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/rajastan.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body text-center">
                            <h5 class="card-title mb-2">Badnor</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Beawar</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/harayana.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Bijayanagar</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Jaitaran</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
            </div>
           <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height : '20rem'}}>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/maharashtra.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Raipur</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/harayana.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Bhopalgarh</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/gujrat.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Bilara</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                        <div class="card-body">
                            <h5 class="card-title">Luni</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
          </div>
          <div  style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height : '20rem'}}>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                        <div class="card-body">
                            <h5 class="card-title">Mandor</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                        <div class="card-body">
                            <h5 class="card-title">Osiyan</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>
                <div class="card" style={{width: '15rem', height: '15rem', borderRadius : '18px'}}>
                    <img src="/uttarpradesh.png" class="card-img-top" alt="..." style={{width: '15rem', height: '7rem', borderRadius : '18px 18px 0px 0px'}} />
                        <div class="card-body">
                            <h5 class="card-title">Shergarh</h5>
                            <a href="#" class="btn btn-rounded btn-bluish-green">Go To Map</a>
                        </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default District