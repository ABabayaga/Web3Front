import Head from "next/head";


export default function Home() {
    return (
        <>
            <Head>
                <title>Regras de aposta | Apostar</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container px-4 py-5">
                <div className="row  aling-items-center ">
                    <h1 className="display-5  fw-bold text-body-emphasis mb-3">Regras de aposta</h1>
                    <p className="lead">Apostas on-chain nas eleições americanos.</p>
                    <p className="lead">Você tem até o dia da eleição para deixar sua aposta em um dos candidatos abaixo.</p>
                </div>
                <div className="row flex-lg-row-reverse aling-items-center g-1 py-5">
                    
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
