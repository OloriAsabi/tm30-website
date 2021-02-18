import React from 'react'
import styled from "@emotion/styled"
import heroBg from "assets/images/1 1.png"
import Dev from "assets/icons/Group 32.png"
import Training from "assets/icons/Group.png"
import Consulting from "assets/icons/Group 33.png"
import { CustomButton } from 'reusables/CustomButton'
import dottedBox from "assets/icons/Group 3.png"
import mobile from "assets/icons/Group 30.png"
import PMB from "assets/images/PMB_Home 1.png"
import eduSpons from "assets/images/eduspons.png"
import backup from "assets/images/ios backup cash 1.png"
import { Link } from 'react-router-dom'
import blog1 from "assets/images/Rectangle 495.png"
import blog2 from "assets/images/Rectangle 496.png"
import blog3 from "assets/images/Rectangle 497.png"

const projects = [
    {
       name  :"PayMyBills" ,
       desc : "A Whatsapp payment platform.",
       link : "",
       image: PMB,
       bgColor : "#74C372" 
    },
    {
        name  : "Backup Cash",
        desc : "A financial savings application.",
        link : "",
        image: backup,
        bgColor : "#F5DD01" 
     },
     {
        name  : "Edusponsor",
        desc : "An exam sponsoring platform.",
        link : "",
        image: eduSpons,
        bgColor : "#FF57A5" 
     }
]

const Home = () => {
    let arrow = ">"
    return (
        <Home.Wrapper>
          <div className="hero">
              <div className="text">
                  <h1>We help organizations <span>develop</span> technology-driven solutions</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque facilisis porttitor in dui magna blandit lorem pellentesque. Orci sed enim egestas enim nulla enim accumsan.</p>
                   <CustomButton>About Us</CustomButton> 
              </div>
            <img src={heroBg} alt=""/>
          </div>
          <section className="what-we-do">
            <h1>What we do</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed vulputate tellus pellentesque tempor. Vitae leo cras eu vitae molestie.</p>
            <div className="details-container">
            <div className="details">
               <div className="first"><img src={Dev} alt=""/></div> 
                <div className="text">
                <h1>Development</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.</p> 
                </div>
            </div>
            <div className="details">
             <div className="first"> <img src={Training} alt=""/></div>
                <div className="text">
                <h1>Training</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.</p> 
                </div>
            </div>
            <div className="details">
            <div className="first"> <img src={Consulting} alt=""/></div>
                <div className="text">
                <h1>Consulting</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit olsen.</p> 
                </div>
            </div>
            </div>
     
          </section>
          <div className="services-container">
              <div className="dotted-box"><img src={dottedBox} alt=""/></div>
              <div className="text">
                  <h1>Our Services</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed vulputate tellus pellentesque tempor. Vitae leo cras eu vitae molestie.</p>
                  <CustomButton>Discover</CustomButton>
              </div>
              <div className="service">
                  <div className="container">
                      <div className="first"> <img src={Dev} alt=""/></div>
                      <h1>Web <br/> Development</h1> 
                  </div>
                  <div className="container mobile">
                      <div className="first"><img src={mobile} className="" alt=""/></div> 
                      <h1>Mobile <br/> Development</h1> 

                  </div>
                  <div className="container">
                      <div className="first"> <img src={Dev} alt=""/></div>
                      <h1>Software <br/> Integration</h1>
                  </div>
                  
                  <div className="container">
                      <div className="first"> <img src={Training} alt=""/></div>
                      <h1>UI/UX  <br/>Design</h1>
                  </div>
                  <div className="container">
                      <div className="first"> <img src={Consulting} alt=""/></div>
                      <h1>IT <br/> Consulting</h1>
                  </div>
              </div>
          </div>
       
       <div className="projects">
       <div className="text">
                  <h1>Our Works</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed vulputate tellus pellentesque tempor. Vitae leo cras eu vitae molestie.</p>
                  <CustomButton>Explore</CustomButton>
              </div>
          <div className="project">
            <div className="header">
             <p>All</p>
             <p>Web</p>
             <p>Mobile</p>
             </div>
             <div className="container">
             {
                 projects.map(proj => (
                     <section key={proj.name}>
                         <div className={`bg`} style={{backgroundColor : `${proj.bgColor}`}}>
                             <img src={proj.image} alt=""  className={`${proj.name === "Edusponsor" && "edu"}`}/>
                         </div>
                         <h2>{proj.name}</h2>
                         <p>{proj.desc}</p>
                         <Link to={proj.link}>View project {arrow} </Link>
                     </section>
                 ))
             }
           
            </div>     
         </div>    

       </div>
       <div className="blog">
           <div className="header">
               <h1>Explore Our Blog</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed vulputate tellus pellentesque tempor. Vitae leo cras eu vitae molestie.</p>
           </div>
           <div className="blogs">
             <div className="single-blog">
                 <img src={blog1} alt=""/>
                 <p className="date">admin l 20 Dec 20</p>
                 <h1>Working in the tech sector</h1>
                 <p>Read more</p>
             </div>

             <div className="single-blog">
             <img src={blog2} alt=""/>
                 <p className="date">admin l 20 Dec 20</p>
                 <h1>Comparison chart for Apps</h1>
                 <p>Read more</p>
             </div>

             <div className="single-blog">
             <img src={blog3} alt=""/>
                 <p className="date">admin l 20 Dec 20</p>
                 <h1>Right time to join the Cloud?</h1>
                 <p>Read more</p>
             </div>
           </div>
       </div>
       <div className="testimonial">
           <div className="header">
               <h1>Testimonials</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sed vulputate</p>
           </div>

       </div>
       
        </Home.Wrapper>
    )
}

export default Home

Home.Wrapper = styled.div`
.hero{
    background: linear-gradient(180deg, #61D0FF 0%, rgba(240, 250, 255, 0) 151.33%);
    display : flex;
    justify-content : space-between;
    .text{
        width : 50%;
        align-self : center;
        padding-left: 8rem;
        h1{
            width: 100%;
            font-size: 37px;
            line-height: 49px;
            color: #000D36;
            span{
                color : #A061FF;
            }
        }
        p{
            font-size: 14px;
            line-height: 28px;
            color: rgba(0, 13, 54, 0.45);
            font-weight: bold;  
            margin: 2rem 0;
        }
    }
    img{
        height: 576px;
        width : 56%;
    }
}
.what-we-do{
    margin: 8rem 0;
    padding : 1.5rem 8rem;
   & > h1{
    font-weight: 800;
    font-size: 40px;
    line-height: 49px;
    color: #000D36;
    text-align: center;
    }
   & > p{
     font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: rgba(0, 13, 54, 0.45); 
    width: 489px;
    margin: 1rem auto;
    }
    .details-container{
        margin: 6rem 0 0 auto;
        display: flex;
        justify-content: space-between;
     
        .details{
            display: flex;
           justify-content: space-between;
           align-items: center;
           width: 30%;
           .first{
            padding: 1.3rem 1.1rem;
            background: rgba(97, 208, 255, 0.25);
            border-radius: 35px;
            align-self: flex-start;
            text-align: center;
           }
           img{
            width: 90%;
           }
           .text{
               width: 78%;
               h1{
                font-size: 24px;
                line-height: 29px;
                color: #000D36;
                margin: 0 0 1rem 0;
               }
               p{
                font-weight: bold;
                font-size: 14px;
                line-height: 26px;
                color: rgba(0, 13, 54, 0.45);
                width: 87%;
               }
     
           }
        }
    }
}
.services-container{
    display: flex;
    justify-content: space-between;
    padding : 8rem;
    position: relative;
    .dotted-box{
        position: absolute;
        left: 0;
        top: 7%;
        width: 200px;
        img{
            width: 70%;
        }
    }
    .text{
        width: 30%;
        align-self: center;
        h1{
            font-size: 40px;
            line-height: 49px;
            color: #000D36;
        }
        p{
            font-weight: bold;
            font-size: 14px;
            line-height: 28px;
            color: rgba(0, 13, 54, 0.45);
            margin: 1.5rem 0;
        }
    }
    .service{
        width: 60%;
        display: flex;
            flex-wrap: wrap;
        .container{
           margin: 2rem 0;
            width: 33%;
            &.mobile{
                margin-bottom: 10rem;
                .first{
                padding: 1.3rem 2rem;  
                }
            }
            .first{
            padding: 1.3rem 1.3rem;
            background: white;
            border-radius: 35px; 
            width: fit-content;
            text-align: center;
            margin-bottom: 4rem;
            img{
            width: 90%;
           }    
            img{
        
           }
            }
        }
    }
}
.projects{
    display: flex;
    justify-content: space-between;
    padding : 8rem;
    .text{
        width: 30%;
        align-self: center;
        h1{
            font-size: 40px;
            line-height: 49px;
            color: #000D36;
        }
        p{
            font-weight: bold;
            font-size: 14px;
            line-height: 28px;
            color: rgba(0, 13, 54, 0.45);
            margin: 1.5rem 0;
        }
    }
    .header{
        display : flex;
        margin-right: 1rem;
        /* justify-content: space-evenly; */
        p{
            font-weight: bold;
            font-size: 14px;
            line-height: 28px;
            color: #000D36;
            margin : 0 2rem;
            cursor: pointer;
        }
    }
    .project{
        width: 60%;
       .container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        section{
            width: 30%;
            background: #FCFEFF;
            box-shadow: 15.4749px 25.7915px 41.2663px rgba(64, 64, 64, 0.05);
            border-radius: 30px;
            padding: 1rem 1rem 2rem ;
          .edu{
                position: relative;
                left: 50px;
                top: 30px;
            }
            div{  
                border-radius: 20.6332px;
                height: 175.38px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            h2{
                font-size: 20px;
                line-height: 24px;
                color: #000D36;
                margin : 1.5rem 0;
            }
            p{
                font-weight: bold;
                font-size: 14px;
                line-height: 17px;
                color: rgba(0, 13, 54, 0.45);
                margin : 1.5rem 0;
            }
            a{
                color: #61D0FF;
                text-decoration: none;
                font-weight: bold;
                font-size: 14px;
                line-height: 17px;
            
            }
        }
       }
    }
}
.blog{
    .header{
        h1{
            font-size: 40px;
            line-height: 49px;
            color: #000D36;
            text-align: center;
        }
        p{
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
            width: 489px;
            color: rgba(0, 13, 54, 0.45);
            margin : 2rem auto;
            text-align: center;
        }
    }

    .blogs{
        padding : 0 8rem;
        margin : 4rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > * {
            width: 30%;
            background: #FCFEFF;
            box-shadow: 15px 25px 40px rgba(64, 64, 64, 0.05);
            border-radius: 30px;
            
            img{
                width: 100%;
            }
            p, h1{
                padding: 1rem;
                font-weight: bold;
                font-size: 14px;
                line-height: 17px;
                color: #61D0FF;
            }
            .date{
                font-size: 14px;
                line-height: 17px;
                color: rgba(0, 13, 54, 0.45);
            }
            h1{
                font-size: 24px;
                line-height: 29px;
                color: #000D36;
            }
        }
    }
}

.testimonial{
    margin: 7rem 0;  
    .header{
        & > *{
           text-align: center; 
        }
        h1{
            font-size: 40px;
            line-height: 49px;
            color: #000D36;
        }
        p{
            font-weight: bold;
            font-size: 14px;
            line-height: 28px;
            text-align: center;
            color: rgba(0, 13, 54, 0.45);
        }
    }
}

`