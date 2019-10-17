import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

function LoadingLine(props) {
  const { width, height, randomWidthMin, randomWidthMax, randomHeightMin, randomHeightMax, unit} = props;
  const id = _.uniqueId("prefix-");

  let loadingWidth = width;
  let loadingHeight = height;

  if (randomWidthMax) {
    loadingWidth = getRandomSize(randomWidthMax, randomWidthMin);
  }

  if (randomHeightMax) {
    loadingHeight = getRandomSize(randomHeightMax, randomHeightMin)
  }
  
  const CustomStyle = createGlobalStyle`

  .img-elementor {

    .loading {

      .${id} {
        
        .line {

          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
          border-top-right-radius: 7px;
          border-top-left-radius: 7px;

        }

      }
    
    }
  
  }
    
    .${id} {
      .line {
        width: ${loadingWidth}${unit};
        height: ${loadingHeight}${unit};
        animation: loading-${id} 1.6s infinite linear;
        
        float: left;
        border-radius: 7px;
        background-image: linear-gradient(90deg, var(--primary-loading-bg-color) 0px, var(--secondary-loading-bg-color)40px, var(--primary-loading-bg-color) 80px);
        background-size: 600px;
      }

     
        
    }

    .post-text {

      .line {
        margin-bottom: 5px;
      }
    }

    @keyframes loading-${id} {
      0% {
        background-position: -100px;
      }
    
      40%, 100% {
        background-position: ${loadingWidth}${unit};
      }
    }

    @media only screen and (max-width: 959px) {

     

      .${id} {
        .line {
          background: background-color:var(--primary-loading-bg-color);
          width: 100%;
          @keyframes loading-${id} {
            0%     {background-color:var(--primary-loading-bg-color);}
            50.0%  {background-color:var(--secondary-loading-bg-color);}
            100.0%  {background-color:var(--primary-loading-bg-color);}
          }
        }
      }

      .sublist {

        .mb-30 {
          padding-bottom: 30px;
        }
        
        .post-text {
          .line {
            margin-bottom: 5px;
          }
        }
        
        .img-elementor {
          display: grid;

          .loading {

            .${id} {
              
              .line {
                height: 100% !important;
        
                margin-bottom: 0px;
              }

            }
          
          }
        
        }

        
        
      


      }

      


    } 
  `;

  return (
    <>
      <div className={id}>
        <div className="line" />
      </div>
      <CustomStyle/>
    </>
  );
}

function getRandomSize(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

LoadingLine.propTypes = {
  width: PropTypes.number,
  randomWidthMin: PropTypes.number,
  randomWidthMax: PropTypes.number,
  height: PropTypes.number,
  randomHeightMin: PropTypes.number,
  randomHeightMax: PropTypes.number,
  unit: PropTypes.string,
};

LoadingLine.defaultProps = {
  randomWidthMin: 0,
  randomHeightMin: 0,
  unit: 'px',
};

export default memo(LoadingLine);
