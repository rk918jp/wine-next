import type { NextPage } from 'next';
import Head from 'next/head';
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";
import RecommendPages from './recommendPages';
import useMediaQuery from "@mui/material/useMediaQuery";

//ワインの品種等掲載
const WineCard = () => {
	return (
		<Card sx={{textAlign: "left"}}>
		<CardActionArea onClick={() => {
			// ワイン詳細ページへ遷移
		}}>


			<CardMedia
				component="img"
				height="200"
				image="/images/shirowine00.jpeg"
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


const Recommend: NextPage = () => {
    // PCならtrue, mobileならfalse
    const matches = useMediaQuery("(min-width:767px)");

	return (
	<DefaultLayout>
      <div style={{width: "100%"}}>
        <Grid container spacing={2}
              style={{width: "80%", margin: "0px auto", marginTop: 50, marginBottom: 70}}>
          {new Array(12).fill(undefined).map((val, idx) => ( //mapでwinecardを複製して並べる処理。
              <Grid item xs={matches ? 3 : 12} key={idx}>
                <WineCard/>
              </Grid>
          ))}
        </Grid>
      </div>
	</DefaultLayout>
	)
}

export default Recommend;