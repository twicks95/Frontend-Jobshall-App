import React, { Component } from "react";
import styles from "./Home.module.css";
// import imgDummy from "../../../assets/img/Ellipse 326.png";
import ReactPaginate from "react-paginate";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import seacrh from "../../../assets/img/search (1) 1.png";
import BadgeHome from "../../../components/BadgeHome/BadgeHome";
import { connect } from "react-redux";
import { getWorkers, getWorkerById } from "../../../redux/actions/worker";
import { getRecruiterById } from "../../../redux/actions/recruiter";
import { getAllSkills } from "../../../redux/actions/skill";
import qs from "query-string";
import NoProfilePicture from "../../../assets/images/defaultprofilepict.png";

class Home extends Component {
  constructor(props) {
    super(props);
    const urlParams = qs.parse(this.props.location.search);
    this.state = {
      data: [],
      dataSkills: [],
      search: urlParams.search ? urlParams.search : "",
      sort: urlParams.sort ? urlParams.sort : "worker_name",
      page: urlParams.page ? urlParams.page : 1,
      limit: urlParams.limit ? urlParams.limit : 3,
      pagination: {},
      idWorker: "",
    };
  }
  componentDidMount() {
    this.allWorkers();
    this.props.getRecruiterById(localStorage.getItem("recId"));
    // this.getDataSkills();
  }

  allWorkers = () => {
    let urlParam = `?page=${this.state.page}&limit=${this.state.limit}`;
    if (this.state.search) {
      urlParam += `&search=${this.state.search}`;
    }
    if (this.state.sort) {
      urlParam += `&sort=${this.state.sort}`;
    }
    this.props.history.push(`/home/${urlParam}`);
    const { search, sort, page, limit } = this.state;

    this.props.getWorkers(page, limit, search, sort).then((res) => {
      this.setState({
        data: res.action.payload.data.data,
      });
    });
  };

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.allWorkers();
    });
  };
  changeTextSearch = (event) => {
    // this.state.search === "" && this.allWorkers();
    // this.allWorkers();
    this.setState({ [event.target.name]: event.target.value });
  };
  resetSearch = (event) => {
    event.preventDefault();
    this.setState({ search: "" });
  };
  handleSort = (event) => {
    console.log(event.target.value);
    this.setState({ sort: event.target.value });
    this.allWorkers();
  };
  handleProfile = (id) => {
    localStorage.setItem("workerId", id);
    this.props.history.push(`/portofolio?id=${id}`);
  };
  handleSearch = (event) => {
    this.allWorkers(this.state.sort);
    this.changeTextSearch(event);
    // this.resetSearch(event);
  };
  render() {
    return (
      <>
        <NavbarComponent image={this.props.auth.data.recruiter_image} />
        <Container fluid className={styles.main}>
          <Container style={{ padding: "0 35px" }}>
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

                <Button
                  className={styles.btn1}
                  onClick={(event) => this.handleSearch(event)}
                >
                  Search
                </Button>
              </Form.Group>
              <select
                className={styles.dropdownMain}
                onClick={(event) => this.handleSort(event)}
              >
                <option className={styles.listDropdown} value="worker_name ASC">
                  Sortir berdasarkan Nama
                </option>
                <option
                  className={styles.listDropdown}
                  value="jumlah_skill DESC"
                >
                  Sortir berdasarkan Skill
                </option>
                <option
                  className={styles.listDropdown}
                  value="worker_domicile ASC"
                >
                  Sortir berdasarkan Lokasi
                </option>
                <option
                  className={styles.listDropdown}
                  value="worker_status='fulltime' DESC"
                >
                  Sortir berdasarkan Fulltime
                </option>
                <option
                  className={styles.listDropdown}
                  value="worker_status='freelance' DESC"
                >
                  Sortir berdasarkan Freelance
                </option>
              </select>
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
                            src={
                              item.worker_image
                                ? `http://localhost:3001/api/${item.worker_image}`
                                : NoProfilePicture
                            }
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

                            <Col xs={5}>
                              <BadgeHome
                                data={item.worker_id}
                                dataSkill={item.skill}
                              />
                            </Col>
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
  auth: state.auth,
  worker: state.worker,
  recruiter: state.recruiter,
  skill: state.skill,
});
const mapDispatchToProps = {
  getWorkerById,
  getWorkers,
  getRecruiterById,
  getAllSkills,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
