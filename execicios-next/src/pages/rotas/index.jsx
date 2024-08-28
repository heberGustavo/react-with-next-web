import Link from "next/link";

export default function rotas(){
    return(
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href="/rotas/params?nomeCompleto=HeberGustavo&apelido=Gustavo">
                    <li>Redirect to Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>Redirect with ID</li>
                </Link>
                <Link href="/rotas/123/HEBER">
                    <li>Redirect with ID and NAME</li>
                </Link>
            </ul>
        </div>
    );
}