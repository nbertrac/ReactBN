const Competences = ({ nom, niveau }) => {
  return (
    <div className="comp">
      <h3>{nom} : </h3>
      <p>{niveau}</p>
    </div>
  );
};
export default Competences;
