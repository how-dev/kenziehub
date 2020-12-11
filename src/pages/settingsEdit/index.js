import { Link } from "react-router-dom";
import FormProfileUpdate from "../../components/form/formProfileUpdate";
import FormTechsUpdate from "../../components/form/formTechsUpdate";
import FormWorksUpdate from "../../components/form/formWorksUpdate";
import { Container } from "../../globalStyles";

const Settings = ({ id }) => {
  let user; //redux vai trazer o state global dos usuarios da lista e vai comparar o id com o id gravado no response do feedback do login parar definir os dados atuais do usuario logado
  return (
    <Container>
      <div id="header">
        <Link to="/users-list">Return to all devs</Link>
        {/* <h1>{user.name}</h1> */}
        {/* <img alt={defaultImage}/> */}
      </div>
      <div id="generalForm">
        <FormProfileUpdate user={user} />
      </div>
      <div id="techsUpdate">
        <FormTechsUpdate techs={user.techs} />
      </div>
      <div id="jobsUpdate">
        <FormWorksUpdate works={user.works} />
      </div>
    </Container>
  );
};

export default Settings;
