import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../../components/primaryBtn/PrimaryBtn';


const DrentalCare = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content gap-8 lg:gap-24 flex-col-reverse lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
     <PrimaryBtn>Get Started</PrimaryBtn>
    </div>
  <figure>
    <img className='lg:max-w-md rounded-lg ' src={treatment} alt="" />
  </figure>
  </div>
</div>
        </div>
    );
};

export default DrentalCare;