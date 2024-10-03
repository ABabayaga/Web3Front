import Head from "next/head";


export default function Home() {
    return (
        <>
            <Head>
                <title>BetCandidate | Apostar</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container px-4 py-5">
                <div className="row  aling-items-center ">
                    <h1 className="display-5  fw-bold text-body-emphasis mb-3">BetCandidate</h1>
                    <p className="lead">Apostas on-chain nas eleições americanos.</p>
                    <p className="lead">Você tem até o dia da eleição para deixar sua aposta em um dos candidatos abaixo.</p>
                </div>
                <div className="row flex-lg-row-reverse aling-items-center g-1 py-5">
                    <div className="col"></div>
                    <div className="col">
                        <h3 className="my-3 d-block mx-auto" style={{ width: 250 }}>
                            Donal Trump
                        </h3>
                        <img src="https://encurtador.com.br/X8sa9" className="d-block mx-auto img-fluid rounded" width={250} />
                        <button className="btn btn-primary p-3 my-2 d-block mx-auto " style={{ width: 250 }}>
                            <img src="/poly.svg " width={45} />Aposto nesse candidato

                        </button>


                        <span className=" badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>0 POL Apostado</span>
                    </div>
                    <div className="col">
                        <h3 className="my-3 d-block mx-auto" style={{ width: 250 }}>
                            Kamala
                        </h3>
                        <img src="https://encurtador.com.br/X8sa9" className="d-block mx-auto img-fluid rounded" width={250} />
                        <button className="btn btn-primary p-3 my-2 d-block mx-auto" style={{ width: 250 }}>
                            <img src="/poly.svg " width={45} />Aposto nesse candidato

                        </button>
                        <span className=" badge text-bg-secondary d-block mx-auto" style={{ width: 250 }}>0 POL Apostado</span>
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
