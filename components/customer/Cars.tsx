import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@material-ui/core";
import { NextPage } from "next";
import CarSlides from "./CarSlides";
// import CarService from "../../services/member/car/car_services";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";


export interface Car {
    _id: string;
    name: string;
    // Add more properties as needed based on your data structure
  }
  
interface Props {
  match: any; // Define proper types for match and history
  history: any;
}

const Cars: NextPage<Props> = ({ match, history }) => {
  const router = useRouter();
  const { brand } = router.query;

  const [cars, setCars] = useState<Car[]>([]);
  const [filter, setFilter] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

//   const retrieveCars = () => {
//     CarService.getCarsByBrand(brand)
//       .then((response: Car[]) => {
//         setCars(response);
//       })
//       .catch((err: Error) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     if (brand) {
//       retrieveCars();
//     }
//   }, [brand]);

  const getCarCards = (car: Car): JSX.Element => {
    return (
      <Grid item xs={6} sm={4} md={3} lg={2} key={car._id}>
        <Card
          className="card"
          onClick={() => history.push(`/cust_home/services/${car._id}`)}
        >
          <CardContent>
            <Typography>{car.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div>
      <CarSlides />
      <div className="brand">
        <h1 className="title">{`Available ${brand} Cars`}</h1>

        <div className="search">
          <SearchIcon className="searchIcon" />
          <TextField
            className="searchInput"
            label="Search for Cars"
            onChange={handleSearchChange}
          />
        </div>

        <Grid container spacing={3} className="grid_container">
          {cars.map((car) =>
            car.name.toLowerCase().includes(filter.toLowerCase()) && getCarCards(car)
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Cars;
