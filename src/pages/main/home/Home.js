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
      search: "",
      sort: "",
    };
  }
  changeTextSearch = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSort = (event) => {
    // console.log(event.target.name);
    switch (event.target.name) {
      case "sortName":
        this.setState({ sort: "worker_name ASC" });
        break;
      case "sortSkills":
        this.setState({ sort: "worker_skills ASC" });
        break;
      case "sortLoc":
        this.setState({ sort: "worker_location ASC" });
        break;
      case "sortType1":
        this.setState({ sort: "worker_type=freelance" });
        break;
      case "sortType2":
        this.setState({ sort: "worker_type=fulltime" });
        break;
      default:
        break;
    }
  };
  handleProfile = () => {
    this.props.history.push("/portofolio");
  };
  handleSearch = () => {
    console.log("This for Search");
  };
  render() {
    console.log(this.state.sort);
    const totalPage = 5;
    return (
      <>
        <Container fluid className={styles.main}>
          <Container>
            <h1 className={styles.mainNav}>Top Jobs</h1>
            <Form>
              <Form.Group>
                <Form.Control
                  placeholder="Search for any skill"
                  className={styles.mainControl}
                  name="search"
                  value={this.state.search}
                  onChange={(event) => this.changeTextSearch(event)}
                />
                <img alt="" src={seacrh} className={styles.imgSearch} />

                <Button className={styles.btn1} onClick={this.handleSearch}>
                  Search
                </Button>
              </Form.Group>
              <Dropdown className={styles.dropdownMain}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className={styles.dropdown}
                >
                  Kategori
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    className={styles.listDropdown}
                    name="sortName"
                    onClick={(event) => this.handleSort(event)}
                  >
                    Sortir berdasarkan Nama
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.listDropdown}
                    name="sortSkills"
                    onClick={(event) => this.handleSort(event)}
                  >
                    Sortir berdasarkan Skill
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.listDropdown}
                    name="sortLoc"
                    onClick={(event) => this.handleSort(event)}
                  >
                    Sortir berdasarkan Lokasi
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.listDropdown}
                    name="sortType1"
                    onClick={(event) => this.handleSort(event)}
                  >
                    Sortir berdasarkan Freelance
                  </Dropdown.Item>
                  <Dropdown.Item
                    className={styles.listDropdown}
                    name="sortType2"
                    onClick={(event) => this.handleSort(event)}
                  >
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
                        <Button
                          className={styles.btnProfile}
                          onClick={this.handleProfile}
                        >
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
