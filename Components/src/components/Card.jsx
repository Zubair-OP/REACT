function Card(props) {
  return (
    <div className="m-4 bg-white text-black inline-block p-4 rounded text-center">
      <img
        className="ml-8 w-32 h-32 rounded-full mb-3"
        src={props.profilePhoto}
        alt=""
      />
      <h1 className="font-semibold mb-3 text-2xl">{props.name}</h1>
      <h4 className="text-blue-500">{props.profession}</h4>
      <h2>
        {props.profession} {props.city}
      </h2>
      <button className="mt-4 bg-emerald-700 text-white py-2 px-4 rounded font-medium">
        Click Me
      </button>
    </div>
  );
}

export default Card;
