import React from "react";
import {NextPage} from "next";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Button, Divider, Grid, ImageList, ImageListItem, Paper, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {questionsDef, resultMessageDef, totalQuestionCount,resultImageDef} from "../../definitions/consts";
import {answerQuestion} from "../../redux/reducer/question";
import {useRouter} from "next/router";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";



export const ResultAka: NextPage = () => {
	const totalPoint = useAppSelector(state => state.question.totalPoint);  //totalPointにquestion＋totalPointを代入
	const rank = useAppSelector(state => state.question.rank);  //rankにquestion＋rankを代入

	const resultMessage = resultMessageDef?.[rank];  //rankに応じた結果の文言
	const resultImage = resultImageDef?.[rank];

	const matches = useMediaQuery("(min-width:767px)"); //レスポンシブ設定を定義


	//   /* 画面をリロードする関数 */
	// 	const refreshPage = () => {
	// 	window.location.reload();
	// 	};


	return (
		<DefaultLayout>

{matches ? (
			<>
				<div style={{width: "100%",top: "55%", left: "50%",}}>
				<Paper sx={{padding: 5}}>
					<Typography variant={"h5"} style={{fontSize: "3rem"}}>
						診断結果
					</Typography>
					<Divider sx={{mt: 2, mb: 4}}/>
						<Typography variant={"h5"} >
							<p style={{fontSize: "2rem", lineHeight: "0.2em"}}>あなたにおすすめのワインは…</p>
							<p style={{fontSize: "3rem", fontWeight: "bold", lineHeight: "0.7em"}}>{resultMessage}</p>
						</Typography>

						<ImageList cols={1}>
							<ImageListItem style={{width: "30%", margin: "0px auto",}}>
								<img src={resultImage} />
							</ImageListItem>
						</ImageList>

					<Grid container sx={{mt: 5}} spacing={2} style={{display: "flex", justifyContent: "center"}}>
						<Grid item xs={3} >
							<Link href={"/shindan"}>
								<Button
									style={{fontSize: "1.8rem", color:"#fff", backgroundColor: "#DDA0DD", borderRadius: "100vh", padding:15, paddingRight:"50px", paddingLeft:"50px"}}
									sx={{":hover":{opacity:0.8}}}>
									もう一度
								</Button>
							</Link>
						</Grid>
						<Grid item xs={3} >
							<Link href={"/"}>
								<Button
									style={{fontSize: "1.8rem", color:"#fff", backgroundColor: "#9370DB", borderRadius: "100vh", padding:15}}
									sx={{":hover":{opacity:0.8}}}>
									トップページに戻る
								</Button>
							</Link>
						</Grid>
					</Grid>
				</Paper>
				</div>
			</>

		) : (
			<>

			<div style={{width: "100%",top: "55%", left: "50%",}}>
					<Paper sx={{padding: 5}}>
						<Typography variant={"h5"} style={{fontSize: "2rem"}}>
							診断結果
						</Typography>
						<Divider sx={{mt: 2, mb: 4}}/>
							<Typography variant={"h5"} >
								<p style={{fontSize: "1.5rem"}}>あなたにおすすめのワインは…</p>
								<p style={{fontSize: "2.5rem", fontWeight: "bold"}}>{resultMessage}</p>
							</Typography>

							<ImageList cols={1}>
								<ImageListItem style={{width: "100%", margin: "0px auto",}}>
									<img src={resultImage} />
								</ImageListItem>
							</ImageList>

						<Grid container sx={{mt: 5}} spacing={2} style={{display:"flex", flexFlow: "column", justifyContent:"space-around",paddingLeft:50}}>
							<Grid item xs={3} >
								<Link href={"/shindan"}>
									<Button
										style={{fontSize: "1.5rem", color:"#fff", backgroundColor: "#DDA0DD", borderRadius: "100vh", padding:15, paddingRight:"50px", paddingLeft:"50px",width: "250px"}}>
										もう一度
									</Button>
								</Link>
							</Grid>
							<Grid item xs={3} >
								<Link href={"/"}>
									<Button
										style={{fontSize: "1.5rem", color:"#fff", backgroundColor: "#9370DB", borderRadius: "100vh", padding:15,width: "250px"}}>
										トップページに戻る
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Paper>
				</div>
			</>
		)}
		</DefaultLayout>
	)
}
export default ResultAka;