import config from '../Config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`;
 
function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then( async(respostaDoServer) => {

            if(respostaDoServer.ok) {
                const resposta = await respostaDoServer.json();
                return resposta;
            }
            throw new Error ('Não foi possível pegar os dados');
        });
}

export default{
    getAllWithVideos,
}