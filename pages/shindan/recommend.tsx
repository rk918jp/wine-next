//@ts-nocheck
import type { NextPage } from 'next';
import Head from 'next/head';
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
// import RecommendPages from './recommendPages';
import React from 'react';
import axios from "axios";



//ワインの品種等掲載
const WineCard: React.FC<{
  data: any;
}> = ({data}) => {
	return (
		<Link href={`/shindan/${data.id}`}>
          <Card sx={{textAlign: "left"}}>
            <CardActionArea>
              <CardMedia
                  component="img"
                  height="200"
                  image={data.image.src}
                  // image="/images/shirowine00.jpeg"
              />
              <CardContent>
                <Typography  gutterBottom>
                  {data.winery?.name}
                </Typography>
                <Typography variant="h5">
                  {data.name}
                </Typography>
                <Typography >
                {data.wineTypes &&
                      data.wineTypes.map((wineType) => wineType.name).join(", ")}
                </Typography>
                <Typography variant="body2">
                  {data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
	);
}


const Recommend: NextPage = () => {
  // PCならtrue, mobileならfalse
  const matches = useMediaQuery("(min-width:767px)");

  //バックエンドとの繋ぎ込み処理
  const [loading , setLoading] = React.useState(false);
  const [wineList, setWineList] = React.useState(undefined);

  React.useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8080/wines", {
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
      //   "Access-Control-Allow-Origin": "*",
      // },
    })
        .then((res) => {
          const { result, data } = res.data;
          if (result === "SUCCESS") {
            setWineList(data);
          }
          setLoading(false);
        });
  }, []);



	return (
	<DefaultLayout>

			<div style={{width: "100%"}}>
				<Grid container spacing={2} style={{width: "80%", margin: "0px auto", marginTop:50, marginBottom: 70 }}>
          {loading ? (
              <>Loading中</>
          ) : (
            <>
              {wineList?.map((wine) => (
                  <Grid item xs={3} key={wine.id}>
                    <WineCard data={wine} />
                  </Grid>
              ))}
            </>
          )}
				</Grid>
			</div>

	</DefaultLayout>
	)
}

export default Recommend;