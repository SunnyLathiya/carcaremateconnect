"use client"
import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, CircularProgress, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "@/css/customers/Brands.module.css";
// import CarService from "../../services/member/car/car_services";

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

//   const retrieveBrands = () => {
//     CarService.getAllBrands()
//       .then((response) => {
//         setBrands(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     retrieveBrands();
//   }, []);

  const getCarCard = (brand: string) => {
    return (
      <Grid item xs={6} sm={4} md={3} lg={2} key={brand}>
        {/* <Card className="card" onClick={() => console.log(`/cust_home/cars/${brands[brand]}`)}>
          <CardContent>
            <Typography className="text">{brands[brand]}</Typography>
          </CardContent>
        </Card> */}
      </Grid>
    );
  };

  return (
    <div className={`${styles.brand}`}>
      <h1 className={`${styles.title}`}>Available Brands</h1>

      <div className={`${styles.search}`}>
        <SearchIcon className={`${styles.searchIcon}`} />
        <TextField className={`${styles.searchInput}`} label="Search for Brands" onChange={handleSearchChange} />
      </div>

      {brands ? (
        <Grid container spacing={3} item className={`${styles.grid_container}`}>
          {/* {Object.keys(brands).map((brand) => brands[brand].includes(filter) && getCarCard(brand))} */}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Brands;
