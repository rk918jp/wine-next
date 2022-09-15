import React from "react";
import {NextPage} from "next";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Button, Divider, Grid, Paper, Typography} from "@mui/material";
import Link from "next/link";
import {useAppDispatch} from "../../redux/hook";
import {reset} from "../../redux/reducer/question";

const Shindan: NextPage = () => {
    const dispatch = useAppDispatch();
    React.useEffect(() => {
      dispatch(reset());
    }, []);

	return (
		<DefaultLayout>
			<Typography variant={"h5"}>
				おすすめワイン診断
			</Typography>

			<Link href={"/shindan/aka"}>
				<Button variant={"contained"}>
					赤ワインで診断
				</Button>
			</Link>

			<Link href={"/shindan/shiro"}>
				<Button variant={"contained"}>
					白ワインで診断
				</Button>
			</Link>

		</DefaultLayout>
		)

	}
	
	export default Shindan;