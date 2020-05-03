import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(
props,
 ) {
  let bookData = {
    title: props.title,
    
 

  }
  return (

    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
     
            <h3>Title:  {props.title}</h3>
            <p>Author: {props.author}</p>
            <p>Category: {props.category}</p>
            <p>Description: {props.description}</p>
            <p>Published: {props.published}</p>
            <p>Book Link:<a rel="noreferrer noopener" target="_blank" href={props.link}>
            {props.preview}
            </a></p>
            <p>Preview Link: <a rel="noreferrer noopener" target="_blank" href={props.preview}>
            {props.preview}</a></p>
            <Button
                        onClick={ props.onClick(bookData)}
                        type="success"
                        className="input-lg"
                      >
                        Save
                      </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
