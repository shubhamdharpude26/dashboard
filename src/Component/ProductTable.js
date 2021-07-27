import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Title from "./Title";

function ProductTable() {
  // const [productName, setProductName] = useState([])

  const defaultProduct = [
    {
      name: "Product 1",
      errorType: "Error",
      status: <Alert severity="error">Error</Alert>,
    },
    {
      name: "Product 2",
      errorType: "Success",
      status: <Alert severity="success">Success</Alert>,
    },
    {
      name: "Product 3",
      errorType: "Warning",
      status: <Alert severity="warning">Warning</Alert>,
    },
    {
      name: "Product 4",
      errorType: "Error",
      status: <Alert severity="error">Error</Alert>,
    },
    {
      name: "Product 5",
      errorType: "Success",
      status: <Alert severity="success">Success</Alert>,
    },
    {
      name: "Product 6",
      errorType: "Warning",
      status: <Alert severity="warning">Warning</Alert>,
    },
    {
      name: "Product 7",
      errorType: "Error",
      status: <Alert severity="error">Error</Alert>,
    },
    {
      name: "Product 8",
      errorType: "Success",
      status: <Alert severity="success">Success</Alert>,
    },
  ];
  const [Product, setProduct] = useState(defaultProduct);

  return (
    <TableContainer>
      <Title>Products</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Error Type</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Product.map((product) => (
            <TableRow>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.errorType}</TableCell>
              <TableCell>{product.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductTable;
