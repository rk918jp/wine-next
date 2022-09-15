import React from "react";
import {NextPage} from "next";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Button, Divider, Grid, ImageList, ImageListItem, Paper, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {questionsDef, resultMessageDef, totalQuestionCount,resultImageDef} from "../../definitions/consts";
import {answerQuestion} from "../../redux/reducer/question";
import {useRouter} from "next/router";
import Link from "next/link";
import Shindan from ".";


export const ResultAka: NextPage = () => {
	const totalPoint = useAppSelector(state => state.question.totalPoint);  //totalPointにquestion＋totalPointを代入
	const rank = useAppSelector(state => state.question.rank);  //rankにquestion＋rankを代入

	const resultMessage = resultMessageDef?.[rank];  //rankに応じた結果の文言
	const resultImage = resultImageDef?.[rank];

	//   /* 画面をリロードする関数 */
	// 	const refreshPage = () => {
	// 	window.location.reload();
	// 	};


	return (
		<DefaultLayout>
			<Paper sx={{padding: 5}}>
				<Typography variant={"h5"}>
					診断結果
				</Typography>
				<Divider sx={{mt: 2, mb: 4}}/>
					<Typography variant={"h5"}>
						<p>あなたにおすすめのワインは…</p>
						{resultMessage}
					</Typography>
                <ImageList cols={1}>
                  <ImageListItem>
                    <img src={resultImage} />
                  </ImageListItem>
                </ImageList>
				<Grid container sx={{my: 4}} spacing={2}>
					<Grid item xs={6}>
						<Link href={"/shindan"}>
							<Button
								variant={"outlined"}
								fullWidth >
								もう一度
								
							</Button>
						</Link>
					</Grid>
					<Grid item xs={6}>
						<Link href={"/"}>
							<Button
								variant={"outlined"}
								fullWidth>
								トップページに戻る
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Paper>
		</DefaultLayout>
	)
}
export default ResultAka;