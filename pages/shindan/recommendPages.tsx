import type { NextPage } from 'next';
import Head from 'next/head';
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import Link from "next/link";
import MediaQuery from "react-responsive";


const RecommendPages: NextPage = () => {
	return (
		<DefaultLayout>

			{/* PCの表示 */}
		<MediaQuery query="(min-width: 768px)">

		</MediaQuery>
		

		
		{/* Mobileの表示 */}
		<MediaQuery query="(max-width: 767px)">

		</MediaQuery>


		</DefaultLayout>
	)
}

export default RecommendPages;