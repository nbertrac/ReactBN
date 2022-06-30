const Apropos = ({ para, photo }) => {
  return (
    <section className="presentation">
      <img src={photo} alt="propriétaire du CV" />
      <p>{para}</p>
    </section>
  );
};
export default Apropos;
