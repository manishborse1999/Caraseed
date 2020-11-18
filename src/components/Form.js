import React from 'react'
import './css/form.css'
import useHubspotForm from '@aaronhayes/react-use-hubspot-form';
import icon3 from '../images/ecommerce.png'
import icon2 from '../images/retailer.png'
import icon1 from '../images/farmer.png'
const Form = () => {
     const { loaded, error, formCreated } = useHubspotForm({
        portalId: '7695925',
        formId: 'f4375fb5-2d46-47c6-aed8-dbcb52d5b185',
        target: '#my-hubspot-form'
    });

    
    return (
        
    <div class='form'>
       <h2>Connect with us</h2>
       <div className="form__content"> 
        <div className="form__left">
            <div className='form__leftIcon'>
                <img src={icon1} alt=""/>
                <p>Farmers</p>
            </div>
            <div className='form__leftIcon'>
                 <img src={icon2} alt=""/>
                <p>Retailers</p>
            </div>
            <div className='form__leftIcon'>
                <img src={icon3} alt=""/>
                <p>  E-Commerce </p>
            </div>
        

 </div>
        <div id='my-hubspot-form'>

        </div></div>
      
    </div>
    )
}

export default Form
