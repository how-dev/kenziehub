import { Link } from "react-router-dom";
import FormProfileUpdate from "../../components/form/formProfileUpdate";
import FormTechsUpdate from "../../components/form/formTechsUpdate";
import FormWorksUpdate from "../../components/form/formWorksUpdate";
import { Container } from "../../globalStyles";
import "./index.css";

const Settings = ({ user }) => {
  return (
    <Container>
      <div id="header">
        <Link to="/" className="link">
          Return to all batatas
        </Link>
        <h1>Batata</h1>
        <img
          alt="{defaultImage}"
          src="https://img.freepik.com/fotos-gratis/batata-no-fundo-branco_1205-509.jpg?size=626&ext=jpg"
        />
      </div>
      <div id="forms">
        <FormProfileUpdate /**user.infos**/ />
        <FormTechsUpdate /**user.infos**/ />
        <FormWorksUpdate /**user.infos**/ />
      </div>
    </Container>
  );
};

export default Settings;
