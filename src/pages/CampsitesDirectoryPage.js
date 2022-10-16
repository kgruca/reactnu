import { Container, Row, Col } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import SubHeader from "../components/Subheader";


const CampsiteDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    );
};

export default CampsiteDirectoryPage;