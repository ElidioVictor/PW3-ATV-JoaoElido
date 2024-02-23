import ProdutoImagem from "./Produto";


function Card({imagem,titulo, vendedor, tipo, nota, descricao, botao}){
    return(
        <div className="card">
            <div className="imagecard">
                <ProdutoImagem/>
            </div>

            <div className="titulo">
                <h2>{titulo}</h2>
                <span className="vendedor">vendido por:{vendedor}</span>
            </div>

        </div>
    )
}

export default Card;