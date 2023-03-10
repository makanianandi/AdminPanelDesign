import { useState } from 'react';
import * as React from 'react';
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import DatePicker from 'rsuite/DatePicker';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const events = [
  {
    value: 'race',
    label: 'Race'
  },
  {
    value: 'time-attack',
    label: 'Time Attack'
  },
  {
    value: 'lapping',
    label: 'Lapping'
  },
  {
    value: 'hpde',
    label: 'Hpde'
  },
  {
    value: 'autox',
    label: 'Autox'
  }
];
const groups = [
  {
    value: '1morelap',
    label: '1morelap'
  },
  {
    value: '3ballracing',
    label: '3 Balls Racing'
  },
  {
    value: '6thgear',
    label: '6th Gear'
  },
  {
    value: 'apexdrivertraining',
    label: 'Apex Driver Training'
  },
  {
    value: 'ASElappingclub',
    label: 'ASE Lapping Club'
  }
];
const tracks = [
  {
    value: 'calabogie',
    label: 'Calabogie'
  },
  {
    value: 'CTMPMosportGrandPrix',
    label: 'CTMP (Mosport) - Grand Prix'
  },
  {
    value: 'CTMPMosportDDT',
    label: 'CTMP (Mosport) - DDT'
  },
  {
    value: 'grandbendmotorplex',
    label: 'Grand Bend Motorplex'
  },
  {
    value: 'TMPCayugaRoadCourse',
    label: 'TMP (Cayuga) - Road Course'
  }
];
export const AccountProfileDetails = (props) => {


  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });

  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="All the details of events"
          title="Add Event Details"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Event title"
                name="title"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Event Description"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Event Type"
                name="event"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.event}
                variant="outlined"
              >
                {events.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Track"
                name="tracks"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.tracks}
                variant="outlined"
              >
                {tracks.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Group Ownership"
                name="groups"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.groups}
                variant="outlined"
              >
                {groups.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <div className="col-12 field-space col-md-6">
                <div className="form-group">
                <label>Event Date</label>
                    <DatePicker oneTap className="daterangepickercust"/>
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <div className="col-12 field-space col-md-6">
                <div className="form-group">
                <label>Start/End Duration</label>
                <DateRangePicker className="daterangepickercust"
                              format="HH:mm:ss"
                              ranges={[]}
                              defaultCalendarValue={[new Date('2022-02-01 00:00:00'), new Date('2022-05-01 23:59:59')]}
                            />
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Mobile"
                name="mobile"
                onChange={handleChange}
                required
               
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="State"
                name="state"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Zip Code"
                name="zipcode"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Website"
                name="website"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Twitter"
                name="twitter"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Google+URL"
                name="google"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Price"
                name="price"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <FormControlLabel
              control={<Checkbox />}
              label="Instructors available"
            />
             <FormControlLabel
              control={<Checkbox />}
              label="Corner marshals are present"
            />
             <FormControlLabel
              control={<Checkbox />}
              label="Helmets are required"
            />
             <FormControlLabel
              control={<Checkbox />}
              label="Ambulance is on-site"
            />
             <FormControlLabel
              control={<Checkbox />}
              label="Tow truck is on-site"
            />
             <FormControlLabel
              control={<Checkbox />}
              label="Lunch included"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                />
              )}
              label="Car is provided"
            />
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save Details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
