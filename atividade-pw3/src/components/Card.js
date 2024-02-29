import ProdutoImagem from "./Produto";


function Card({imagem,titulo, vendedor, tipo, nota, descricao, botao}){

    titulo= "Elo boost para LOL e VALORANT";
    vendedor="LunaA #BR0";
    tipo="Variados em Jogos";
    nota="";
    descricao="O elo boost é um produto perfeito pra você que quer subir de elo e ganhar recompensas sem precisar gastar tempo e muita dedicação com o jogo. De forma resumida, comprando este serviço o vendedor jogará em sua conta e ganhara partidas até que sua conta chegue no Elo solicitado de forma rapida e pratica, alem do mais você não perde nada ja que todas as recompensas ainda serão coletadas normalmente. Chega de perder tempo subir de elo pode ser facil ;)"

    return(
        <div>
            <div className="imagecard">
                <ProdutoImagem/>
            </div>
        <div className="card">
            <div className="produtoInfo">
                <h1 className="titulo">{titulo}</h1>
                <span className="vendedor">vendido por:{vendedor}</span>
                <span className="tipo">Categoria: {tipo}</span>
                <span className="nota">Este produto foi avaliado como: {nota}</span>
                <hr></hr>
            <div className="descricaoBox">
                    <p className="descricao">{descricao}</p>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Card;