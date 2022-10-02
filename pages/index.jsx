import Button from "./components/Button";


export default function Home({results}) {
  console.log(results);
  return (
   <div className="main">
    <div className="header">
    <p>Nome</p>
    <p>Porcentagem</p>
    </div>
   {results.cand.map((result) => (
    <div className="table">
    <p className="candidate">{result.nm.replace('&apos;', '\'')}</p>
    <p className="percentage">{result.pvap}</p>
    </div>
   ))}
   <Button/>
   </div>
  )
}

export const getStaticProps = async () => {
   const res = await fetch('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json')
   const results = await res.json()
   return{
     props:{
      results,
      fallback: false
     }
   }
   
 }
