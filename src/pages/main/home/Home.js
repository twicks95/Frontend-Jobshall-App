import React, { Component } from "react";
import styles from "./Home.module.css";
// import imgDummy from "../../../assets/img/Ellipse 326.png";
import ReactPaginate from "react-paginate";
import NavbarComponent from "../../../components/Navbar/Navbar";
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
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import seacrh from "../../../assets/img/search (1) 1.png";
import BadgeHome from "../../../components/BadgeHome/BadgeHome";
import { connect } from "react-redux";
import { getWorkers } from "../../../redux/actions/worker";
import { getAllSkills } from "../../../redux/actions/skill";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data2: [],
      dataSkills: [],
      search: "",
      sort: "worker_name",
      page: 1,
      limit: 5,
      pagination: {},
      idWorker: "",
    };
  }
  componentDidMount() {
    this.allWorkers();
    // this.getDataSkills();
  }
  // getDataSkills = (data) => {
  //   console.log(data);
  //   this.props.getAllSkills().then((res) => {
  //     this.setState({ dataSkills: res.action.payload.data.data });
  //   });
  // };
  allWorkers = () => {
    const { search, sort, page, limit } = this.state;

    this.props.getWorkers(page, limit, search, sort).then((res) => {
      this.setState({
        data: res.action.payload.data.data,
      });
    });
  };
  allWorkersSearch = () => {
    const { search, sort, page, limit } = this.state;

    this.props.getWorkers(page, limit, search, sort).then((res) => {
      this.setState({
        data2: res.action.payload.data.data,
      });
    });
  };

  handlePageClick = (event) => {
    console.log(event);
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.allWorkers();
    });
  };
  changeTextSearch = (event) => {
    // this.state.search === "" && this.allWorkers();
    this.allWorkersSearch();
    this.setState({ [event.target.name]: event.target.value });
  };
  resetSearch = (event) => {
    event.preventDefault();
    this.setState({ search: "" });
  };
  handleSort = (event) => {
    console.log(event);
    // switch (event.target.name) {
    //   case "sortName":
    //     this.allWorkers();
    //     this.setState({ sort: "worker_name ASC" });

    //     break;
    //   case "sortSkills":
    //     this.allWorkers();
    //     this.setState({ sort: `worker_skills ASC` });

    //     break;
    //   case "sortLoc":
    //     this.allWorkers();
    //     this.setState({ sort: "worker_domicile ASC" });

    //     break;
    //   case "sortType1":
    //     this.allWorkersSort(this.state.sort);
    //     this.setState({ sort: "worker_status='freelance'" });

    //     break;
    //   case "sortType2":
    //     this.allWorkersSort(this.state.sort);
    //     this.setState({ sort: "worker_status='fulltime'" });

    //     break;
    //   default:
    //     break;
    // }
  };
  handleProfile = (id) => {
    // console.log(id);
    localStorage.setItem("workerId", id);
    this.props.history.push(`/portofolio/${id}`);
  };
  handleSearch = (event) => {
    this.allWorkers();
    this.changeTextSearch(event);
    this.resetSearch(event);
  };
  render() {
    console.log(this.state.idWorker);
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>{this.handleSearch}</Popover.Content>
        <Popover.Content className={styles.popover}>
          {this.state.data2.length > 0 ? (
            this.state.data2.map((item, index) => {
              // console.log(item);

              return (
                <Card key={index} className={styles.mainCardUser}>
                  <Card.Body>
                    <h1 className={styles.cardTitle}>{item.worker_name}</h1>
                    <p className={styles.cardType}>
                      {item.worker_job_desk} - {item.worker_status}
                    </p>
                    <p className={styles.cardLocation}>
                      {item.worker_domicile}
                    </p>
                    <Row className={styles.skillRow}></Row>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <Card.Body>
              <h1 className={styles.titlePop}>Name not found</h1>
            </Card.Body>
          )}
        </Popover.Content>
      </Popover>
    );

    // const totalPage = this.props.worker.pagination;
    return (
      <>
        <NavbarComponent />
        <Container fluid className={styles.main}>
          <Container>
            <h1 className={styles.mainNav}>Top Jobs</h1>
            <Form>
              <Form.Group>
                <OverlayTrigger
                  trigger="focus"
                  placement="bottom"
                  overlay={popover}
                >
                  <Form.Control
                    placeholder="Search for any skill"
                    className={styles.mainControl}
                    name="search"
                    value={this.state.search}
                    onChange={(event) => this.changeTextSearch(event)}
                  />
                </OverlayTrigger>

                <img alt="" src={seacrh} className={styles.imgSearch} />

                <Button
                  className={styles.btn1}
                  onClick={(event) => this.handleSearch(event)}
                >
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
              {this.state.data.length > 0 ? (
                this.state.data.map((item, index) => {
                  // console.log(item);
                  return (
                    <Card key={index} className={styles.mainCardUser}>
                      <Row>
                        <Col className={styles.colImg} sm={2}>
                          <Card.Img
                            variant="left"
                            src={`http://localhost:3001/api/${item.worker_image}`}
                            className={styles.imgProfile}
                          />
                        </Col>
                        <Col sm={7}>
                          <Card.Body>
                            <h1 className={styles.cardTitle}>
                              {item.worker_name}
                            </h1>
                            <p className={styles.cardType}>
                              {item.worker_job_desk} - {item.worker_status}
                            </p>
                            <p className={styles.cardLocation}>
                              {item.worker_domicile}
                            </p>
                            <Row className={styles.skillRow}></Row>
                            {this.state.dataSkills.map((item, index) => {
                              return (
                                <Col xs={3} key={index}>
                                  <BadgeHome data={item} />
                                </Col>
                              );
                            })}
                          </Card.Body>
                        </Col>
                        <Col sm={3} className={styles.colButton}>
                          <Button
                            className={styles.btnProfile}
                            onClick={() => this.handleProfile(item.worker_id)}
                          >
                            Lihat Profile
                          </Button>
                        </Col>
                      </Row>
                    </Card>
                  );
                })
              ) : (
                <Card.Body>
                  <h1 className={styles.title}>Name not found</h1>
                </Card.Body>
              )}
            </Card>

            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.props.worker.pagination.totalPage}
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

const mapStateToProps = (state) => ({
  worker: state.worker,
  skill: state.skill,
});
const mapDispatchToProps = { getWorkers, getAllSkills };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
