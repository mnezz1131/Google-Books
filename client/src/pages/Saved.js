import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
//import Button from "../components/Button";
import API from "../utils/API";
//import { BookList, BookListItem } from "../components/List";
import { Container, Row, Col } from "../components/Grid";

class Saved extends Component {
  state = {
    books: [{}],
    title: "",
    author: "",
    category: "",
    desctiption: "",
    published: "",
    link: "",
    preview: "",
    thumbnail: "",

  };

  // When this component mounts, grab the drink with the _id of this.props.match.params.id
	// e.g. localhost:3000/books/599dcb67f0f16317844583fc
	componentDidMount() {
		API.getBooks(this.props.match.params.id)
			.then((res) =>
				this.setState({
					books: res.data.items,

          
				})
			)
			.catch((err) => console.log(err));
	}
  
  handleInputChange(property) {
		return (e) => {
			this.setState({
				[property]: e.target.value,
			});
		};
	}


  loadChanges = () => {
		API.getBooks(this.props.match.params.id)
			.then((res) => this.setState({ book: res.data.items }))
			.catch((err) => console.log(err));
	};

  render() {
    return (
      <div>
      <Nav />
      <Jumbotron />
      <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {/* {this.state.books.volumeInfo.title}
              {this.state.books.volumeInfo[0]} */}
            </h1>
          </Jumbotron>
        </Col>
      </Row>

 
    </Container>
    </div>
  );
    
  }
}

export default Saved;