import React from "react";

const Membership = () => {
     return (
          <div className='membership-section' id='membership-section'>
               <h1 className='membership-heading'>Membership</h1>
               <div className='membership-table'>
                    <div className="membership-table-heading">
                    <p>Duration</p>
                    <p>Gym + Cardio</p>
                    <p>Zumba</p>
                    </div>
                    <hr />
                    <div className="membership-table-data">
                        <p>15 Days</p>
                        <p>Rs 1200/-</p>
                        <p>Rs 600/-</p>
                    </div>
                    <div className="membership-table-data">
                        <p>1 Month</p>
                        <p>Rs 2000/-</p>
                        <p>Rs 1000/-</p>
                    </div>
                    <div className="membership-table-data">
                        <p>3 Month</p>
                        <p>Rs 5650/-</p>
                        <p>Rs 2700/-</p>
                    </div>
                    <div className="membership-table-data">
                        <p>6 Month</p>
                        <p>Rs 10500/-</p>
                        <p>Rs 5000/-</p>
                    </div>
                    <div className="membership-table-data">
                        <p>12 Month</p>
                        <p>Rs 19500/-</p>
                        <p>Rs 9000/-</p>
                    </div>
                    <hr className="horizontal-line"/>
               </div>
          </div>
     );
};

export default Membership;
