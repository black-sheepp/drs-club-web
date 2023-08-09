import React from "react";

const Schedule = () => {
     return (
          <div id='schedule-section'>
               <h1 className='schedule-heading'>Schedule</h1>
               <div className=' shift'>
                    <div className='morning-shift'>
                         <div className='shift-heading justify-center w-1/3'>Morning Shift</div>
                         <div className='shift-timing'>
                              {/* lng- ladies and gents */}
                              <h4 className='lng-head'>Ladies & Gents</h4>
                              <p className='timing-display'>5:30 am - 7:00 am</p>
                              <p className='timing-display'>7:00 am - 8:30 am</p>
                              <p className='timing-display'>8:30 am - 10:00 am</p>

                              {/* lo - ladies only */}
                              <h4 className='lo-head'>Ladies Only</h4>
                              <p className='timing-display'>10:00 am - 11:30 am</p>
                         </div>
                    </div>
                    <div className='noon-shift'>
                         <div className='shift-heading justify-center w-1/3'>Noon Shift</div>
                         <div className='shift-timing'>
                              {/* lng- ladies and gents */}
                              <h4 className='lng-head'>Ladies & Gents</h4>
                              <p className='timing-display'>12:00 pm - 1:30 pm</p>
                              <p className='timing-display'>1:30 pm - 3:00 pm</p>
                         </div>
                    </div>
                    <div className='eve-shift'>
                         <div className='shift-heading justify-center w-1/3'>Evening Shift</div>
                         <div className='shift-timing'>
                              {/* lo - ladies only */}
                              <h4 className='lo-head'>Ladies Only</h4>
                              <p className='timing-display'>3:00 pm - 4:30 pm</p>

                              {/* lng- ladies and gents */}
                              <h4 className='lng-head'>Ladies & Gents</h4>
                              <p className='timing-display'>4:30 pm - 6:00 pm</p>
                              <p className='timing-display'>6:00 pm - 7:30 pm</p>
                              <p className='timing-display'>7:30 pm - 9:00 pm</p>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Schedule;
