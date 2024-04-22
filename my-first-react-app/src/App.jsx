function App() {

  return (
    <div className='Scontainer' style={{padding:"5%"}}>
      <h2 style={{color:'#222831'}}>Subject</h2>
      <br></br>
      <br></br>
      <br></br>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card " style={{height:"200px",width: "350px",backgroundColor:"#76ABAE",borderRadius: "25px"}}>
        <div className="card-body d-flex align-items-center justify-content-center">
          <h5 className="card-title"style={{color:"#FFFFFF"}}>Level 1</h5>
        </div>
      </div>
    </div>
    <div className="col" >
      <div className="card" style={{height:"200px", width: "350px",backgroundColor:"#76ABAE",borderRadius: "25px"}}>
        <div className="card-body d-flex align-items-center justify-content-center">
          <h5 className="card-title" style={{color:"#FFFFFF"}}>Level 2</h5>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{height:"200px",width: "350px",backgroundColor:"#76ABAE",borderRadius: "25px"}}>
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 className="card-title" style={{color:"#FFFFFF"}}>Level 3</h5>
        </div>
      </div>
    </div>
  </div>
  </div>
    );
  
}

export default App
