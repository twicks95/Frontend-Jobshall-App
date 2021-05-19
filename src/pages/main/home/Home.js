import React, { Component } from "react";
import styles from "./Home.module.css";
import imgDummy from "../../../assets/img/Ellipse 326.png";
import ReactPaginate from "react-paginate";
import Footer from "../../../components/Footer/Footer";
import {
  Container,
  Form,
  // NavDropdown,
  Dropdown,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import seacrh from "../../../assets/img/search (1) 1.png";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Teguh",
          field: "Web developer",
          type: "Freelance",
          location: "lorem ipsum",
          skills: ["PHP", "JS", "Python"],
        },
        {
          name: "Alfin",
          field: "Web developer",
          type: "Freelance",
          location: "lorem ipsum",
          skills: ["PHP", "JS", "Python"],
        },
        {
          name: "Ricky",
          field: "Web developer",
          type: "Freelance",
          location: "lorem ipsum",
          skills: ["PHP", "JS", "Python"],
        },
        {
          name: "Rifqi",
          field: "Web developer",
          type: "Freelance",
          location: "lorem ipsum",
          skills: ["PHP", "JS", "Python", "Golang"],
        },
      ],
      seacrh: "",
    };
  }
  render() {
    const totalPage = 5;
    return (
      <>
        <Container fluid className={styles.main}>
          <Container>
            <Form>
              <Form.Group>
                <Form.Control
                  placeholder="Search for any skill"
                  className={styles.mainControl}
                />
                <img alt="" src={seacrh} className={styles.imgSearch} />

                <Button className={styles.btn1}>Search</Button>
              </Form.Group>

              {/* <NavDropdown
                title="Kategori"
                id="basic-nav-dropdown"
                className={styles.dropdownMain}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <Dropdown className={styles.dropdownMain}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className={styles.dropdown}
                >
                  Kategori
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className={styles.listDropdown}>
                    Sortir berdasarkan Nama
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.listDropdown}>
                    Sortir berdasarkan Skill
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.listDropdown}>
                    Sortir berdasarkan Lokasi
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.listDropdown}>
                    Sortir berdasarkan Freelance
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.listDropdown}>
                    Sortir berdasarkan Fulltime
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
            <Card className={styles.userCard}>
              {this.state.data.map((item, index) => {
                return (
                  <Card key={index} className={styles.mainCardUser}>
                    <Row>
                      <Col className={styles.colImg} sm={2}>
                        <Card.Img variant="left" src={imgDummy} />
                      </Col>
                      <Col sm={7}>
                        <Card.Body>
                          <h1 className={styles.cardTitle}>{item.name}</h1>
                          <p className={styles.cardType}>
                            {item.field} - {item.type}
                          </p>
                          <p className={styles.cardLocation}>{item.location}</p>
                          <Row className={styles.skillRow}>
                            {item.skills.map((item, index) => {
                              return (
                                <Col xs={3} key={index}>
                                  <Card className={styles.cardSkill}>
                                    {item}
                                  </Card>
                                </Col>
                              );
                            })}
                          </Row>
                        </Card.Body>
                      </Col>
                      <Col sm={3} className={styles.colButton}>
                        <Button className={styles.btnProfile}>
                          Lihat Profile
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                );
              })}
            </Card>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={totalPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={styles.pagination}
              subContainerClassName={`${styles.pages}${styles.pagination}`}
              activeClassName={styles.active}
            />
          </Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Home;
