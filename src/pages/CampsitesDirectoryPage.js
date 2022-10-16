import { Container, Row, Col } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import SubHeader from "../components/SubHeader";


const CampsiteDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    );
};

export default CampsiteDirectoryPage;