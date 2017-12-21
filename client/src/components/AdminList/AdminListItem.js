import React from "react";

// AdminListItem renders info for a single game 
export const AdminListItem = props => (
    <Container className="list-item">
          <div>{props.title}</div>
    </Container>
);