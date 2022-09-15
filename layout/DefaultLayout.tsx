import React from "react";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

//上のやつ
	export const DefaultLayout: React.FC<{
		children: React.ReactNode;
	}> = ({ children }) => {
		return (
				<Box sx={{
				backgroundColor: "rgb(245,245,245)",
				minHeight: "100vh",
				}}>
				<AppBar position="static">
					<Toolbar>
					<Link href={"/"}>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Wine App
						</Typography>
					</Link>
					<Link href={"/shindan"}>
						<Button variant="outlined" color="inherit">診断する</Button>
					</Link>
					</Toolbar>
				</AppBar>
				<Box
					sx={{
						textAlign: "center",
						margin: "40px auto",
						width: 800,
						minHeight: 600,
						padding: "16px",
					}}
				>
					{children}
				</Box>
				</Box>
		)
	}