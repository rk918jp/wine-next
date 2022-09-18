import {NextPage} from "next";
import {useRouter} from "next/router";
import {DefaultLayout} from "../../layout/DefaultLayout";


const WineDetail: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
      <DefaultLayout>
        {id}
      </DefaultLayout>
  )
}

export default WineDetail;