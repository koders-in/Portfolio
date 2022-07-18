import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";
import "./PortfolioCard.css";
import AOS from "aos";

function PortfolioCard({ imgSrc, delay, classTitle, position }) {

  const [idx, setIdx] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    if(idx>=imgSrc.length-1) {
      setIdx(0);
    }
    else {
      setIdx(prevIdx => prevIdx + 1);
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if(idx==0) {
      setIdx(imgSrc.length-1);
    }
    else {
      setIdx(prevIdx => prevIdx - 1);
    }
  };

  AOS.init();
  return (
    <div className="PortfolioCard">
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <div className={"portfolio-card-container " + classTitle}>
        <div className="img-zoom">
          {
            position=="left" ? <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                isFluidWidth: true,
                src: imgSrc[idx],
              },
              largeImage: {
                src: imgSrc[idx],
                width: 1900,
                height: 1100,
              },
              imageStyle: {
                transition: "all 0.3s ease-out"
              },
              enlargedImageStyle: {
                objectFit: 'contain',
              },
              enlargedImageContainerDimensions: {
                width: '100%',
                height: '150%'
              },
              lensStyle: {
                background: 'hsla(0, 0%, 100%, .3)',
                border: '1px solid #ccc',
                width: "50px",
                height: "50px"
              },
              enlargedImageContainerStyle: {
                position: 'absolute',
                zIndex: "10",
                backgroundColor: "black"
              }
            }}
          /> : <ReactImageMagnify
          {...{
            smallImage: {
              alt: "",
              isFluidWidth: true,
              src: imgSrc[idx],
            },
            largeImage: {
              src: imgSrc[idx],
              width: 1900,
              height: 1100,
            },
            imageStyle: {
              transition: "all 0.3s ease-out"
            },
            enlargedImageStyle: {
              objectFit: 'contain',
            },
            enlargedImageContainerDimensions: {
              width: '100%',
              height: '150%'
            },
            lensStyle: {
              background: 'hsla(0, 0%, 100%, .3)',
              border: '1px solid #ccc',
              width: "50px",
              height: "50px"
            },
            enlargedImageContainerStyle: {
              position: 'absolute',
              left: "-105%",
              zIndex: "10",
              backgroundColor: "black"
            }
          }}
        />
          }
          
        {/* </div>
        <div className="img-zoom">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "",
              isFluidWidth: true,
              src: imgSrc[0],
            },
            largeImage: {
              src: imgSrc[0],
              width: 1900,
              height: 1100,
            },
            enlargedImagePosition: 'over',
            enlargedImageStyle: {
              objectFit: 'contain',
            },
            enlargedImageContainerDimensions: {
              width: '100%',
              height: '150%'
            },
            lensStyle: {
              background: 'hsla(0, 0%, 100%, .3)',
              border: '1px solid #ccc',
              width: "50px",
              height: "50px"
            },
            enlargedImageContainerStyle: {
              position: 'absolute',
              zIndex: "10",
              backgroundColor: "black"
            }
          }}
        />
        </div>
        <div className="img-zoom">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "",
              isFluidWidth: true,
              src: imgSrc[0],
            },
            largeImage: {
              src: imgSrc[0],
              width: 1900,
              height: 1100,
            },
            enlargedImagePosition: 'over',
            enlargedImageStyle: {
              objectFit: 'contain',
            },
            enlargedImageContainerDimensions: {
              width: '100%',
              height: '150%'
            },
            lensStyle: {
              background: 'hsla(0, 0%, 100%, .3)',
              border: '1px solid #ccc',
              width: "50px",
              height: "50px"
            },
            enlargedImageContainerStyle: {
              position: 'absolute',
              zIndex: "10",
              backgroundColor: "black"
            }
          }}
        />
        </div>
        <div className="img-zoom">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "",
              isFluidWidth: true,
              src: imgSrc[0],
            },
            largeImage: {
              src: imgSrc[0],
              width: 1900,
              height: 1100,
            },
            enlargedImagePosition: 'over',
            enlargedImageStyle: {
              objectFit: 'contain',
            },
            enlargedImageContainerDimensions: {
              width: '100%',
              height: '150%'
            },
            lensStyle: {
              background: 'hsla(0, 0%, 100%, .3)',
              border: '1px solid #ccc',
              width: "50px",
              height: "50px"
            },
            enlargedImageContainerStyle: {
              position: 'absolute',
              zIndex: "10",
              backgroundColor: "black"
            }
          }}
        /> */}
        </div>
        
      </div>
      {/* <div className="title">
          <h4></h4>
        </div> */}
    </div>
  );
}

export default PortfolioCard;
