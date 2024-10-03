"use client"

import Head from "next/head";
import { useRouter } from "next/navigation";


export default function Home() {

  const {push} = useRouter();

  function btnLoginClick(){
  push("/bet");
  }

  return (
    <>
      <Head>
        <title>BetCandidate | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse aling-items-center g-5 py-5">
          <div className="col-6">
            <img src="https://encurtador.com.br/gqwQq" className="d-block mx-lg-auto img fluid" width="500" height="350" />
          </div>
          <div className="col-6">
            <h1 className="display-5  fw-bold text-body-emphasis mb-3">BetCandidate</h1>
            <p className="lead">Apostas on-chain nas eleições americanos.</p>
            <p className="lead">Autentique-se com sua carteira e deixe a sua aposta para próxima disputa.</p>
            <div className="d-flex justify-content-start">
              <button type="button" className="btn btn-primary btn-lg px-4" onClick={btnLoginClick}>
                <img src="/metamask.svg " width={64} className="me-3" />
                Conectar Metamask
              </button>
              <p className="message"> </p>

            </div>
          </div>
        </div>
        <footer className="d-flex flex=wrap justify-between aling-items-center py-3 my-4 border-top">
          <p className="col-4 mb-0 text-body-secondary">
            &copy; 2024 BetCandidate, Inc
          </p>
          <ul className="nav col-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        </footer>
      </div>
    </>

  );
}
