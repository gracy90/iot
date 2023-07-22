import {  useState } from "react";
// import {
//   // collection,
//   // getDocs,
//   // query,
//   // where,
//   // orderBy,
//   // limit,
//   // startAfter,
// } from "firebase/firestore";
// import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import Chart from "../components/charts";
import Card from "../components/CustomPanel";
import { Animation} from "rsuite";
import NavBar from "../components/navBar";

function ViewReport() {
  // const [datas, setDatas] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [reload, setReload] = useState(false);
  const [show, setShow] = useState('image')

  // useEffect(() => {
  //   fetchDatas();
  // }, [reload]);

  // const fetchDatas = async () => {
  //   try {
  //     // get reference
  //     const datasRef = collection(db, "listings");
  //     // create a querry
  //     const q = query(datasRef, orderBy("timestamp", "desc"));
  //     //Execute querry
  //     const querySnap = await getDocs(q);
  //     let listings = [];
  //     querySnap.forEach((doc) => {
  //       console.log(doc.data());
  //       return listings.push({
  //         id: doc.id,
  //         data: doc.data(),
  //       });
  //     });
  //     console.log(datas);
      // setDatas(listings);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  //reloads data after every 3000millisecnd
  // setInterval(() => {
  //   setReload((prev) => 
  //     !prev
  //   );
  // }, 3000);

  // TODO:implement logic for displaying data


  return (
    <>
    <NavBar />
    <div className="ViewReportContainer">
      <p className="SensorDataHeaderMain">Report Overview</p>
      {/* {loading ? ( */}
        <Spinner></Spinner>
        {/* ) : ( */}
          <div className="ViewReportDataContainer">
         
          {/* <div>
            <p className="SensorDataHeader">Captured Images</p>
            <div className="DataContainer">
            <p className="SensorData">56</p>
            </div>
          </div> */}
          <Card onClick={()=> setShow('chart')} children={<div style={{display:'flex'}}><Chart height={60} width={150} /> <p>put a component here</p></div>} title='Sound Intensity' style={ {height:'120px', width:'400px'}} />
          <Card onClick={()=> setShow('image')} children={<div style={{display:'flex'}}> <img src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" height={60} width={150} /><p>put a component here</p></div>} title='Sound Intensity' style={ {height:'120px', width:'400px'}} />
          <Card onClick={()=> setShow('other')} children={<div style={{display:'flex'}}><Chart height={60} width={150} /><p>put a component here</p></div>} title='Sound Intensity' style={ {height:'120px', width:'400px'}} />
          
          {/* <div>
            <p className="SensorDataHeader">Sound Intensity</p>
            <div className="DataContainer">
            <p className="SensorData">45</p>
            </div>
          </div> */}
          {/* <div>
            <p className="SensorDataHeader">Inference</p>
            <div className="DataContainer">
            <p className="SensorData">87</p>{" "}
            </div>
          </div> */}
          <Animation.Bounce in={show === 'chart'} unmountOnExit  timeout={1000} >{(props, ref) => 
            <Card {...props} ref={ref} children={<Chart height={400} width={1000} />} title={<h2>Chat titlt</h2>} style={ {height:'500px', width:'1000px', position:'absolute', top:'220px'}} />
          }
          </Animation.Bounce>
          <Animation.Bounce 
            in={show === 'image'} 
            timeout={1000}
            unmountOnExit>
              {(props, ref) => 
              <Card  {...props} 
              ref={ref} 
              children={
                <img src="https://avatars.githubusercontent.com/u/8225666" 
                  alt="@SevenOutman" height={400} width={'100%'} />} 
                  title={<h2>Sound Intensity (50db)</h2>} 
                  style={ {height:'500px', width:'1000px', position:'absolute', top:'220px'}} 
                  />
                }
        </Animation.Bounce>
         
        </div>
      {/* )} */}
    </div>
      </>
  );
}

export default ViewReport;
