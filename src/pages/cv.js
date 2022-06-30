// Components cv
import Apropos from "../components/cv/apropos";
import Formations from "../components/cv/formations";
import Experiences from "../components/cv/experiences";
import Competences from "../components/cv/competences";
import Diplomes from "../components/cv/diplomes";
import Hobbies from "../components/cv/hobbies";
import Certifications from "../components/cv/certifications";
// Image
import LogoReact from "../img/logo192.png";
import LogoIpssi from "../img/logo-IPSSI.jpeg";
import LogoGreta from "../img/logo-GRETA-92.png";

export default function Cv() {
  return (
    <>
      <h1>CV</h1>
      <Apropos
        photo={LogoReact}
        para="Je suis Bertrac Nathan, Developpeur Web"
      />
      <section>
        <h2>Formations</h2>
        <Formations
          ecole="IPSSI"
          diplome="Bachelor développeur fullstack devops"
          domaine="Developpement Web"
          dateDebut="Mars 2022"
          dateFin="Janvier 2023"
          resultat="En attente"
          aeta="Lorem ipssum"
          description="La formation vise à former des développeurs fullstack et devOps aptes à concevoir et réaliser n'importe quel projet web, mobile, logiciel ou applicatif. Cette formation en alternance donne les compétences techniques et opérationnelles recherchées par les startups de la French tech, les agences web ou permet encore d'être autonome en devenant indépendant."
          photo={LogoIpssi}
        />
        <Formations
          ecole="GRETA des Hauts-de-seine"
          diplome="TP Développeur web et web mobile"
          domaine="Developpement Web"
          dateDebut="Octobre 2020"
          dateFin="Juillet 2021"
          resultat="Obtenue"
          aeta="Lorem ipssum"
          description="Formation de réorientation dans le domaine de développement web."
          photo={LogoGreta}
        />
      </section>
      <section>
        <h2>Expériences</h2>
        <Experiences
          poste="Développeur Web FullStack"
          type="Stage"
          noment="GRETA des Hauts de seine"
          lieu="41 Rue des 3 Fontanot, 92000 Nanterre"
          dateD="Mars 2021"
          dateF="Mai 2021"
          secteur="Developpement Web"
          descriptif="Developpement site web avec PHP 7, MySQL et javascript"
        />
      </section>
      <section>
        <h2>Competences</h2>
        <Competences nom="PHP 7" niveau="Bon" />
        <Competences nom="MySQL" niveau="Bon" />
        <Competences nom="Javascript" niveau="Bon" />
        <Competences nom="React" niveau="Debutant" />
      </section>
      <section>
        <h2>Diplômes</h2>
        <Diplomes
          ecole="IPSSI"
          diplome="Bachelor développeur fullstack devops"
          dater="En attente"
          resultat="En attente"
        />
      </section>
      <section>
        <h2>Certifications</h2>
        <Certifications
          ecole="Hyland University"
          diplome="Nuxeo Frontend Advanced Certification"
          dater="11 avril 2022"
          resultat="Obtenu"
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <Hobbies acti="Lecture" niveau="Très bon" frequence="Tous les jours" />
      </section>
    </>
  );
}
