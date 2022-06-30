const Experiences = ({
  poste,
  type,
  noment,
  lieu,
  dateD,
  dateF,
  secteur,
  descriptif,
}) => {
  return (
    <div className="space">
      <h3>Intitulé du poste : {poste}</h3>
      <h3>Type d'emploi : {type}</h3>
      <h3>Nom de l'entreprise : {noment}</h3>
      <h3>Lieu : {lieu}</h3>
      <h3>
        Durée : {dateD} - {dateF}
      </h3>
      <h3>Secteur : {secteur}</h3>
      <h3>Descriptif : {descriptif}</h3>
    </div>
  );
};
export default Experiences;
