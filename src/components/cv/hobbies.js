const Hobbies = ({ acti, niveau, frequence }) => {
  return (
    <div className="space">
      <h3>{acti}</h3>
      <h3>Niveau : {niveau}</h3>
      <h3>Frequence : {frequence}</h3>
    </div>
  );
};
export default Hobbies;
