import { connect } from "react-redux";
import NotFoundComponent from "../components/custom/NotFound/NotFoundComponent";

const NotFoundContainer = (props: any) => {
  return (
    <NotFoundComponent
      idTitle="app.notFound.title"
      idContent="app.notFound.text"
      idLink="app.notFound.link"
      linkTo="/home"
      onClick={() => props.getPosts()}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(null, mapDispatchToProps)(NotFoundContainer);
