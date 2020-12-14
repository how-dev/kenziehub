import { Link } from "react-router-dom";
import FormProfileUpdate from "../../components/form/formProfileUpdate";
import FormTechsUpdate from "../../components/form/formTechsUpdate";
import FormWorksUpdate from "../../components/form/formWorksUpdate";
import { Container } from "../../globalStyles";
import { useSelector } from "react-redux";
import "./index.css";

const Settings = () => {
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <div id="header">
        <Link to="/" className="link">
          Voltar a lista de alunos
        </Link>
        <h1>{user.name}</h1>
        <img
          alt="Avatar"
          src={
            user.avatar_url
              ? user.avatar_url
              : "https://i1.wp.com/static.teamtreehouse.com/assets/content/default_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png?ssl=1"
          }
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
