import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>
        <Header />
        <Steps />
        <Description />
        <Testimonials />
        <GenerateBtn />     
    </div>
  )
}

export default Home

/*
JWT_SECRET = "secret#text"

# MongoDB Setup ( required )
MONGODB_URI = 'mongodb+srv://m30398505:mohith1818@cluster0.rnapj.mongodb.net'

# CLIPDROP API ( required )
CLIPDROP_API = 'e038a1b776804ed0cf44f6fb72e494b07919ee3e4b265fb4c03ae51a0777a92e89f8122a51b5c81652afc110e565d647'

# Razorpay Payment Integration
CURRENCY ='INR'
RAZORPAY_KEY_ID = 'rzp_test_EQ0YUGZHbAT2DG'
RAZORPAY_KEY_SECRET = 'cvQdw2owyvhYEe0GlfixqGVf'

# Stripe Payment Integration
STRIPE_SECRET_KEY = "------ Stripe Secret Key here ------"
*/

 
/*
VITE_BACKEND_URL = 'http://localhost:4000'
VITE_RAZORPAY_KEY_ID = 'rzp_test_EQ0YUGZHbAT2DG'
*/