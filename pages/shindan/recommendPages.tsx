import type { NextPage } from 'next';
import Head from 'next/head';
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";



// const RecommendPages: NextPage = () => {
// 	const matches = useMediaQuery("(min-width:767px)"); //レスポンシブ設定を定義

// 	return (
// 		<DefaultLayout>
// 			{matches ? (
// 				<>

// 				</>
// 				) : (
// 				<>

	

// 				</>
// 				)}
// 		</DefaultLayout>
// 	)
// }

// export default RecommendPages;