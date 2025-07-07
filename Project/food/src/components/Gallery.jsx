import React from "react";

const Gallery = ({ images, title }) => {

  return (
    <div>
        <h2> Your Screenshot Gallery!</h2>
        <div className="image-container">
            {images && images.length > 0 ? (
                images.map((pic, index) => (
                    <figure>
                    <img
                        key={index}
                        className="gallery-screenshot"
                        src={pic}
                        alt="Undefined screenshot from query"
                        width="150"
                        />
                        <figcaption>{title}</figcaption>
                      </figure>
                     
)
                
            )
        ) : (
         <div>
        <h3>You haven't made a screenshot yet!</h3>
        </div>
  )}
</div>
    </div>
  );
};

export default Gallery;