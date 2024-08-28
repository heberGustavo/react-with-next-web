/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

export default function buscar(){

    const router = useRouter();

    console.log(router);
    
    return(
        <div>
            <h1>Rotas / {router.query.id} / Buscar!!!</h1>
        </div>
    );
}