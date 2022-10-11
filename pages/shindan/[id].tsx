import {NextPage} from "next";
import {useRouter} from "next/router";
import React from "react";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography, Button} from "@mui/material";
import axios from "axios";



const WineDetail: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;

  //バックエンドとの繋ぎ込み処理
  const [loading , setLoading] = React.useState(false);
  const [wineList, setWineList] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8080/wine/:id",)
        .then((res) => {
          const { result, data } = res.data;
          if (result === "SUCCESS") {
            setWineList(data);
          }
          setLoading(false);
        });
  }, []);

  return (
      <DefaultLayout>
        <div>
          {id}
          <h1>{wineList.name}</h1>
        </div>
      </DefaultLayout>
  )
}

export default WineDetail;