const Card = ({ title, desc, image }) => {
  return (
    <div className="card">
      <h2>titre : {title}</h2>
      <p>Description: {desc}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
