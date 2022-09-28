import type { NextPage } from 'next';
import Head from 'next/head';
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import RecommendPages from './recommendPages';
import React from 'react';

const wineList = [
  {
    id: 1,
    winery: "ワイナリー",
    wineName: "銘柄",
    tags: ["タグ1", "タグ2", "タグ3"],
    description: "Musas sunt abaculuss de varius victrix.",
  },
  {
    id: 2,
    winery: "ワイナリー",
    wineName: "銘柄",
    tags: ["タグ1", "タグ2", "タグ3"],
    description: "Musas sunt abaculuss de varius victrix.",
  },
  {
    id: 3,
    winery: "ワイナリー",
    wineName: "銘柄",
    tags: ["タグ1", "タグ2", "タグ3"],
    description: "Musas sunt abaculuss de varius victrix.",
  },
  {
    id: 4,
    winery: "ワイナリー",
    wineName: "銘柄",
    tags: ["タグ1", "タグ2", "タグ3"],
    description: "Musas sunt abaculuss de varius victrix.",
  },
  {
    id: 5,
    winery: "ワイナリー",
    wineName: "銘柄",
    tags: ["タグ1", "タグ2", "タグ3"],
    description: "Musas sunt abaculuss de varius victrix.",
  },
  {
    id: 6,
    winery: "ワイナリー",
    wineName: "銘柄",
    tags: ["タグ1", "タグ2", "タグ3"],
    description: "Musas sunt abaculuss de varius victrix.",
  }
]


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
                  image="/images/shirowine00.jpeg"
              />
              <CardContent>
                <Typography  gutterBottom>
                  {data.winery}
                </Typography>
                <Typography variant="h5">
                  {data.wineName}
                </Typography>
                <Typography >
                  {data.tags && data.tags.join(", ")}
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

	return (
	<DefaultLayout>

			<div style={{width: "100%"}}>
				<Grid container spacing={2}
					style={{width: "80%", margin: "0px auto", marginTop:50, marginBottom: 70 }}>
          {wineList.map((wine) => (
          <Grid item xs={3} key={wine.id}>
            <WineCard data={wine} />
          </Grid>
          ))}
				</Grid>
			</div>

	</DefaultLayout>
	)
}

export default Recommend;