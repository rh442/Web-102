import React from "react";

const Bans = ({ words, removeFromBan }) => {

  return (
    <div>
        <h2> Your Bans!</h2>
        <div className="ban-container">
            {words && words.length > 0 ? (
                words.map((filter, index) => (
                   
                        <button type="button" className="banned" key={index} onClick={()=>removeFromBan(filter)} >
                            {filter}
                        </button>
                     
)
                
            )
        ) : (
         <div>
        <h3>You haven't made a ban yet!</h3>
        </div>
  )}
</div>
    </div>
  );
};

export default Bans;