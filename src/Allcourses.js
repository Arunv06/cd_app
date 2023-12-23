/*eslint-disable-next-line*/
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './images/lights.jpg';

import { useNavigate } from 'react-router-dom';

const Allcourses = () => {
  const navigate = useNavigate();
      // Add your logic here when a card is clicked
      // For example, you can redirect to a new page or show additional information
      //console.log(`Clicked on ${title}` );
      const courseDetails =  (e) => {
          console.log('-----', e)
          navigate(`/coursedetails/${e}`);
      }
      
  return (
     <div className="container-fluid p-5">


    {/* NavBar */}
    <nav class="navbar navbar-expand-sm navbar-dark bg-light">
  <div class="container-fluid">
    <a class="navbar-brand text-dark" href="j">My Courses</a>
    <a class="navbar-brand text-dark" href="j">My Dashboard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
    <ul class="navbar-nav me-auto">
       
       </ul>
      <form class="d-flex">
       
        <button class="btn btn-primary" type="button"  >Logout</button>
      </form>
    </div>
  </div>
</nav>

    {/* ROW 1 */}
    <h1>Greetings Name</h1>
    <div className="row">
    
      <div className="col-12 text-black" ><h4>Take a look into the list of all courses</h4></div>
    </div>
    <br />
    
    <div className="row">
    <div className="col-3  text-white">
      <div className="card"  style={{ width: '100%', height:'100%' }} onClick={() => courseDetails('CDL001')}>
      <img
        className="card-img-top"
        src="https://s2.research.com/wp-content/uploads/2021/01/24120039/ResponsiveWebDesign-1-1200x600.png"
        alt="responsive"
         style={{ width: '100%' }}
      />
      <div className="card-body ">
        <h4 className="card-title ">React js Basics</h4>
        <p className="card-text" >course<small> ID : CDLOO1</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div> 
    

    <div className="col-sm-3  text-white"><div className="card" style={{ width: '100%', height:'100%' }}  onClick={() => courseDetails('CDL001')}>
      <img
        className="card-img-top"
        src="https://miro.medium.com/v2/resize:fit:1400/1*OnQfMRB8bo_85MjWZwMA1w.png"
        alt="Card imge"
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h4 className="card-title">Node js Basics</h4>
        <p className="card-text" >course<small> ID : CDLOO2</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div>


    <div className="col-sm-3  text-white"><div className="card" style={{  width: '100%', height:'100%' }}>
      <img
        className="card-img-top"
        src="https://s2.research.com/wp-content/uploads/2021/01/24120039/ResponsiveWebDesign-1-1200x600.png"
        alt="Card imge"
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h4 className="card-title">Python Tutorial</h4>
        <p className="card-text" >course<small> ID : CDLOO3</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div>


    <div className="col-sm-3  text-white"><div className="card" style={{  width: '100%', height:'100%'}}>
      <img
        className="card-img-top"
        src="https://miro.medium.com/v2/resize:fit:1400/1*OnQfMRB8bo_85MjWZwMA1w.png"
        alt="Card imge"
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h4 className="card-title">Automation Testing</h4>
        <p className="card-text" >course<small> ID : CDLOO4</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div>
    </div>
    <br />
    

    {/* ROW 2 */}
    <div className="row">
    <div className="col-sm-3  text-white"  ><div className="card" style={{ width: '100%',height:'100%'}}>
      <img
        className="card-img-top"
        src="https://s2.research.com/wp-content/uploads/2021/01/24120039/ResponsiveWebDesign-1-1200x600.png"
        alt="Card imge"
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h4 className="card-title">Agile Guide</h4>
        <p className="card-text" >course<small> ID : CDLOO5</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div>
   


    <div className="col-lg-3 text-white"><div className="card" style={{  width: '100%', height:'100%'}}>
      <img
        className="card-img-top"
        src="https://miro.medium.com/v2/resize:fit:1400/1*OnQfMRB8bo_85MjWZwMA1w.png"
        alt="Card imge"
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h4 className="card-title">Devops Manual</h4>
        <p className="card-text" >course<small> ID : CDLOO6</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div>



    <div className="col-sm-3  text-white"><div className="card" style={{  width: '100%', height:'100%' }}>
      <img
        className="card-img-top"
        src="https://s2.research.com/wp-content/uploads/2021/01/24120039/ResponsiveWebDesign-1-1200x600.png"
        alt="Card imge"
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h4 className="card-title">Java&Spring Boot</h4>
        <p className="card-text" >course<small> ID : CDLOO7</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div>



    <div className="col-sm-3  text-white">
      <div className="card" style={{  width: '100%', height:'100%'}}>
      <img
        className="card-img-top"
        src="https://miro.medium.com/v2/resize:fit:1400/1*OnQfMRB8bo_85MjWZwMA1w.png"
        alt="Card imge"
        style={{ width: '100%' }}
      />
      <div className="card-body">
        <h4 className="card-title">Angular Tutorial</h4>
        <p className="card-text" >course<small> ID : CDLOO8</small> </p>
        <div className="row">
      <div className="col-6 bg-light p-3 text-black p-1">Start Date:<p>19-12-2022</p></div>
      <div className="col-6 bg-light p-3 text-black p-1">End Date:<p>15-06-2023</p></div>
      </div>
      </div>
    </div> </div>
    </div>

<br /> <br />

</div>
  
);
  };

export default Allcourses;
