import type { NextPage } from 'next'
import Head from 'next/head'
import {DefaultLayout} from "../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Grid container spacing={2}>
        {new Array(6).fill(undefined).map((val, idx) => ( //mapでwinecardを複製して並べる処理。
          <Grid item xs={4} key={idx}>
            <WineCard />
          </Grid>
        ))}
      </Grid>
    </DefaultLayout>
  )
}

//ワインの品種等掲載
const WineCard = () => {
  return (
      <Card sx={{textAlign: "left"}}>
        <CardActionArea onClick={() => {
          // ワイン詳細ページへ遷移
        }}>
          <CardMedia
              component="img"
              height="140"
              image="#"
          />
          <CardContent>
            <Typography  gutterBottom>
              ワイナリー
            </Typography>
            <Typography variant="h5">
              銘柄
            </Typography>
            <Typography >
              タグ1, タグ2, タグ3
            </Typography>
            <Typography variant="body2">
              Musas sunt abaculuss de varius victrix.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

export default Home
