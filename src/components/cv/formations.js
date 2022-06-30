const Formations = ({
  ecole,
  diplome,
  domaine,
  dateDebut,
  dateFin,
  resultat,
  aeta,
  description,
  photo,
}) => {
  return (
    <div className="form space">
      <img src={photo} alt="Logo de l'école" />
      <h3>Ecole : {ecole}</h3>
      <h3>Diplome : {diplome}</h3>
      <h3>Domaine : {domaine}</h3>
      <h3>
        Durée : {dateDebut} - {dateFin}
      </h3>
      <h3>Resultat : {resultat}</h3>
      <h3>Activités et association : {aeta}</h3>
      <h3>Description : {description}</h3>
    </div>
  );
};
export default Formations;
