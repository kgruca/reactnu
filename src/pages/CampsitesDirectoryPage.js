import { Container, Row, Col } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";


const CampsiteDirectoryPage = () => {

    return (
        <Container>
                    <CampsitesList />
        </Container>
    );
};

export default CampsiteDirectoryPage;