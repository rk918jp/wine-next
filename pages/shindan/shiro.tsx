import React from "react";
import {NextPage} from "next";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Button, CircularProgress, Divider, Grid, Paper, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/hook";
import {questionsDef, totalQuestionCount} from "./consts";
import {answerQuestion} from "../../redux/reducer/question";
import {useRouter} from "next/router";



export const Aka: NextPage = () => {
	const router = useRouter();
	const questionNum = useAppSelector(state => state.question.questionNum);
	const dispatch = useAppDispatch();

	  // 現在の質問(indexが配列長を超えた場合はundefined)
	const currentQuestion = questionsDef?.[questionNum];
	// 全ての質問を回答したかどうか
	const finished = questionNum >= questionsDef.length;


	//タイムアウト時の処理
	React.useEffect(() => {
		if (finished) {
			setTimeout(() => {
			router.push("/shindan/result");
			}, 2000);
		}
		}, [finished]);

	return (
		<DefaultLayout>
			{/* 診断終了時の処理 */}
			{finished ? (
			<>
				<Typography variant={"h5"}>
					Done!
				</Typography>
				<CircularProgress sx={{mt: 3}} />
			</>
			) : (
			<>
				{/* 質問時の処理 */}
				<Typography variant={"h5"}>
					質問({questionNum + 1}/{totalQuestionCount})  {/* 質問残数の表示 */}
					</Typography>
					<Divider sx={{mt: 2, mb: 4}}/>
					<Typography variant={"h5"}>
					{currentQuestion.q}  {/*  質問内容 */}
					</Typography>
					<Grid container sx={{mt: 4}} spacing={2}>
						<Grid item xs={6}>
							<Button
								variant={"outlined"}
								fullWidth
								onClick={() => {
								dispatch(answerQuestion({value: 1}));
								}}
							>
							{currentQuestion.a1}  {/* 回答１ */}
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								variant={"outlined"}
								fullWidth
								onClick={() => {
								dispatch(answerQuestion({value: 2}));
								}}
							>
							{currentQuestion.a2}  {/* 回答２ */}
							</Button>
						</Grid>
					</Grid>
				</>
			)}

		</DefaultLayout>

	)
}



export default Aka;