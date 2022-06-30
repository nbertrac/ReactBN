const Certifications = ({ ecole, diplome, dater, resultat }) => {
  return (
    <div className="space">
      <h3>Ecole : {ecole}</h3>
      <h3>Nom : {diplome}</h3>
      <h3>Date de reception : {dater}</h3>
      <h3>Resultat : {resultat}</h3>
    </div>
  );
};
export default Certifications;
