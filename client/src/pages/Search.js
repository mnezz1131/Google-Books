
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Search.js
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/Booklist";
import { Container, Row, Col } from "../components/Grid";
class Search extends Component {
  state = {
    books: [],
    bookSearch: ""
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    //const { name, value } = event.target;
    this.setState({
      bookSearch: event.target.value
    });
  };
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res =>{
        console.log(res)
       
        
        this.setState({ books: res.data.items })
      })
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row className = "row">
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <h1 classname ="enter">Enter A  Book To Search For</h1>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {this.state.books.length ? (
                  <BookList>
                  {this.state.books.map(book => {
                    console.log(book.volumeInfo.title);
                    return (
                      <BookListItem
                        key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors[0]}
                        category={book.volumeInfo.categories[0]}
                        description={book.volumeInfo.description}
                        published={book.volumeInfo.publishedDate}
                        link={book.volumeInfo.infoLink}
                        preview={book.volumeInfo.previewLink}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                       
                        onClick={API.saveBook}

                        />
                        );
                      })}
                </BookList>
              ) : (
                <h3 className="text-center no-boo">No Books to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Search;