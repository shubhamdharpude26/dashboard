import React, {useState} from "react";
import {
    Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Title from "./Title";
import '../App.css'

function Devices() {
  const defaultProduct = [
    {
      productDetails: {
        deviceName: "Device Name",
        deviceModel: "Model Name",
        deviceManufacture: "Manufacturer's Name"
      },
      deviceType: "Sensor Type",
      deviceEffciency: "85%",
      activeProducts: "Products Connected with the Device"
    },
    {
        productDetails: {
          deviceName: "Device Name",
          deviceModel: "Model Name",
          deviceManufacture: "Manufacturer's Name"
        },
        deviceType: "Sensor Type",
        deviceEffciency: "85%",
        activeProducts: "Products Connected with the Device"
      },
      {
        productDetails: {
          deviceName: "Device Name",
          deviceModel: "Model Name",
          deviceManufacture: "Manufacturer's Name"
        },
        deviceType: "Sensor Type",
        deviceEffciency: "85%",
        activeProducts: "Products Connected with the Device"
      },
      {
        productDetails: {
          deviceName: "Device Name",
          deviceModel: "Model Name",
          deviceManufacture: "Manufacturer's Name"
        },
        deviceType: "Sensor Type",
        deviceEffciency: "85%",
        activeProducts: "Products Connected with the Device"
      },
      {
        productDetails: {
          deviceName: "Device Name",
          deviceModel: "Model Name",
          deviceManufacture: "Manufacturer's Name"
        },
        deviceType: "Sensor Type",
        deviceEffciency: "85%",
        activeProducts: "Products Connected with the Device"
      },
      {
        productDetails: {
          deviceName: "Device Name",
          deviceModel: "Model Name",
          deviceManufacture: "Manufacturer's Name"
        },
        deviceType: "Sensor Type",
        deviceEffciency: "85%",
        activeProducts: "Products Connected with the Device"
      },
  ];
  const [Product, setProduct] = useState(defaultProduct);

  return (
    <TableContainer>
      <Title>Devices/Sensor Efficency</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Device/Sensor</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Efficency</TableCell>
            <TableCell>Product(s) Connected</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Product.map((product) => (
            <TableRow>
                <Box p={4} className="boxTable">
                    <TableRow>{product.productDetails.deviceName}</TableRow>
                    <TableRow>{product.productDetails.deviceModel}</TableRow>
                    <TableRow>{product.productDetails.deviceManufacture}</TableRow>
                </Box>
              <TableCell>{product.deviceType}</TableCell>
              <TableCell>{product.deviceEffciency}</TableCell>
              <TableCell>{product.activeProducts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Devices;
