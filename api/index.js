// Função para renderizar o conteúdo da API
function renderPages() {
    const container = document.querySelector('.content-render-api');

    if (container) {
        // Limpa o contêiner para evitar duplicações
        container.innerHTML = '';

        // Itera sobre os dados da API
        api.forEach(pageData => {
            if (pageData.tipo === 'Imagem') {
                // Cria um artigo para cada página
                const article = document.createElement('article');
                article.classList.add('c-carousel__slide');
                // Adiciona o HTML do container_render ao artigo
                article.innerHTML = pageData.data.container_render;
                container.appendChild(article);
                // Ativar ou Desativar a Lupa nas Imagens
                // console.log(pageData.paramentros.lupa)
                // Ativas Lupa nas classes img-photo-actions
                /* Lupa
                 *  Yes | No (string)
                 *
                 */
                if (pageData.paramentros && pageData.paramentros.lupa && pageData.paramentros.lupa === "Yes") {
                    Lupa();
                }

                if (pageData.paramentros && pageData.paramentros.Tesseract && pageData.paramentros.Tesseract.ativo) {
                    const  { ocr } = pageData.paramentros.Tesseract
                    TesseractIMG(ocr);
                }

            };

            if (pageData.tipo === 'Texto') {
                // Cria um artigo para cada página
                const article = document.createElement('article');
                article.classList.add('c-carousel__slide');
                // Adiciona o HTML do container_render ao artigo
                article.innerHTML = pageData.data.container_render;
                container.appendChild(article);
                // Ativar ou Desativar a Lupa nas Imagens
                // console.log(pageData.paramentros.lupa)
                // Ativas Lupa nas classes img-photo-actions
                if (pageData.paramentros && pageData.paramentros.lupa && pageData.paramentros.lupa === "Yes") {
                    Lupa();
                }

                if (pageData.paramentros && pageData.paramentros.Tesseract && pageData.paramentros.Tesseract.ativo) {

                    const  { ocr } = pageData.paramentros.Tesseract
                    TesseractIMG(ocr);
                }



            };

            if (pageData.tipo === 'Video') {
                // Cria um artigo para cada página
                const article = document.createElement('article');
                article.classList.add('c-carousel__slide');
                // Adiciona o HTML do container_render ao artigo

                article.innerHTML = pageData.data.container_render;
                container.appendChild(article);
                // Ativar ou Desativar a Lupa nas Imagens
                // console.log(pageData.paramentros.lupa)
                // Ativas Lupa nas classes img-photo-actions


            };


            if (pageData.tipo === 'Atividade') {
                // Cria um artigo para cada página
                const article = document.createElement('article');
                article.classList.add('c-carousel__slide');
                // Adiciona o HTML do container_render ao artigo

                article.innerHTML = pageData.data.container_render;
                container.appendChild(article);
                // Ativar ou Desativar a Lupa nas Imagens
                // console.log(pageData.paramentros.lupa)
                // Ativas Lupa nas classes img-photo-actions



            };

            if (pageData.tipo === 'Audio') {
                // Cria um artigo para cada página
                const article = document.createElement('article');
                article.classList.add('c-carousel__slide');
                // Adiciona o HTML do container_render ao artigo

                article.innerHTML = pageData.data.container_render;
                container.appendChild(article);
                // Ativar ou Desativar a Lupa nas Imagens
                // console.log(pageData.paramentros.lupa)
                // Ativas Lupa nas classes img-photo-actions


            };
        });

    } else {
        console.error(`Elemento com a classe content-render-api não encontrado.`);
    }
}





renderPages();
