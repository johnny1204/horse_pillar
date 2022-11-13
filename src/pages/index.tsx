import type { NextPage } from 'next';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { RacePageLink } from '../components/Race/RacePageLink';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home: NextPage = () => (
  <>
    <main style={{ marginTop: '10px', padding: '10px' }}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="inherit" gutterBottom>
                11/6 予想
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink linkPath="posts/first-post" label="東京" />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink linkPath="#" label="阪神" />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink linkPath="#" label="福島" />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              {/* <Calendar value={new Date("2022-11-07")}/> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="inherit" gutterBottom>
                11/5
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink
                        linkPath="#"
                        label="東京"
                        underline="hover"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink
                        linkPath="#"
                        label="阪神"
                        underline="hover"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink
                        linkPath="#"
                        label="福島"
                        underline="hover"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="inherit" gutterBottom>
                10/30
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink
                        linkPath="#"
                        label="東京"
                        underline="hover"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink
                        linkPath="#"
                        label="阪神"
                        underline="hover"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card>
                    <CardContent>
                      <RacePageLink
                        linkPath="#"
                        label="新潟"
                        underline="hover"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  </>
);

export default Home;
