import React from "react";
import {NextPage} from "next";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Button, Divider, Grid, Paper, Typography} from "@mui/material";
import Link from "next/link";
import {useAppDispatch} from "../../redux/hook";
import {resetAnswers} from "../../redux/reducer/question";
import styled from "@emotion/styled";
import MediaQuery from "react-responsive";


const Shindan: NextPage = () => { 
	//resetの処理を宣言
	const dispatch = useAppDispatch();
    React.useEffect(() => {  //ページを開いた時にリセットする   
		dispatch(resetAnswers());
    }, []);

		return (
			<DefaultLayout>

				{/* PCの表示 */}
				<MediaQuery query="(min-width: 768px)">
					<div style={{position: "absolute" ,top: "50%", left: "50%", transform: "translate(-50%,-50%)",fontFamily: "Comic Sans MS",paddingBottom: "150px" }}>
						<Typography variant={"h5"}>
							<h1 style={{
								paddingBottom: "60px", 
								fontSize: "6rem", 
								textShadow: "0 0 0.1em rgba(255,255,255,0.05),0.01em 0.04em 0.03em rgba(255,255,255,0.4)", 
								color: "transparent",
								fontWeight: "bold",
								background : "rgba(0,0,0,1)",
								WebkitBackgroundClip : "text" 
								}}>
								おすすめワイン診断
							</h1>
						</Typography>

						<Link href={"/shindan/aka"} >
							<Button variant={"contained"} 
							sx={{ 
								marginRight:"30px",
								fontSize: "1.8rem", 
								fontFamily: "Hannotate SC",
								width: "320px",
								color: "#DC143C",
								fontWeight: 700,
								backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)",
								borderRadius: "50vh",
								transition: "0.3s",
								":hover":{opacity:0.8}
								}}>
								赤ワインで診断
							</Button>
						</Link>

						<Link href={"/shindan/shiro"}>
							<Button variant={"contained"}
							sx={{ 
								fontSize: "1.8rem", 
								fontFamily: "Hannotate SC",
								width: "320px",
								color: "white",
								fontWeight: 700,
								backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)",
								borderRadius: "50vh",
								transition: "0.3s",
								":hover":{opacity:0.8}
								}}>
								白ワインで診断
							</Button>
						</Link>
					</div>
				</MediaQuery>


				{/* Mobileの表示 */}
				<MediaQuery query="(max-width: 767px)">
				<div style={{position: "absolute" ,top: "60%", left: "50%", transform: "translate(-50%,-50%)",fontFamily: "Comic Sans MS",paddingBottom: "150px" }}>
					<Typography variant={"h5"}>
						<h1 style={{
							paddingBottom: "60px", 
							fontSize: "3.5rem", 
							textShadow: "0 0 0.1em rgba(255,255,255,0.05),0.01em 0.04em 0.03em rgba(255,255,255,0.4)", 
							color: "transparent",
							fontWeight: "bold",
							background : "rgba(0,0,0,1)",
							WebkitBackgroundClip : "text" 
							}}>
							おすすめ<br></br>
							ワイン診断
						</h1>
					</Typography>

					<Link href={"/shindan/aka"} >
						<Button variant={"contained"} 
						sx={{
							fontSize: "1.5rem", 
							fontFamily: "Hannotate SC",
							width: "250px",
							marginBottom: "20px",
							color: "#DC143C",
							fontWeight: 700,
							backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)",
							borderRadius: "50vh",
							transition: "0.3s"
							}}>
							赤ワインで診断
						</Button>
					</Link>

					<Link href={"/shindan/shiro"}>
						<Button variant={"contained"}
						sx={{ 
							fontSize: "1.5rem", 
							fontFamily: "Hannotate SC",
							width: "250px",
							color: "white",
							fontWeight: 700,
							backgroundImage: "linear-gradient(170deg, #659de6, #5abab8)",
							borderRadius: "50vh",
							transition: "0.3s",
							":hover":{opacity:0.8}
							}}>
							白ワインで診断
						</Button>
					</Link>
					</div>
				</MediaQuery>

				

			</DefaultLayout>
			)
	}
	
	export default Shindan;