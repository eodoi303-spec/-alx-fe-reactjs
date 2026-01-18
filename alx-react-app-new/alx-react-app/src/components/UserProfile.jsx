//const UserProfile = (props) => {
  //return (
    //<div>
     //// <h2>{props.name}</h2>
      //<p>Age: {props.age}</p>
     // <p>Bio: {props.bio}</p>
    //</div>
 // );
//};

//export default UserProfile;
// 
function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>
        {props.name}
      </h2>

      <p style={{ margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>

      <p style={{ margin: '5px 0', color: '#555' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;



