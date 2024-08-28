/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

export default function nome(){

    const router = useRouter();
    console.log(router);

    const queryURL = router.query;

    
    return(
        <div>
            <h1>Rotas / {queryURL.id} / {queryURL.nome} </h1>
        </div>
    );
}